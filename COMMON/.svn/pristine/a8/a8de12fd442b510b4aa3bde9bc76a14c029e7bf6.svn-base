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
import { Form, Button } from 'antd';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.Item name="safe">
        <SafeInput />
      </Form.Item>
      <Form.Item>
        <Button
          onClick={() => {
            console.log(form.getFieldsValue());
          }}
        >
          获取数据
        </Button>
      </Form.Item>
      <Form.Item>
        <Button
          onClick={() => {
            form.setFieldsValue({
              safe: [1, 2, 3, 4, 5, 6],
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
