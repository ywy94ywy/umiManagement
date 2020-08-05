import { useEffect } from 'react';
import { Form, Input, Row, message } from 'antd';
import { useRequest } from 'umi';
import CountDownInput from '@/components/CountDownInput';
import { Prev, Next } from './buttons';
import {
  sendMobile,
  sendEmail,
  validateMobile,
  validateEmail,
} from '@/services';

export default ({ formProps, setCurrent, account }) => {
  const [messageForm] = Form.useForm();
  const sendMobileRequest = useRequest(sendMobile, {
    manual: true,
    onSuccess() {
      message.success('手机验证码已发送，请注意查收！');
    },
  });
  const sendEmailRequest = useRequest(sendEmail, {
    manual: true,
    onSuccess() {
      message.success('邮箱验证码已发送，请注意查收！');
    },
  });
  const validateMobileRequest = useRequest(validateMobile, {
    manual: true,
  });
  const validateEmailRequest = useRequest(validateEmail, {
    manual: true,
  });

  useEffect(() => {
    account.type === 'mobile' &&
      messageForm.setFieldsValue({
        mobile: account.value,
      });
    account.type === 'email' &&
      messageForm.setFieldsValue({
        email: account.value,
      });
  }, [account]);

  return (
    <Form {...formProps} form={messageForm}>
      {account.type === 'mobile' && (
        <>
          <Form.Item name="mobile" label="手机帐号">
            <Input placeholder="请输入手机号" maxLength={11} disabled />
          </Form.Item>
          <Form.Item name="code" label="短信验证">
            <CountDownInput
              placeholder="请输入手机短信验证码"
              buttonProps={{
                onClick: async (_, disabled) => {
                  await sendMobileRequest.run({
                    type: '1',
                    mobile: account.value,
                  });
                  disabled();
                },
              }}
            />
          </Form.Item>
        </>
      )}
      {account.type === 'email' && (
        <>
          <Form.Item name="email" label="邮箱帐号">
            <Input placeholder="请输入电子邮箱" maxLength={32} disabled />
          </Form.Item>
          <Form.Item name="code" label="邮箱验证">
            <CountDownInput
              placeholder="请输入邮箱验证码"
              buttonProps={{
                onClick: async (_, disabled) => {
                  await sendEmailRequest.run({
                    type: '1',
                    email: account.value,
                  });
                  disabled();
                },
              }}
            />
          </Form.Item>
        </>
      )}

      <Row justify="space-between">
        <Prev onClick={() => setCurrent(c => --c)} />
        <Next
          onClick={async () => {
            const code = messageForm.getFieldValue('code');
            if (account.type === 'mobile') {
              await validateMobileRequest.run({
                code,
                mobile: account.value,
                type: '1',
              });
              setCurrent(c => ++c);
            }
            if (account.type === 'email') {
              await validateEmailRequest.run({
                code,
                email: account.value,
                type: '1',
              });
              setCurrent(c => ++c);
            }
          }}
        />
      </Row>
    </Form>
  );
};
