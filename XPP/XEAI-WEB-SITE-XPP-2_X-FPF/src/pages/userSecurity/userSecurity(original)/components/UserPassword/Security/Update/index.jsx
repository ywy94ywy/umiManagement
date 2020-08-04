/**
 * @module 用户安全密码管理-修改
 */
import { useState } from 'react';
import { Modal, SafeInput } from 'lanlinker';
import { Button, Form, message } from 'antd';
import { useRequest } from 'umi';
import { getUserId } from '@/utils';
import { updateSafePassword } from '@/pages/userSecurity/services';

export default ({ modalStyle, layout }) => {
  const userId = getUserId();
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();
  const updateSafePasswordRequest = useRequest(updateSafePassword, {
    manual: true,
    onSuccess() {
      message.success('用户安全密码修改成功！');
      setModal(false);
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
        title="用户安全密码修改"
        visible={modal}
        onOk={async () => {
          const res = await form.validateFields();
          const params = {
            userId,
            userSafePasswordSource: res.userSafePasswordSource,
            userSafePasswordTarget: res.userSafePasswordTarget,
          };
          updateSafePasswordRequest.run(params);
        }}
        destroyOnClose
        onCancel={() => setModal(false)}
        {...modalStyle}
      >
        <Form form={form} {...layout} validateTrigger="onBlur" preserve={false}>
          <Form.Item
            label="原安全密码"
            name="userSafePasswordSource"
            rules={[{ required: true }]}
          >
            <SafeInput />
          </Form.Item>
          <Form.Item
            label="新安全密码"
            name="userSafePasswordTarget"
            rules={[{ required: true }]}
          >
            <SafeInput />
          </Form.Item>
          <Form.Item
            label="新安全密码确认"
            dependencies={['userSafePasswordTarget']}
            name="userSafePasswordTargetConfirm"
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    !value ||
                    getFieldValue('userSafePasswordTarget') === value
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject('两次输入的密码不一致！');
                },
              }),
            ]}
          >
            <SafeInput />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
