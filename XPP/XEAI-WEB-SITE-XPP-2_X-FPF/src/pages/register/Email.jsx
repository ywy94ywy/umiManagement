import { useState, useRef } from 'react';
import { useRequest } from 'umi';
import { Form, message, Input } from 'antd';
import { EMAIL_VALIDATOR, EMAIL_LENGTH_VALIDATOR } from '@/config/reg';
import CountDownInput from '@/components/CountDownInput';
import { validateAccount, sendEmail } from '@/services';

export default formProps => {
  const [EmailDisabled, setEmailDisabled] = useState(true);
  const emailRef = useRef();
  const validateAccountRequest = useRequest(validateAccount, {
    manual: true,
    onSuccess(res) {
      res && setEmailDisabled(false);
    },
    onError(err) {
      message.error(err.message);
    },
  });
  const sendEmailRequest = useRequest(sendEmail, {
    manual: true,
    onSuccess() {
      message.success('邮箱验证码已发送，请注意查收！');
    },
  });

  return (
    <Form {...formProps}>
      <Form.Item
        name="email"
        label="邮箱帐号"
        validateFirst
        rules={[
          {
            required: true,
            message: '请输入电子邮箱',
          },
          EMAIL_LENGTH_VALIDATOR,
          () => ({
            validator: async (_, value) => {
              setEmailDisabled(true);
              if (value && value.match(EMAIL_VALIDATOR.pattern)) {
                const notExist = await validateAccountRequest.run(
                  {
                    type: '1',
                    userName: value,
                  },
                );
                return notExist
                  ? Promise.resolve()
                  : Promise.reject('该邮箱已存在');
              }
              return Promise.reject(EMAIL_VALIDATOR.message);
            },
          }),
        ]}
      >
        <Input placeholder="请输入电子邮箱" ref={emailRef} maxLength={36} />
      </Form.Item>
      <Form.Item
        name="verifyCode"
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
          loading={sendEmailRequest.loading}
          buttonProps={{
            disabled: EmailDisabled,
            onClick: async (_, disabled) => {
              const email = emailRef.current.state.value;
              await sendEmailRequest.run({ type: '0', email });
              disabled();
            },
          }}
        />
      </Form.Item>
    </Form>
  );
};
