import { useState, useRef } from 'react';
import { Form, Result, Tabs, Input, Select, message } from 'antd';
import CountDownInput from '@/components/CountDownInput';
import { SafeInput } from 'lanlinker';
import { useRequest } from 'umi';
import { sendResetMobile, sendResetEmail } from '@/pages/userSecurity/services';
import { validateAccount } from '@/services';

import { PASSWORD_QUESTIONS } from '@/config/enum';
import { MOBILE_VALIDATOR, EMAIL_VALIDATOR } from '@/config/reg';
import { useEffect } from 'react';

export default ({
  currentStep,
  currentTab,
  setCurrentTab,
  phoneForm,
  emailForm,
  validateForm,
  sercurityForm,
  layout,
  TAB_LIST,
}) => {
  switch (currentStep) {
    case 0:
      return (
        <Tabs
          size="large"
          style={{ width: 500, margin: '30px auto', minHeight: 300 }}
          activeKey={currentTab}
          onChange={key => setCurrentTab(key)}
        >
          <Tabs.TabPane tab={TAB_LIST[0]} key={TAB_LIST[0]} forceRender>
            <PhoneForm form={phoneForm} layout={layout} />
          </Tabs.TabPane>
          <Tabs.TabPane tab={TAB_LIST[1]} key={TAB_LIST[1]} forceRender>
            <EmailForm form={emailForm} layout={layout} />
          </Tabs.TabPane>
          <Tabs.TabPane tab={TAB_LIST[2]} key={TAB_LIST[2]} forceRender>
            <ValidateForm form={validateForm} layout={layout} />
          </Tabs.TabPane>
        </Tabs>
      );
    case 1:
      return <SecurityForm form={sercurityForm} layout={layout} />;
    case 2:
      return <Result status="success" title="操作成功" />;
    default:
      return null;
  }
};

// 手机验证
const PhoneForm = ({ layout, form }) => {
  const [sendDisabled, setSendDisabled] = useState(true);
  const canValidateRef = useRef(false);

  const validateAccountRequest = useRequest(validateAccount, {
    onSuccess() {
      if (res && res.userId) {
        setSendDisabled(false);
      } else {
        setSendDisabled(true);
        form.setFields([
          {
            name: ['userMobile'],
            errors: ['账号不存在'],
          },
        ]);
      }
    },
    onError(err) {
      message.error(err.message);
    },
    manual: true,
  });
  const sendResetMobileRequest = useRequest(sendResetMobile, {
    onSuccess() {
      message.success('短信发送成功！');
    },
    onError(err) {
      message.error(err.message);
    },
    manual: true,
  });

  return (
    <Form form={form} {...layout} preserve={false}>
      <Form.Item
        name="userMobile"
        label="手机账号"
        validateFirst
        rules={[
          { required: true },
          () => ({
            validator: async (_, value) => {
              canValidateRef.current = false;
              setSendDisabled(true);
              if (value && value.match(MOBILE_VALIDATOR.pattern)) {
                canValidateRef.current = true;
                return Promise.resolve();
              }
              return Promise.reject(MOBILE_VALIDATOR.message);
            },
          }),
        ]}
      >
        <Input
          placeholder="请输入手机账号"
          onChange={e => {
            if (canValidateRef.current) {
              validateAccountRequest.run(e.target.value);
            }
          }}
        ></Input>
      </Form.Item>
      <Form.Item
        name="userMobileCaptchaTarget"
        label="短信验证码"
        rules={[{ required: true }]}
      >
        <CountDownInput
          buttonProps={{
            disabled: sendDisabled,
            onClick: async (_, disabled) => {
              const mobile = form.getFieldValue('userMobile');
              sendResetMobileRequest.run(mobile);
              disabled();
            },
          }}
        />
      </Form.Item>
    </Form>
  );
};

