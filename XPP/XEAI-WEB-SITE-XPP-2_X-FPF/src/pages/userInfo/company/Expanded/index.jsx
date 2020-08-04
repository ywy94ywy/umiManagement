/**
 * @module 扩展信息（企业）
 */
import { useState } from 'react';
import { Form } from 'lanlinker';
import { Input, Select, Space, DatePicker } from 'antd';
import EditForm from '../../components/EditForm';

const { RangePicker } = DatePicker;

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
        <Form.Item label="统一社会信用代码">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="营业执照注册号">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="营业执照单位类型">
          <Select disabled={disabled} />
        </Form.Item>
        <Form.Item />
        <Form.Item label="营业执照经营地址" colSpan={2}>
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="营业执照法人代表">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="营业执照注册资本">
          <Space>
            <span style={{ width: 50, display: 'inline-block' }}>人民币</span>
            <Input disabled={disabled} />
            <span style={{ width: 50, display: 'inline-block' }}>万元整</span>
          </Space>
        </Form.Item>
        <Form.Item label="营业执照成立日期">
          <DatePicker disabled={disabled} />
        </Form.Item>
        <Form.Item label="营业执照营业期限">
          <RangePicker disabled={disabled} />
        </Form.Item>
        <Form.Item label="营业执照经营范围" colSpan={2}>
          <Input.TextArea disabled={disabled} />
        </Form.Item>
        <Form.Item label="单位行业">
          <Select disabled={disabled} />
        </Form.Item>
        <Form.Item label="单位规模">
          <Space>
            <Input disabled={disabled} />
            <span style={{ width: 50, display: 'inline-block' }}>人</span>
          </Space>
        </Form.Item>
        <Form.Item label="负责人姓名">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="负责人姓职级">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="负责人手机">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="负责人电话">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="负责人邮箱">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="公司传真">
          <Input disabled={disabled} />
        </Form.Item>
      </Form>
    </EditForm>
  );
};
