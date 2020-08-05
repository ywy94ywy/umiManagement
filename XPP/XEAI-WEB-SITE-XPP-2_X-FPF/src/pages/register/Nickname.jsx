import { useRequest } from 'umi';
import { Form, message, Input } from 'antd';
import { NICK_VALIDATOR } from '@/config/reg';
import { validateAccount } from '@/services';

export default () => {
  const validateAccountRequest = useRequest(validateAccount, {
    manual: true,
    onError(err) {
      message.error(err.message);
    },
  });

  return (
    <Form.Item
      name="nickname"
      label="昵称帐号"
      validateFirst
      rules={[
        {
          required: true,
          message: '请输入昵称帐号',
        },
        () => ({
          validator: async (_, value) => {
            if (value && value.match(NICK_VALIDATOR.pattern)) {
              const notExist = await validateAccountRequest.run({
                type: '2',
                userName: value,
              });

              return notExist
                ? Promise.resolve()
                : Promise.reject('该昵称已存在');
            }
            return Promise.reject(NICK_VALIDATOR.message);
          },
        }),
      ]}
    >
      <Input placeholder="请输入昵称帐号" maxLength={18} />
    </Form.Item>
  );
};
