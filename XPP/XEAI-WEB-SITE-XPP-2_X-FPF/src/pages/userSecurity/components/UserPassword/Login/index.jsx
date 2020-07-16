/**
 * @module 用户登录密码管理-修改
 */
import { useState } from 'react';
import { Modal } from 'lanlinker';
import { Button, Form, Input, message } from 'antd';
import { useRequest } from 'umi';
import { getUserId } from '@/utils';
import { updateLoginPassword } from '@/pages/userSecurity/services';

export default ({ modalStyle, layout }) => {
  const userId = getUserId();
  const [modal, setModal] = useState(false);
  const [form] = Form.useForm();
  const updateLoginPasswordRequest = useRequest(updateLoginPassword, {
    manual: true,
    onSuccess() {
      message.success('用户登录密码修改成功！');
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
        title="用户登录密码修改"
        visible={modal}
        onOk={async () => {
          const res = await form.validateFields();
          const params = {
            userId,
            sourceUserLoginPassword: res.sourceUserLoginPassword,
            targetUserLoginPassword: res.targetUserLoginPassword,
          };
          updateLoginPasswordRequest.run(params);
        }}
        destroyOnClose
        onCancel={() => setModal(false)}
        {...modalStyle}
      >
        <Form form={form} {...layout} validateTrigger="onBlur" preserve={false}>
          <Form.Item
            label="原登录密码"
            name="sourceUserLoginPassword"
            rules={[{ required: true }]}
          >
            <Input placeholder="请输入原登录密码" />
          </Form.Item>
          <Form.Item
            label="新登录密码"
            name="targetUserLoginPassword"
            rules={[{ required: true }]}
          >
            <Input placeholder="请输入新登录密码" />
          </Form.Item>
          <Form.Item
            label="新登录密码确认"
            dependencies={['targetUserLoginPassword']}
            name="targetUserLoginPasswordConfirm"
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    !value ||
                    getFieldValue('targetUserLoginPassword') === value
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject('两次输入的密码不一致！');
                },
              }),
            ]}
          >
            <Input placeholder="请重新输入新登录密码" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
