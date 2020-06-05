/**
 * @module 工程基本信息
 */
import { Form } from 'lanlinker';

export default () => {
  return (
    <Form
      labelCol={{ flex: '140px' }}
      columns={2}
      style={{ width: 620, margin: '0 auto' }}
    >
      <Form.Item label="工程编码">1</Form.Item>
      <Form.Item label="工程编号">1</Form.Item>
      <Form.Item label="工程中文全名" required>
        1
      </Form.Item>
      <Form.Item label="工程类型" required>
        1
      </Form.Item>
      <Form.Item label="工程状态" required>
        1
      </Form.Item>
      <Form.Item label="建设规模">1</Form.Item>
      <Form.Item label="建设性质">1</Form.Item>
      <Form.Item label="工程用途">1</Form.Item>
      <Form.Item label="工程所在地" colSpan={2} required>
        1
      </Form.Item>
      <Form.Item label="工程地点" colSpan={2}>
        1
      </Form.Item>
      <Form.Item label="WGS84经度">1</Form.Item>
      <Form.Item label="WGS84纬度">1</Form.Item>
      <Form.Item label="工程投资金额">1</Form.Item>
      <Form.Item label="工程建筑面积">1</Form.Item>
      <Form.Item label="工程建筑长度">1</Form.Item>
      <Form.Item label="施工许可证编号">1</Form.Item>
      <Form.Item label="工程开工日期">1</Form.Item>
      <Form.Item label="工程竣工日期">1</Form.Item>
      <Form.Item label="项目经理">1</Form.Item>
      <Form.Item label="联系电话">1</Form.Item>
    </Form>
  );
};
