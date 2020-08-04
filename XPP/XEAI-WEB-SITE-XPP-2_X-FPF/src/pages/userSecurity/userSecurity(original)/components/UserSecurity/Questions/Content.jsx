import { Form, Result } from 'antd';
import { SafeInput } from 'lanlinker';
import Questions from './Questions';
import QuestionsConfirm from './QuestionsConfirm';

export default ({ current, form1, form2, form3, sercurityDate, layout }) => {
  switch (current) {
    case 0:
      return (
        <Form
          form={form1}
          {...layout}
          style={{ marginTop: 90 }}
          preserve={false}
        >
          <Form.Item
            label="安全密码"
            name="userSafePassword"
            rules={[{ required: true }]}
          >
            <SafeInput />
          </Form.Item>
        </Form>
      );
    case 1:
      return <Questions layout={layout} form={form2} />;
    case 2:
      return (
        <QuestionsConfirm
          layout={layout}
          form={form3}
          sercurityDate={sercurityDate}
        />
      );
    case 3:
      return <Result status="success" title="操作成功" />;
    default:
      return null;
  }
};
