/**
 * @page 注册
 */
import { useState } from 'react';
import { SafeInput, ButtonModal } from 'lanlinker';
import CountDownInput from '@/components/CountDownInput';
import { useRequest, history } from 'umi';
import { Tabs, Input, Button, Checkbox, Form, message } from 'antd';
import {
  sendMessage,
  sendEmail,
  mobileRegister,
  emailRegister,
} from './servers';
import Agreement from './Agreement';
import {
  MOBILE_VALIDATOR,
  EMAIL_VALIDATOR,
  NICK_VALIDATOR,
} from '@/config/reg';

const TABS = ['手机注册', '邮箱注册'];

export default () => {
  const [tab, setTab] = useState(TABS[0]);
  const [form] = Form.useForm();
  const { run: runSendMessage, loading: sendMessageLoading } = useRequest(
    sendMessage,
    {
      manual: true,
      onSuccess() {
        message.success('手机验证码已发送，请注意查收！');
      },
    },
  );
  const { run: runSendEmail, loading: sendEmailLoading } = useRequest(
    sendEmail,
    {
      manual: true,
      onSuccess() {
        message.success('邮箱验证码已发送，请注意查收！');
      },
    },
  );
  const { run: runMobileRegister, loading: mobileLoading } = useRequest(
    mobileRegister,
    {
      manual: true,
      onSuccess(res) {
        history.push('/login');
        message.success('注册成功！');
      },
    },
  );
  const { run: runEmailRegister, loading: emailLoading } = useRequest(
    emailRegister,
    {
      manual: true,
      onSuccess() {
        history.push('/login');
        message.success('注册成功！');
      },
    },
  );

  const onFinish = values => {
    tab === TABS[0] && runMobileRegister(values);
    tab === TABS[1] && runEmailRegister(values);
  };

  return (
    <Form
      form={form}
      colon={false}
      hideRequiredMark
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      validateTrigger="onBlur"
      style={{ width: 400 }}
      onFinish={onFinish}
    >
      <Tabs
        activekey={tab}
        onChange={key => setTab(key)}
        size="large"
        tabBarStyle={{ marginLeft: 69 }}
      >
        <Tabs.TabPane tab={TABS[0]} key={TABS[0]}>
          <Form.Item
            name="userMobile"
            label="手机帐号"
            rules={[
              {
                required: true,
                message: '请输入手机号',
              },
              MOBILE_VALIDATOR,
            ]}
          >
            <Input placeholder="请输入手机号" tabIndex="1" />
          </Form.Item>
          <Form.Item
            name="userMobileCaptchaTarget"
            label="短信验证"
            rules={[
              {
                required: true,
                message: '请输入手机短信验证码',
              },
            ]}
          >
            <CountDownInput
              placeholder="请输入手机短信验证码"
              tabIndex="2"
              loading={sendMessageLoading}
              buttonProps={{
                onClick: async (_, count) => {
                  try {
                    const { userMobile } = await form.validateFields([
                      'userMobile',
                    ]);
                    const res = await runSendMessage(userMobile);
                    !res && count();
                  } catch (err) {
                    throw err;
                  }
                },
              }}
            />
          </Form.Item>
        </Tabs.TabPane>
        <Tabs.TabPane tab={TABS[1]} key={TABS[1]}>
          <Form.Item
            name="userEmail"
            label="邮箱帐号"
            rules={[
              {
                required: true,
                message: '请输入电子邮箱',
              },
              EMAIL_VALIDATOR,
            ]}
          >
            <Input placeholder="请输入电子邮箱" tabIndex="1" />
          </Form.Item>
          <Form.Item
            name="userEmailCaptchaTarget"
            label="邮箱验证"
            rules={[
              {
                required: true,
                message: '请输入邮箱验证码',
              },
            ]}
          >
            <CountDownInput
              placeholder="请输入邮箱验证码"
              tabIndex="2"
              loading={sendEmailLoading}
              buttonProps={{
                onClick: async (_, count) => {
                  try {
                    const { userEmail } = await form.validateFields([
                      'userEmail',
                    ]);
                    const res = await runSendEmail(userEmail);
                    !res && count();
                  } catch (err) {
                    throw err;
                  }
                },
              }}
            />
          </Form.Item>
        </Tabs.TabPane>
      </Tabs>
      <Form.Item
        name="userNickname"
        label="昵称帐号"
        rules={[
          {
            required: true,
            message: '请输入昵称帐号',
          },
          NICK_VALIDATOR,
        ]}
      >
        <Input placeholder="请输入昵称帐号" tabIndex="3" />
      </Form.Item>
      <Form.Item
        name="userLoginPassword"
        label="登录密码"
        rules={[
          {
            required: true,
            message: '请输入登录密码',
          },
        ]}
      >
        <Input placeholder="请输入登录密码" tabIndex="4" />
      </Form.Item>
      <Form.Item
        name="userLoginPasswordConfirm"
        label="确认密码"
        dependencies={['userLoginPassword']}
        rules={[
          {
            required: true,
            message: '请再次输入登录密码',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('userLoginPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject('两次密码输入不一致！');
            },
          }),
        ]}
      >
        <Input placeholder="请重新输入登录密码" tabIndex="5" />
      </Form.Item>
      <Form.Item
        name="userSafePassword"
        label="安全密码"
        rules={[
          {
            required: true,
            message: '请输入安全密码',
          },
        ]}
      >
        <SafeInput tabIndex="6" />
      </Form.Item>
      <Form.Item
        name="userSafePasswordConfirm"
        label="确认密码"
        dependencies={['userSafePassword']}
        rules={[
          {
            required: true,
            message: '请再次输入安全密码',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('userSafePassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject('两次密码输入不一致！');
            },
          }),
        ]}
      >
        <SafeInput tabIndex="7" />
      </Form.Item>
      <Form.Item
        name="agree"
        wrapperCol={{ offset: 4 }}
        valuePropName="checked"
        rules={[
          () => ({
            validator(_, value) {
              if (value !== true) {
                return Promise.reject('请同意《平台用户协议》');
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <Checkbox tabIndex="8">
          <ButtonModal
            title="平台用户协议"
            okText="同意"
            cancelText="不同意"
            onOk={(_, close) => {
              form.setFieldsValue({ agree: true });
              close();
            }}
            onCancel={() => {
              form.setFieldsValue({ agree: false });
            }}
            buttonProps={{
              text: '同意《平台用户协议》',
              type: 'link',
              size: 'small',
            }}
          >
            <Agreement />
          </ButtonModal>
        </Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button
          type="primary"
          block
          htmlType="submit"
          loading={mobileLoading || emailLoading}
        >
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
