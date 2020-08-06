/**
 * @page 注册
 */
import { useState } from 'react';
import { ButtonModal } from 'lanlinker';
import { useRequest, history } from 'umi';
import { Tabs, Input, Button, Checkbox, Form, message, Select } from 'antd';
import { PASSWORD_VALIDATOR, USER_FULLNAME_VALIDATOR } from '@/config/reg';
import { register } from './services';
import Agreement from './Agreement';
import Mobile from './Mobile';
import Email from './Email';
import Nickname from './Nickname';

const TABS = ['手机注册', '邮箱注册'];
const formProps = {
  colon: false,
  hideRequiredMark: true,
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
  style: { width: 400 },
  validateTrigger: 'onBlur',
};

export default () => {
  const [infoForm] = Form.useForm();
  const [mobileForm] = Form.useForm();
  const [emailForm] = Form.useForm();
  const [tab, setTab] = useState(TABS[0]);
  const registerRequest = useRequest(register, {
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
    // 手机注册
    if (tab === TABS[0]) {
      const [mobile, info] = await Promise.all([
        mobileForm.validateFields(),
        infoForm.validateFields(),
      ]);
      const data = {
        mobile: mobile.mobile,
        verifyCode: mobile.verifyCode,
        type: info.type,
        fullName: info.fullName,
        nickname: info.nickname,
        loginPassword: info.loginPassword,
        registerType: '0',
      };

      registerRequest.run(data);
    }
    // 邮箱注册
    if (tab === TABS[1]) {
      const [email, info] = await Promise.all([
        emailForm.validateFields(),
        infoForm.validateFields(),
      ]);
      const data = {
        email: email.email,
        verifyCode: email.verifyCode,
        type: info.type,
        fullName: info.fullName,
        nickname: info.nickname,
        loginPassword: info.loginPassword,
        registerType: '1',
      };

      registerRequest.run(data);
    }
  };

  return (
    <>
      <Tabs
        activekey={tab}
        onChange={key => setTab(key)}
        size="large"
        tabBarStyle={{ marginLeft: 69 }}
      >
        <Tabs.TabPane tab={TABS[0]} key={TABS[0]}>
          <Mobile form={mobileForm} {...formProps} />
        </Tabs.TabPane>
        <Tabs.TabPane tab={TABS[1]} key={TABS[1]}>
          <Email form={emailForm} {...formProps} />
        </Tabs.TabPane>
      </Tabs>
      <Form form={infoForm} initialValues={{ type: '1' }} {...formProps}>
        <Form.Item
          name="type"
          label="用户类型"
          rules={[
            {
              required: true,
              message: '请选择用户类型',
            },
          ]}
        >
          <Select>
            <Select.Option value="1">个人</Select.Option>
            <Select.Option value="2">企业</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="fullName"
          label="用户全名"
          rules={[
            {
              required: true,
              message: '请输入用户全名',
            },
            USER_FULLNAME_VALIDATOR,
          ]}
        >
          <Input placeholder="请输入用户全名" />
        </Form.Item>
        <Nickname />
        <Form.Item
          name="loginPassword"
          label="登录密码"
          rules={[
            {
              required: true,
              message: '请输入登录密码',
            },
            PASSWORD_VALIDATOR,
          ]}
        >
          <Input.Password placeholder="请输入登录密码" />
        </Form.Item>
        <Form.Item
          name="loginPasswordConfirm"
          label="确认密码"
          dependencies={['loginPassword']}
          rules={[
            {
              required: true,
              message: '请再次输入登录密码',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('loginPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('两次密码输入不一致！');
              },
            }),
          ]}
        >
          <Input.Password placeholder="请重新输入登录密码" />
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
          <Checkbox>
            <ButtonModal
              title="平台用户协议"
              okText="同意"
              cancelText="不同意"
              onOk={(_, close) => {
                infoForm.setFieldsValue({ agree: true });
                close();
              }}
              onCancel={() => {
                infoForm.setFieldsValue({ agree: false });
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
            onClick={e => onSubmit(e)}
            block
            loading={registerRequest.loading}
          >
            注册
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
