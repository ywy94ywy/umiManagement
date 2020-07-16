import { useState, useRef } from 'react';
import { useRequest } from 'umi';
import { Form, message, Input } from 'antd';
import { EMAIL_VALIDATOR } from '@/config/reg';
import CountDownInput from '@/components/CountDownInput';
import { sendEmail } from './servers';
import { validateAccount } from '@/services';

export default () => {
  const [EmailDisabled, setEmailDisabled] = useState(true);
  const canValidateEmailRef = useRef(false);
  const validateAccountRequest = useRequest(validateAccount, {
    manual: true,
    onSuccess(res) {
      if (res && res.userId) {
        setMobileDisabled(true);
        form.setFields([
          {
            name: ['userEmail'],
            errors: ['账号已存在'],
          },
        ]);
      } else {
        setMobileDisabled(false);
      }
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
    <>
      <Form.Item
        name="userEmail"
        label="邮箱帐号"
        validateFirst
        validateTrigger="onChange"
        rules={[
          {
            required: true,
            message: '请输入电子邮箱',
          },
          () => ({
            validator: async (_, value) => {
              canValidateEmailRef.current = false;
              setEmailDisabled(true);
              if (value && value.match(EMAIL_VALIDATOR.pattern)) {
                canValidateEmailRef.current = true;
                return Promise.resolve();
              }
              return Promise.reject(EMAIL_VALIDATOR.message);
            },
          }),
        ]}
      >
        <Input
          placeholder="请输入电子邮箱"
          tabIndex="1"
          onChange={e => {
            if (canValidateEmailRef.current) {
              validateAccountRequest.run(e.target.value);
            }
          }}
        />
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
          loading={sendEmailRequest.loading}
          buttonProps={{
            disabled: EmailDisabled,
            onClick: async (_, disabled) => {
              const email = form.getFieldValue('userEmail');
              console.log(email);
              await sendEmailRequest.run(email);
              disabled();
            },
          }}
        />
      </Form.Item>
    </>
  );
};
