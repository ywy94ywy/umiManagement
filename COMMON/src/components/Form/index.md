---
group:
  path: /form
  title: 表单
title: 表单
---

# antd 表单的封装

### 基础表单

```tsx
/**
 * title: 水平多列
 */
import React from 'react';
import { Form } from 'lanlinker';
import { Input } from 'antd';

export default () => {
  return (
    <Form layout="horizontal" columns={3}>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
    </Form>
  );
};
```

```tsx
/**
 * title: 垂直多列
 */
import React from 'react';
import { Form } from 'lanlinker';
import { Input } from 'antd';

export default () => {
  return (
    <Form layout="vertical" columns={3}>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
    </Form>
  );
};
```

```tsx
/**
 * title: 多功能
 * desc: 跨列、占位、定宽（自带）
 */
import React from 'react';
import { Form } from 'lanlinker';
import { Input } from 'antd';

export default () => {
  return (
    <Form
      layout="horizontal"
      columns={3}
      labelCol={{
        flex: '0 0 100px',
      }}
    >
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item></Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称" colSpan={2}>
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称">
        <Input></Input>
      </Form.Item>
      <Form.Item label="名称" colSpan={3}>
        <Input></Input>
      </Form.Item>
    </Form>
  );
};
```

### 配置型表单

```tsx
/**
 * title: 配置型表单
 */
import React from 'react';
import { Form } from 'lanlinker';
import { Input, Button } from 'antd';

export default () => {
  const [form] = Form.useForm();
  const data = [];

  for (let i = 1; i < 5; i++) {
    data.push({
      label: '名称' + i,
      name: 'filed' + i,
      component: <Input />,
      rules: [{ required: true }],
    });
  }
  data.push({
    label: 'test',
    component: <Input />,
    colSpan: 2,
  });
  for (let i = 10; i < 16; i++) {
    data.push({
      label: '名称' + i,
      name: 'filed' + i,
      component: <Input />,
      rules: [{ required: true }],
    });
  }

  return (
    <>
      <Form form={form} configForm={data} layout="horizontal" columns={3} />
      <Button
        onClick={async () => {
          const data = await form.validateFields();
          console.log(data);
        }}
      >
        验证表单
      </Button>
    </>
  );
};
```
