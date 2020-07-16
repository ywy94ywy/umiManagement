import { useRef } from 'react';
import { useRequest } from 'umi';
import { Form, message, Input } from 'antd';
import { NICK_VALIDATOR } from '@/config/reg';
import { validateAccount } from '@/services';

export default () => {
  const canValidateNicknameRef = useRef(false);
  const validateAccountRequest = useRequest(validateAccount, {
    manual: true,
    onSuccess(res) {
      if (res && res.userId) {
        form.setFields([
          {
            name: ['userNickname'],
            errors: ['账号已存在'],
          },
        ]);
      }
    },
    onError(err) {
      message.error(err.message);
    },
  });

  return (
    <Form.Item
      name="userNickname"
      label="昵称帐号"
      validateFirst
      rules={[
        {
          required: true,
          message: '请输入昵称帐号',
        },
        () => ({
          validator: async (_, value) => {
            canValidateNicknameRef.current = false;
            setPhoneDisabled(true);
            if (value && value.match(NICK_VALIDATOR.pattern)) {
              canValidateNicknameRef.current = true;
              return Promise.resolve();
            }
            return Promise.reject(NICK_VALIDATOR.message);
          },
        }),
      ]}
    >
      <Input
        placeholder="请输入昵称帐号"
        tabIndex="3"
        onBlur={e => {
          if (canValidateNicknameRef.current) {
            validateAccountRequest.run(e.target.value);
          }
        }}
      />
    </Form.Item>
  );
};
