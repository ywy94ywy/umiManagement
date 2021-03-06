import { Form, Row, Input } from 'antd';
import { Prev, Next } from './buttons';
import { useRequest } from 'umi';
import { PASSWORD_VALIDATOR } from '@/config/reg';
import { confirmField } from '@/utils';
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
          PASSWORD_VALIDATOR,
        ]}
      >
        <Input.Password placeholder="请输入登录密码" />
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
          confirmField('newPassword'),
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
