---
group:
  path: /Province
  title: 省市区
title: 省市区
---

### 省市区

```tsx
/**
 * title: 省市区级联选择
 */
import React from 'react';
import { Province } from 'lanlinker';
import { Form, Button } from 'antd';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} onFinish={v => console.log(v)}>
      <Form.Item name="province" label="省市区">
        <Province></Province>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          获取
        </Button>
      </Form.Item>
    </Form>
  );
};
```
