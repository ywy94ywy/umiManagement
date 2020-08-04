/**
 * @module 用户密保邮箱管理
 */
import { useState } from 'react';
import { Modal, SafeInput } from 'lanlinker';
import { Form, message, Input, Button } from 'antd';
import { useRequest } from 'umi';
import { EMAIL_VALIDATOR } from '@/config/reg';
import { getUserId } from '@/utils';
import CountDownInput from '@/components/CountDownInput';
import { updateEmail, sendEmailMessage } from '../../../services';
import styles from '../../style.less';

export default ({ modalStyle, layout }) => {
  const userId = getUserId();
  const [modal, setModal] = useState(false);
  const [sendDisabled, setSendDisabled] = useState(true);
  const [formEmail] = Form.useForm();
  const updateEmailRequest = useRequest(updateEmail, {
    onSuccess() {
      setModal(false);
      message.success('用户密保邮箱修改成功！');
    },
    onError(err) {
      message.error(err.message);
    },
    manual: true,
  });
  const sendEmailMessageRequest = useRequest(sendEmailMessage, {
    manual: true,
    onSuccess() {
      message.success('邮箱验证码发送成功！');
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
          updateEmailRequest.run({ userId, ...res });
        }}
        afterClose={() => {
          setSendDisabled(true);
        }}
        onCancel={() => setModal(false)}
      >
        <Form
          form={formEmail}
          className={styles.form}
          {...layout}
          preserve={false}
        >
          <Form.Item
            name="userSafePassword"
            label="安全密码"
            rules={[{ required: true }]}
          >
            <SafeInput />
          </Form.Item>
          <Form.Item
            name="userEmail"
            label="新邮箱账号"
            validateFirst
            rules={[
              { required: true },
              () => ({
                validator(_, value) {
                  if (value && value.match(EMAIL_VALIDATOR.pattern)) {
                    setSendDisabled(false);
                    return Promise.resolve();
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
            name="userEmailCaptcha"
            label="新邮箱验证码"
            rules={[{ required: true }]}
          >
            <CountDownInput
              buttonProps={{
                disabled: sendDisabled,
                onClick: async (e, disabled) => {
                  const mobile = formEmail.getFieldValue('userEmail');
                  sendEmailMessageRequest.run(mobile);
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
