/**
 * @module 合同文件
 */

import { Form, Select, DatePicker, Button, Input, Space, Row, Col } from 'antd';
import Upload from './Upload';

export default ({ editing, setEditing }) => {
  return (
    <>
      <Form labelCol={{ flex: '90px' }} initialValues={{ a: '1', d: '1' }}>
        <Form.Item name="a" label="合同类型" rules={[{ required: true }]}>
          <Select disabled={!editing}>
            <Select.Option value="1">固定期限合同</Select.Option>
            <Select.Option value="2">以完成一定工作量为限的合同</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="b" label="生效日期" rules={[{ required: true }]}>
          <DatePicker disabled={!editing} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="ac" label="失效日期" rules={[{ required: true }]}>
          <DatePicker disabled={!editing} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="d" label="计量单位" rules={[{ required: true }]}>
          <Select disabled={!editing}>
            <Select.Option value="1">小时</Select.Option>
            <Select.Option value="2">天</Select.Option>
            <Select.Option value="3">米</Select.Option>
            <Select.Option value="4">平方米</Select.Option>
            <Select.Option value="5">立方米</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="e" label="计量单价" rules={[{ required: true }]}>
          <Space>
            <Input disabled={!editing}></Input>
            <span>元</span>
          </Space>
        </Form.Item>
        <Form.Item name="f" label="附件上传" rules={[{ required: true }]}>
          <Upload disabled={!editing} />
        </Form.Item>
      </Form>
      {editing && (
        <Row gutter={24} justify="center">
          <Col>
            <Button type="primary">保存</Button>
          </Col>
          <Col>
            <Button onClick={() => setEditing(false)}>取消</Button>
          </Col>
        </Row>
      )}
    </>
  );
};
