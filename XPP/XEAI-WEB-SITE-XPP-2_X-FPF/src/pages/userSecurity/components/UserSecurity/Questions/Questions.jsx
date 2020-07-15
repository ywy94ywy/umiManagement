import { useState } from 'react';
import { Form, Select, Input } from 'antd';
import { questions } from './question';

export default ({ form, layout }) => {
  const [fields, setFields] = useState([1, 2, 3]);
  const isDisabled = key => fields.includes(key);

  const changeFileds = (n, value) => {
    const newFileds = [...fields];
    newFileds[n] = value;
    setFields(newFileds);
  };

  return (
    <Form
      form={form}
      {...layout}
      initialValues={{
        1: 1,
        3: 2,
        5: 3,
      }}
    >
      <Form.Item label="密保问题01" name="1" rules={[{ required: true }]}>
        <Select onChange={e => changeFileds(0, e)}>
          {questions.map(v => (
            <Select.Option
              value={v.key}
              key={v.key}
              disabled={isDisabled(v.key)}
            >
              {v.value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="密保答案01" name="2" rules={[{ required: true }]}>
        <Input placeholder="请输入密保答案" />
      </Form.Item>
      <Form.Item label="密保问题02" name="3" rules={[{ required: true }]}>
        <Select onChange={e => changeFileds(1, e)}>
          {questions.map(v => (
            <Select.Option
              value={v.key}
              key={v.key}
              disabled={isDisabled(v.key)}
            >
              {v.value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="密保答案02" name="4" rules={[{ required: true }]}>
        <Input placeholder="请输入密保答案" />
      </Form.Item>
      <Form.Item label="密保问题03" name="5" rules={[{ required: true }]}>
        <Select onChange={e => changeFileds(2, e)}>
          {questions.map(v => (
            <Select.Option
              value={v.key}
              key={v.key}
              disabled={isDisabled(v.key)}
            >
              {v.value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="密保答案03" name="6" rules={[{ required: true }]}>
        <Input placeholder="请输入密保答案" />
      </Form.Item>
    </Form>
  );
};
