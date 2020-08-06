import { Form, Input, Row } from 'antd';
import { useRequest } from 'umi';
import {
  MOBILE_VALIDATOR,
  EMAIL_VALIDATOR,
  EMAIL_LENGTH_VALIDATOR,
} from '@/config/reg';
import { Next } from './buttons';
import { validateAccount } from '@/services';

export default ({ formProps, setCurrent, setAccount }) => {
  const [accountForm] = Form.useForm();
  const validateAccountRequest = useRequest(validateAccount, {
    manual: true,
  });

  return (
    <Form {...formProps} form={accountForm}>
      <Form.Item
        name="userName"
        label="用户帐号"
        validateFirst
        validateTrigger="onSubmit"
        rules={[
          { required: true, message: '请输入手机帐号/邮箱帐号' },
          () => ({
            validator: async (_, value) => {
              const mobile = value.match(MOBILE_VALIDATOR.pattern);
              const email = value.match(EMAIL_VALIDATOR.pattern);

              if (mobile) {
                const notExist = await validateAccountRequest.run({
                  type: '0',
                  userName: value,
                });
                if (notExist) {
                  return Promise.reject('该手机号不存在');
                } else {
                  setAccount({
                    type: 'mobile',
                    value,
                  });
                }
              } else if (email) {
                const notExist = await validateAccountRequest.run({
                  type: '1',
                  userName: value,
                });

                if (notExist) {
                  return Promise.reject('该邮箱不存在');
                } else {
                  setAccount({
                    type: 'email',
                    value,
                  });
                }
              } else {
                return Promise.reject('手机或邮箱格式错误');
              }

              return Promise.resolve();
            },
          }),
        ]}
      >
        <Input
          placeholder="请输入手机帐号/邮箱帐号"
          maxLength={EMAIL_LENGTH_VALIDATOR.max}
        />
      </Form.Item>
      <Row justify="end">
        <Next
          onClick={async () => {
            await accountForm.validateFields();
            setCurrent(c => ++c);
          }}
        />
      </Row>
    </Form>
  );
};
