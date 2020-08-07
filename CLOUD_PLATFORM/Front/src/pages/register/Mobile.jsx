import { useState, useRef } from 'react';
import { useRequest } from 'umi';
import { Form, message, Input } from 'antd';
import { MOBILE_VALIDATOR } from '@/config/reg';
import { ACCOUNT_TYPE, VERIFY_CODE } from '@/config/enum';
import CountDownInput from '@/components/CountDownInput';
import { validateAccount, sendMobile } from '@/services';

export default formProps => {
  const [mobileDisabled, setMobileDisabled] = useState(true);
  const mobileRef = useRef();
  const validateAccountRequest = useRequest(validateAccount, {
    manual: true,
    onSuccess(res) {
      res && setMobileDisabled(false);
    },
    onError(err) {
      message.error(err.message);
    },
  });
  const sendMobileRequest = useRequest(sendMobile, {
    manual: true,
    onSuccess() {
      message.success('手机验证码已发送，请注意查收！');
    },
  });

  return (
    <Form {...formProps}>
      <Form.Item
        name="mobile"
        label="手机帐号"
        validateFirst
        rules={[
          {
            required: true,
            message: '请输入手机号',
          },
          () => ({
            validator: async (_, value) => {
              setMobileDisabled(true);
              if (value && value.match(MOBILE_VALIDATOR.pattern)) {
                const notExist = await validateAccountRequest.run({
                  type: ACCOUNT_TYPE.MOBILE,
                  userName: value,
                });

                return notExist
                  ? Promise.resolve()
                  : Promise.reject('该手机号已存在');
              }
              return Promise.reject(MOBILE_VALIDATOR.message);
            },
          }),
        ]}
      >
        <Input placeholder="请输入手机号" ref={mobileRef} maxLength={11} />
      </Form.Item>
      <Form.Item
        name="verifyCode"
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
          loading={sendMobileRequest.loading}
          buttonProps={{
            disabled: mobileDisabled,
            onClick: async (_, disabled) => {
              const mobile = mobileRef.current.state.value;
              await sendMobileRequest.run({
                type: VERIFY_CODE.REGISTER,
                mobile,
              });
              disabled();
            },
          }}
        />
      </Form.Item>
    </Form>
  );
};
