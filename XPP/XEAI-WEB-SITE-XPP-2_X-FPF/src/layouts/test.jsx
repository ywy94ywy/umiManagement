import { Space, Input, Form } from 'antd';

const Test = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form}>
      <Form.Item
        label="营业执照注册资本"
        name="registerCapital"
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <FundsInput
        // disabled={disabled}
        />
      </Form.Item>
    </Form>
  );
};

const FundsInput = ({ value, onChange, ...props }) => (
  <Space>
    <span style={{ width: 50, display: 'inline-block' }}>人民币</span>
    <Input value={value} onChange={onChange} {...props} />
    <span style={{ width: 50, display: 'inline-block' }}>万元整</span>
  </Space>
);

export default Test;
