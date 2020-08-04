/**
 * @module 扩展信息（个人）
 */
import { useState } from 'react';
import { Form } from 'lanlinker';
import { Input, Select } from 'antd';
import EditForm from '../../components/EditForm';

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
        <Form.Item label="用户性别">
          <Select disabled={disabled} />
        </Form.Item>
        <Form.Item></Form.Item>
        <Form.Item label="工作单位">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="工作邮箱">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="工作手机">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="用户职业">
          <Input disabled={disabled} />
        </Form.Item>
      </Form>
    </EditForm>
  );
};
