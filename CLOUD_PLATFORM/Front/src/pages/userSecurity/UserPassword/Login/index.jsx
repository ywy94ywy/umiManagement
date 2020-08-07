/**
 * @module 用户登录密码管理-修改
 */
import { useState } from 'react';
import { Modal } from 'lanlinker';
import { Button, Form, Input, message } from 'antd';
import { useRequest } from 'umi';
import { PASSWORD_VALIDATOR } from '@/config/reg';
import { confirmField } from '@/utils';
import { updateLoginPassword } from '@/pages/userSecurity/services';

export default ({ modalStyle, formLayout }) => {
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

          const data = {
            oldPassword: res.oldPassword,
            newPassword: res.newPassword,
          };
          updateLoginPasswordRequest.run(data);
        }}
        destroyOnClose
        onCancel={() => setModal(false)}
        {...modalStyle}
      >
        <Form
          form={form}
          {...formLayout}
          validateTrigger="onBlur"
          preserve={false}
        >
          <Form.Item
            label="原登录密码"
            name="oldPassword"
            rules={[{ required: true }, PASSWORD_VALIDATOR]}
          >
            <Input.Password placeholder="请输入原登录密码" />
          </Form.Item>
          <Form.Item
            label="新登录密码"
            name="newPassword"
            rules={[{ required: true }, PASSWORD_VALIDATOR]}
          >
            <Input.Password placeholder="请输入新登录密码" />
          </Form.Item>
          <Form.Item
            label="新登录密码确认"
            dependencies={['newPassword']}
            name="newPasswordConfirm"
            rules={[
              { required: true, message: '请重新输入新登录密码' },
              confirmField('newPassword'),
            ]}
          >
            <Input.Password placeholder="请重新输入新登录密码" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
