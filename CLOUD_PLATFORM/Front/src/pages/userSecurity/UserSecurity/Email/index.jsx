/**
 * @module 用户密保邮箱管理
 */
import { useState } from 'react';
import { Modal } from 'lanlinker';
import { Form, message, Input, Button } from 'antd';
import { useRequest, useModel } from 'umi';
import { EMAIL_VALIDATOR } from '@/config/reg';
import { ACCOUNT_TYPE, VERIFY_CODE } from '@/config/enum';
import CountDownInput from '@/components/CountDownInput';
import { updateEmail } from '@/pages/userSecurity/services';
import { validateAccount, sendEmail } from '@/services';

export default ({ modalStyle, formLayout }) => {
  const [modal, setModal] = useState(false);
  const [sendDisabled, setSendDisabled] = useState(true);
  const { fetchUserRequest } = useModel('userInfo');
  const [formEmail] = Form.useForm();
  const validateAccountRequest = useRequest(validateAccount, {
    manual: true,
    onError(err) {
      message.error(err.message);
    },
  });
  const sendEmailRequest = useRequest(sendEmail, {
    manual: true,
    onSuccess() {
      message.success('邮箱验证码发送成功！');
    },
    onError(err) {
      message.error(err.message);
    },
  });
  const updateEmailRequest = useRequest(updateEmail, {
    manual: true,
    onSuccess() {
      setModal(false);
      message.success('用户密保邮箱修改成功！');
      fetchUserRequest.run();
    },
    onError(err) {
      message.error(err.message);
    },
  });

  return (
    <>
      <Button type="link" onClick={() => setModal(true)}>
        绑定
      </Button>
      <Modal
        title="用户密保邮箱修改"
        {...modalStyle}
        visible={modal}
        destroyOnClose
        onOk={async () => {
          const res = await formEmail.validateFields();
          updateEmailRequest.run({ type: VERIFY_CODE.UPDATE, ...res });
        }}
        afterClose={() => {
          setSendDisabled(true);
        }}
        onCancel={() => setModal(false)}
      >
        <Form
          form={formEmail}
          {...formLayout}
          preserve={false}
          validateTrigger="onBlur"
        >
          <Form.Item
            name="email"
            label="新邮箱账号"
            validateFirst
            rules={[
              { required: true },
              () => ({
                validator: async (_, value) => {
                  if (value && value.match(EMAIL_VALIDATOR.pattern)) {
                    const notExist = await validateAccountRequest.run({
                      type: ACCOUNT_TYPE.EMAIL,
                      userName: value,
                    });

                    if (notExist) {
                      setSendDisabled(false);
                      return Promise.resolve();
                    } else {
                      setSendDisabled(true);
                      return Promise.reject('该邮箱已被使用');
                    }
                  }
                  setSendDisabled(true);
                  return Promise.reject(EMAIL_VALIDATOR.message);
                },
              }),
            ]}
          >
            <Input placeholder="请输入新邮箱账号" />
          </Form.Item>
          <Form.Item
            name="code"
            label="新邮箱验证码"
            rules={[{ required: true }]}
          >
            <CountDownInput
              buttonProps={{
                disabled: sendDisabled,
                onClick: async (e, disabled) => {
                  const email = formEmail.getFieldValue('email');
                  await sendEmailRequest.run({
                    type: VERIFY_CODE.UPDATE,
                    email,
                  });
                  disabled();
                },
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