// 邮箱验证
const EmailForm = ({ form, layout }) => {
  const [sendDisabled, setSendDisabled] = useState(true);
  const canValidateRef = useRef(false);

  const validateAccountRequest = useRequest(validateAccount, {
    onSuccess() {
      if (res && res.userId) {
        setSendDisabled(false);
      } else {
        setSendDisabled(true);
        form.setFields([
          {
            name: ['userEmail'],
            errors: ['账号不存在'],
          },
        ]);
      }
    },
    manual: true,
  });
  const sendResetEmailRequest = useRequest(sendResetEmail, {
    onSuccess() {
      message.success('邮件发送成功！');
    },
    onError(err) {
      message.error(err.message);
    },
    manual: true,
  });

  return (
    <Form form={form} {...layout} preserve={false}>
      <Form.Item
        name="userEmail"
        label="邮箱账号"
        validateFirst
        rules={[
          { required: true },
          () => ({
            validator: async (_, value) => {
              canValidateRef.current = false;
              setSendDisabled(true);
              if (value && value.match(EMAIL_VALIDATOR.pattern)) {
                canValidateRef.current = true;
                return Promise.resolve();
              }
              setSendDisabled(true);
              return Promise.reject(EMAIL_VALIDATOR.message);
            },
          }),
        ]}
      >
        <Input
          placeholder="请输入邮箱账号"
          onChange={e => {
            if (canValidateRef.current) {
              validateAccountRequest.run(e.target.value);
            }
          }}
        ></Input>
      </Form.Item>
      <Form.Item
        name="userEmailCaptchaTarget"
        label="邮箱验证码"
        rules={[{ required: true }]}
      >
        <CountDownInput
          buttonProps={{
            disabled: sendDisabled,
            onClick: async (_, disabled) => {
              const email = form.getFieldValue('userEmail');
              sendResetEmailRequest.run(email);
              disabled();
            },
          }}
        />
      </Form.Item>
    </Form>
  );
};

// 密保验证
const ValidateForm = ({ form, layout }) => {
  const [fields, setFields] = useState([1, 2, 3]);
  const isDisabled = key => fields.includes(key);

  const changeFileds = (n, value) => {
    const newFileds = [...fields];
    newFileds[n] = value;
    setFields(newFileds);
  };

  useEffect(() => {
    form.setFieldsValue({
      1: 1,
      3: 2,
      5: 3,
    });
  }, []);

  return (
    <Form form={form} {...layout} preserve={false}>
      <Form.Item label="密保问题01" name="1" rules={[{ required: true }]}>
        <Select onChange={e => changeFileds(0, e)}>
          {PASSWORD_QUESTIONS.map(v => (
            <Select.Option
              value={v.key}
              key={v.key}
              disabled={isDisabled(v.key)}
            >
              {v.value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="密保答案01" name="2" rules={[{ required: true }]}>
        <Input placeholder="请输入密保答案" />
      </Form.Item>
      <Form.Item label="密保问题02" name="3" rules={[{ required: true }]}>
        <Select onChange={e => changeFileds(1, e)}>
          {PASSWORD_QUESTIONS.map(v => (
            <Select.Option
              value={v.key}
              key={v.key}
              disabled={isDisabled(v.key)}
            >
              {v.value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="密保答案02" name="4" rules={[{ required: true }]}>
        <Input placeholder="请输入密保答案" />
      </Form.Item>
      <Form.Item label="密保问题03" name="5" rules={[{ required: true }]}>
        <Select onChange={e => changeFileds(2, e)}>
          {PASSWORD_QUESTIONS.map(v => (
            <Select.Option
              value={v.key}
              key={v.key}
              disabled={isDisabled(v.key)}
            >
              {v.value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="密保答案03" name="6" rules={[{ required: true }]}>
        <Input placeholder="请输入密保答案" />
      </Form.Item>
    </Form>
  );
};

// 新安全密码
const SecurityForm = ({ form, layout }) => {
  return (
    <Form
      form={form}
      {...layout}
      style={{ width: 500, margin: '80px auto', minHeight: 200 }}
      preserve={false}
    >
      <Form.Item
        name="userSafePassword"
        label="新安全密码"
        rules={[{ required: true }]}
      >
        <SafeInput />
      </Form.Item>
      <Form.Item
        dependencies={['userSafePassword']}
        name="userSafePasswordConfirm"
        label="新安全密码确认"
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('userSafePassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject('两次输入的密码不一致！');
            },
          }),
        ]}
      >
        <SafeInput />
      </Form.Item>
    </Form>
  );
};
