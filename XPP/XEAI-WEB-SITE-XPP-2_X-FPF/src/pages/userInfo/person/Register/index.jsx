/**
 * @module 注册信息（个人）
 */
import { useState } from 'react';
import { Form, BindInput } from 'lanlinker';
import { Input } from 'antd';
import EditForm from '../../components/EditForm';
import User from '../../components/User';

export default ({ layout }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <EditForm
      disabled={disabled}
      setDisabled={setDisabled}
      onSave={() => {
        setDisabled(true);
      }}
      onCancel={() => {
        setDisabled(true);
      }}
    >
      <Form {...layout} columns={2} style={{ width: 800, margin: '0 auto' }}>
        <Form.Item label="用户类型">
          <span>个人</span>
        </Form.Item>
        <Form.Item>
          <User />
        </Form.Item>
        <Form.Item label="用户全名">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="昵称账号">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="手机账号">
          <BindInput disabled active={false} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="邮箱账号">
          <BindInput disabled active={true} />
        </Form.Item>
        <Form.Item />
      </Form>
    </EditForm>
  );
};
