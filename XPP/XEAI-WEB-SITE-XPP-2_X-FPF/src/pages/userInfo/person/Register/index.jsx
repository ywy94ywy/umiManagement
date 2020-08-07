/**
 * @module 注册信息（个人）
 */
import { useState, useEffect } from 'react';
import { Form, BindInput } from 'lanlinker';
import { Input, message } from 'antd';
import { useModel, useRequest } from 'umi';
import { NICK_VALIDATOR, USER_FULLNAME_VALIDATOR } from '@/config/reg';
import EditForm from '../../components/EditForm';
import User from '../../components/User';

import { updatePersonRegister } from '../../services';

export default ({ layout }) => {
  const [registerForm] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  const { userInfo, fetchUserRequest } = useModel('userInfo');
  const updatePersonRegisterRequest = useRequest(updatePersonRegister, {
    manual: true,
    onSuccess() {
      message.success('用户信息保存成功！');
      setDisabled(true);
    },
    onError(err) {
      message.error(err.message);
    },
  });

  useEffect(() => {
    if (!userInfo) {
      fetchUserRequest.run();
    }
  }, []);

  useEffect(() => {
    if (userInfo) {
      registerForm.setFieldsValue(userInfo);
    }
  }, [userInfo]);

  return (
    <EditForm
      disabled={disabled}
      setDisabled={setDisabled}
      onSave={async () => {
        const data = await registerForm.validateFields();

        updatePersonRegisterRequest.run({
          id: userInfo.id,
          fullName: data.fullName,
          nickname: data.nickname,
          avatar: '',
        });
      }}
      onCancel={() => {
        registerForm.setFieldsValue(userInfo);
        setDisabled(true);
      }}
    >
      <Form
        {...layout}
        columns={2}
        style={{ width: 800, margin: '0 auto' }}
        form={registerForm}
        validateTrigger="onBlur"
      >
        <Form.Item label="用户类型">
          <span>个人</span>
        </Form.Item>
        <Form.Item>
          <User
            disabled={disabled}
            onOk={cb => {
              console.log(123);
              setTimeout(() => {
                cb();
              }, 1000);
            }}
          />
        </Form.Item>
        <Form.Item
          label="用户全名"
          name="fullName"
          rules={[USER_FULLNAME_VALIDATOR]}
        >
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="昵称账号" name="nickname" rules={[NICK_VALIDATOR]}>
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="手机账号" name="mobile">
          <BindInput disabled active={userInfo.mobile} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="邮箱账号" name="email">
          <BindInput disabled active={userInfo.email} />
        </Form.Item>
        <Form.Item />
      </Form>
    </EditForm>
  );
};
