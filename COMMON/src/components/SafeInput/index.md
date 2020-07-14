---
group:
  path: /safe-input
  title: 表单控件
title: 安全数字输入框
---

```tsx
/**
 * title: 安全数字输入框
 * desc: 暂时依赖于antd-Form
 */
import React from 'react';
import { SafeInput } from 'lanlinker';
import { Form, Button, Input } from 'antd';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} validateTrigger="onBlur">
      <Form.Item name="safe" rules={[{ required: true }]}>
        <SafeInput />
      </Form.Item>
      <Form.Item>
        <Button
          onClick={async () => {
            const res = await form.validateFields();
            console.log(res);
          }}
        >
          获取数据
        </Button>
      </Form.Item>
      <Form.Item>
        <Button
          onClick={() => {
            form.setFieldsValue({
              safe: '123456',
            });
          }}
        >
          设置数据
        </Button>
      </Form.Item>
    </Form>
  );
};
```
