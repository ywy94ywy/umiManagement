import { Form, License } from 'lanlinker';

export default ({ form, info }) => {
  return (
    <>
      <License form={form} />
      <Form columns={2} style={{ width: 580, margin: '24px auto' }}>
        <Form.Item label="负责人姓名">1</Form.Item>
        <Form.Item label="负责人职级">1</Form.Item>
        <Form.Item label="负责人手机">1</Form.Item>
        <Form.Item label="负责人电话">1</Form.Item>
      </Form>
    </>
  );
};
