import { Form, Row, Input } from 'antd';
import { Prev, Next } from './buttons';
import { useRequest } from 'umi';
import { resetPassword } from '../services';

export default ({ formProps, setCurrent, account }) => {
  const [passwordForm] = Form.useForm();
  const resetPasswordRequest = useRequest(resetPassword, {
    manual: true,
  });

  return (
    <Form {...formProps} form={passwordForm}>
      <Form.Item
        name="newPassword"
        label="新登录密码"
        rules={[
          {
            required: true,
            message: '请输入登录密码',
          },
          {
            min: 6,
            message: '密码至少6位',
          },
        ]}
      >
        <Input.Password placeholder="请输入登录密码" maxLength={18} />
      </Form.Item>
      <Form.Item
        name="newPasswordConfirm"
        label="登录密码确认"
        dependencies={['newPassword']}
        rules={[
          {
            required: true,
            message: '请再次输入登录密码',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject('两次密码输入不一致！');
            },
          }),
        ]}
      >
        <Input.Password placeholder="请重新输入登录密码" />
      </Form.Item>
      <Row justify="space-between">
        <Prev onClick={() => setCurrent(c => --c)} />
        <Next
          onClick={async () => {
            const newPassword = passwordForm.getFieldValue('newPassword');
            await resetPasswordRequest.run({
              newPassword,
              userName: account.value,
            });
            setCurrent(c => ++c);
          }}
        />
      </Row>
    </Form>
  );
};
