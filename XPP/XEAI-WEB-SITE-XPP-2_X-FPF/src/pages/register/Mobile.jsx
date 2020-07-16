import { useState, useRef } from 'react';
import { useRequest } from 'umi';
import { Form, message, Input } from 'antd';
import { MOBILE_VALIDATOR } from '@/config/reg';
import CountDownInput from '@/components/CountDownInput';
import { sendMessage } from './servers';
import { validateAccount } from '@/services';

export default ({}) => {
  const [mobileDisabled, setMobileDisabled] = useState(true);
  const canValidateMobileRef = useRef(false);
  const validateAccountRequest = useRequest(validateAccount, {
    manual: true,
    onSuccess(res) {
      if (res && res.userId) {
        setMobileDisabled(true);
        form.setFields([
          {
            name: ['userMobile'],
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
  const sendMessageRequest = useRequest(sendMessage, {
    manual: true,
    onSuccess() {
      message.success('手机验证码已发送，请注意查收！');
    },
  });

  return (
    <>
      <Form.Item
        name="userMobile"
        label="手机帐号"
        validateFirst
        validateTrigger="onChange"
        rules={[
          {
            required: true,
            message: '请输入手机号',
          },
          () => ({
            validator: async (_, value) => {
              canValidateMobileRef.current = false;
              setMobileDisabled(true);
              if (value && value.match(MOBILE_VALIDATOR.pattern)) {
                canValidateMobileRef.current = true;
                return Promise.resolve();
              }
              return Promise.reject(MOBILE_VALIDATOR.message);
            },
          }),
        ]}
      >
        <Input
          placeholder="请输入手机号"
          tabIndex="1"
          onChange={e => {
            if (canValidateMobileRef.current) {
              validateAccountRequest.run(e.target.value);
            }
          }}
        />
      </Form.Item>
      <Form.Item
        name="userMobileCaptchaTarget"
        label="短信验证"
        rules={[
          {
            required: true,
            message: '请输入手机短信验证码',
          },
        ]}
      >
        <CountDownInput
          placeholder="请输入手机短信验证码"
          tabIndex="2"
          loading={sendMessageRequest.loading}
          buttonProps={{
            disabled: mobileDisabled,
            onClick: async (_, disabled) => {
              const mobile = form.getFieldValue('userMobile');
              await sendMessageRequest.run(mobile);
              disabled();
            },
          }}
        />
      </Form.Item>
    </>
  );
};
