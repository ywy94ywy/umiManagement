---
group:
  path: /safe-input
  title: 表单控件
title: 绑定输入框
---

```tsx
/**
 * title: 绑定输入框
 * desc: 暂时依赖于antd-Form
 */
import React from 'react';
import { BindInput } from 'lanlinker';
import { Form, Button } from 'antd';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form layout="vertical" form={form} style={{ width: 300 }}>
      <Form.Item  name="bind1" rules={[{ required: true }]}>
        <BindInput disabled/>
      </Form.Item>
      <Form.Item name="bind2" rules={[{ required: true }]}>
        <BindInput active />
      </Form.Item>
      <Form.Item name="bind3" rules={[{ required: true }]}>
        <BindInput
          showModal
          inactiveModal={<div>inactive</div>}
          inactiveModalProps={{
            title: 'inactive',
          }}
          inactiveTitle="解绑（可点击）"
        />
      </Form.Item>
      <Form.Item name="bind4" rules={[{ required: true }]}>
        <BindInput
          showModal
          active
          activeModal={<div>active</div>}
          activeModalProps={{
            title: 'active',
          }}
          activeTitle="绑定（可点击）"
        />
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
              bind1: '1',
              bind2: '2',
              bind3: '3',
              bind4: '4',
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
