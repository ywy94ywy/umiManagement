/**
 * @module 用户密保手机管理
 */
import { useState } from 'react';
import { SafeInput, Modal } from 'lanlinker';
import { Form, message, Input, Button } from 'antd';
import { useRequest } from 'umi';
import { MOBILE_VALIDATOR } from '@/config/reg';
import { getUserId } from '@/utils';
import CountDownInput from '@/components/CountDownInput';
import { updateMobile, sendMobileMessage } from '../../../services';
import styles from '../../style.less';

export default ({ modalStyle, layout }) => {
  const userId = getUserId();
  const [modal, setModal] = useState(false);
  const [sendDisabled, setSendDisabled] = useState(true);
  const [formPhone] = Form.useForm();
  const updateMobileRequest = useRequest(updateMobile, {
    onSuccess() {
      setModal(false);
      message.success('用户密保手机修改成功！');
    },
    onError(err) {
      message.error(err.message);
    },
    manual: true,
  });
  const sendMobileMessageRequest = useRequest(sendMobileMessage, {
    manual: true,
    onSuccess() {
      message.success('手机验证码发送成功！');
    },
    onError(err) {
      message.error(err.message);
    },
  });

  return (
    <>
      <Button type="link" onClick={() => setModal(true)}>
        修改
      </Button>
      <Modal
        title="用户密保手机修改"
        {...modalStyle}
        visible={modal}
        destroyOnClose
        onOk={async () => {
          const res = await formPhone.validateFields();
          updateMobileRequest.run({ userId, ...res });
        }}
        afterClose={() => {
          setSendDisabled(true);
        }}
        onCancel={() => setModal(false)}
      >
        <Form
          form={formPhone}
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
            name="userMobile"
            label="新手机账号"
            validateFirst
            rules={[
              { required: true },
              () => ({
                validator(_, value) {
                  if (value && value.match(MOBILE_VALIDATOR.pattern)) {
                    setSendDisabled(false);
                    return Promise.resolve();
                  }
                  setSendDisabled(true);
                  return Promise.reject(MOBILE_VALIDATOR.message);
                },
              }),
            ]}
          >
            <Input placeholder="请输入新手机账号" />
          </Form.Item>
          <Form.Item
            name="userMobileCaptcha"
            label="新手机验证码"
            rules={[{ required: true }]}
          >
            <CountDownInput
              buttonProps={{
                disabled: sendDisabled,
                onClick: async (e, disabled) => {
                  const mobile = formPhone.getFieldValue('userMobile');
                  sendMobileMessageRequest.run(mobile);
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
