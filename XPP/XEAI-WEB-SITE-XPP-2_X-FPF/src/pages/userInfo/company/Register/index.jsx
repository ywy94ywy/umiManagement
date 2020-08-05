/**
 * @module 注册信息（企业）
 */
import { useState } from 'react';
import { Form, BindInput } from 'lanlinker';
import { Input } from 'antd';
import EditForm from '../../components/EditForm';
import User from '../../components/User';

export default ({ layout }) => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);

  return (
    <EditForm
      disabled={disabled}
      setDisabled={setDisabled}
      onSave={() => {
        console.log(form.getFieldsValue());
        setDisabled(true);
      }}
      onCancel={() => {
        form.resetFields();
        setDisabled(true);
      }}
    >
      <Form
        form={form}
        {...layout}
        columns={2}
        style={{ width: 800, margin: '0 auto' }}
      >
        <Form.Item label="用户类型">
          <span>企业</span>
        </Form.Item>
        <Form.Item name="1">
          <User
            disabled={disabled}
            onOk={cb => {
              console.log(123);
              setTimeout(() => {
                cb();
              }, 1000);
            }}
          />
        </Form.Item>
        <Form.Item label="用户全名">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="用户简名">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="昵称帐号">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="手机帐号">
          <BindInput disabled active={false} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="邮箱帐号">
          <BindInput disabled active={true} />
        </Form.Item>
        <Form.Item />
      </Form>
    </EditForm>
  );
};
