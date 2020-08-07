/**
 * @module 注册信息（企业）
 */
import { useState, useEffect } from 'react';
import { Form, BindInput } from 'lanlinker';
import { Input, message } from 'antd';
import { useModel, useRequest } from 'umi';
import { NICK_VALIDATOR, USER_FULLNAME_VALIDATOR } from '@/config/reg';
import { USER_TYPE } from '@/config/enum';
import EditForm from '../../components/EditForm';
import User from '../../components/User';
import { updateCompanyRegister } from '../../services';

export default ({ layout }) => {
  const [registerForm] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  const { userInfo, fetchUserRequest } = useModel('userInfo');
  const updateCompanyRegisterRequest = useRequest(updateCompanyRegister, {
    manual: true,
    onSuccess() {
      message.success('用户信息保存成功！');
      fetchUserRequest.run();
      setDisabled(true);
    },
    onError(err) {
      message.error(err.message);
    },
  });

  useEffect(() => {
    userInfo && registerForm.setFieldsValue(userInfo);
  }, []);

  return (
    <EditForm
      disabled={disabled}
      setDisabled={setDisabled}
      onSave={async () => {
        const data = await registerForm.validateFields();

        updateCompanyRegisterRequest.run({
          id: userInfo.id,
          fullName: data.fullName,
          briefName: data.briefName,
          nickname: data.nickname,
          avatar: '',
        });
      }}
      onCancel={() => {
        userInfo && registerForm.setFieldsValue(userInfo);
        setDisabled(true);
      }}
    >
      <Form
        form={registerForm}
        {...layout}
        columns={2}
        style={{ width: 800, margin: '0 auto' }}
      >
        <Form.Item label="用户类型">
          <span>{USER_TYPE.COMPANY.VALUE}</span>
        </Form.Item>
        <Form.Item name="avatar">
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
        <Form.Item label="用户简名" name="briefName">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="昵称帐号" name="nickname" rules={[NICK_VALIDATOR]}>
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="手机帐号" name="mobile">
          <BindInput disabled active={userInfo.mobile} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="邮箱帐号" name="email">
          <BindInput disabled active={userInfo.email} />
        </Form.Item>
        <Form.Item />
      </Form>
    </EditForm>
  );
};
