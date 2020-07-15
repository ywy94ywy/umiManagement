import { forwardRef, useEffect } from 'react';
import { Input, Form } from 'antd';
import { QuestionsMap } from './question';

export default ({ form, layout, sercurityDate }) => {
  useEffect(() => {
    form.setFieldsValue({
      ...sercurityDate,
      2: '',
      4: '',
      6: '',
    });
  }, []);

  return (
    <Form form={form} {...layout} validateTrigger="onBlur">
      <Form.Item label="密保问题01" name="1" rules={[{ required: true }]}>
        <InputWrapper />
      </Form.Item>
      <Form.Item
        label="密保答案01"
        name="2"
        rules={[
          { required: true },
          () => ({
            validator(_, value) {
              if (!value || value === sercurityDate['2']) {
                return Promise.resolve();
              }
              return Promise.reject('两次密保答案不一致!');
            },
          }),
        ]}
      >
        <Input placeholder="请输入密保答案" />
      </Form.Item>
      <Form.Item label="密保问题02" name="3" rules={[{ required: true }]}>
        <InputWrapper />
      </Form.Item>
      <Form.Item
        label="密保答案02"
        name="4"
        rules={[
          { required: true },
          () => ({
            validator(_, value) {
              if (!value || value === sercurityDate['4']) {
                return Promise.resolve();
              }
              return Promise.reject('两次密保答案不一致!');
            },
          }),
        ]}
      >
        <Input placeholder="请输入密保答案" />
      </Form.Item>
      <Form.Item label="密保问题03" name="5" rules={[{ required: true }]}>
        <InputWrapper />
      </Form.Item>
      <Form.Item
        label="密保答案03"
        name="6"
        rules={[
          { required: true },
          () => ({
            validator(_, value) {
              if (!value || value === sercurityDate['6']) {
                return Promise.resolve();
              }
              return Promise.reject('两次密保答案不一致!');
            },
          }),
        ]}
      >
        <Input placeholder="请输入密保答案" />
      </Form.Item>
    </Form>
  );
};

const InputWrapper = forwardRef(({ value }, ref) => {
  return <Input disabled value={QuestionsMap[value]} ref={ref} />;
});
