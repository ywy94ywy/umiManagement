/**
 * @module 用户密保手机管理
 */
import { useState } from 'react';
import { Modal } from 'lanlinker';
import { Form, message, Input, Button } from 'antd';
import { useRequest } from 'umi';
import { MOBILE_VALIDATOR } from '@/config/reg';
import CountDownInput from '@/components/CountDownInput';
import { updateMobile } from '@/pages/userSecurity/services';
import { validateAccount, sendMobile } from '@/services';
import styles from '../../style.less';

export default ({ modalStyle, layout }) => {
  const [modal, setModal] = useState(false);
  const [sendDisabled, setSendDisabled] = useState(true);
  const [formPhone] = Form.useForm();
  const validateAccountRequest = useRequest(validateAccount, {
    manual: true,
    onError(err) {
      message.error(err.message);
    },
  });
  const sendMobileRequest = useRequest(sendMobile, {
    manual: true,
    onSuccess() {
      message.success('手机验证码发送成功！');
    },
    onError(err) {
      message.error(err.message);
    },
  });
  const updateMobileRequest = useRequest(updateMobile, {
    manual: true,
    onSuccess() {
      setModal(false);
      message.success('用户密保手机修改成功！');
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
          updateMobileRequest.run({ type: '2', ...res });
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
          validateTrigger="onBlur"
        >
          <Form.Item
            name="mobile"
            label="新手机账号"
            validateFirst
            rules={[
              { required: true },
              () => ({
                validator: async (_, value) => {
                  if (value && value.match(MOBILE_VALIDATOR.pattern)) {
                    const notExist = await validateAccountRequest.run({
                      type: '0',
                      userName: value,
                    });
                    if (notExist) {
                      setSendDisabled(false);
                      return Promise.resolve();
                    } else {
                      setSendDisabled(true);
                      return Promise.reject('该手机号码已存在');
                    }
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
            name="code"
            label="新手机验证码"
            rules={[{ required: true }]}
          >
            <CountDownInput
              buttonProps={{
                disabled: sendDisabled,
                onClick: async (e, disabled) => {
                  const mobile = formPhone.getFieldValue('mobile');

                  await sendMobileRequest.run({
                    type: '2',
                    mobile,
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
