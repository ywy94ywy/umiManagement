/**
 * @module 项目基本信息
 */
import { Form } from 'lanlinker';

export default () => {
  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="项目编码">1</Form.Item>
      <Form.Item label="项目中文全名" required>
        1
      </Form.Item>
      <Form.Item label="项目中文简名">1</Form.Item>
      <Form.Item label="立项文号">1</Form.Item>
      <Form.Item label="立项级别">1</Form.Item>
      <Form.Item label="建设用地规划许可证编号">1</Form.Item>
      <Form.Item label="建设工程规划许可证编号">1</Form.Item>
      <Form.Item label="项目描述">1</Form.Item>
    </Form>
  );
};
