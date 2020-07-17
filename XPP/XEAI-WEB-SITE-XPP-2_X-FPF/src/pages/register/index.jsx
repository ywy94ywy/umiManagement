/**
 * @page 注册
 */
import { useState } from 'react';
import { SafeInput, ButtonModal } from 'lanlinker';
import { useRequest, history } from 'umi';
import { Tabs, Input, Button, Checkbox, Form, message } from 'antd';
import { mobileRegister, emailRegister } from './servers';
import Agreement from './Agreement';
import Mobile from './Mobile';
import Email from './Email';
import Nickname from './Nickname';

const TABS = ['手机注册', '邮箱注册'];

export default () => {
  const [tab, setTab] = useState(TABS[0]);
  const [form] = Form.useForm();
  const mobileRegisterRequest = useRequest(mobileRegister, {
    manual: true,
    onSuccess() {
      history.push('/login');
      message.success('注册成功！');
    },
    onError(err) {
      message.error(err.message);
    },
  });
  const emailRegisterRequest = useRequest(emailRegister, {
    manual: true,
    onSuccess() {
      history.push('/login');
      message.success('注册成功！');
    },
    onError(err) {
      message.error(err.message);
    },
  });

  const onSubmit = async () => {
    const fields = [
      'userNickname',
      'userLoginPassword',
      'userLoginPasswordConfirm',
      'userSafePassword',
      'userSafePasswordConfirm',
      'agree',
    ];
    if (tab === TABS[0]) {
      const res = await form.validateFields([
        'userMobile',
        'userMobileCaptchaTarget',
        ...fields,
      ]);
      mobileRegisterRequest.run(res);
    }
    if (tab === TABS[1]) {
      const res = await form.validateFields([
        'userEmail',
        'userEmailCaptchaTarget',
        ...fields,
      ]);
      emailRegisterRequest.run(res);
    }
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
    >
      <Tabs
        activekey={tab}
        onChange={key => setTab(key)}
        size="large"
        tabBarStyle={{ marginLeft: 69 }}
      >
        <Tabs.TabPane tab={TABS[0]} key={TABS[0]}>
          <Mobile />
        </Tabs.TabPane>
        <Tabs.TabPane tab={TABS[1]} key={TABS[1]}>
          <Email />
        </Tabs.TabPane>
      </Tabs>
      <Nickname />
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
          {
            len: 6,
            message: '请输入六位安全密码',
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
          onClick={() => onSubmit()}
          loading={
            mobileRegisterRequest.loading || emailRegisterRequest.loading
          }
        >
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
