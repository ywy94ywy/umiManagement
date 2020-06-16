---
group:
  title: 银行卡列表
title: 银行卡列表
---

## 银行卡列表

```tsx
/**
 * title: 银行卡列表（自定义表单组件）
 */
import React from 'react';
import { Form, Button } from 'antd';
import { BankCardList } from 'lanlinker';

export default () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      initialValues={{
        card: [
          {
            userBankName: 'a银行',
            code: 'a',
            userBankAccountNumber: '123214215423523',
            userBankAccountNumberIsDefault: false,
          },
        ],
      }}
    >
      <Form.Item name="card" label="银行卡">
        <BankCardList
          // disabled={true}
          onDelete={() => {
            console.log('onDelete');
          }}
          onCreate={() => {
            console.log('onCreate');
          }}
          onUpdate={() => {
            console.log('onUpdate');
          }}
          maxLength={1}
        />
      </Form.Item>
      <Form.Item name="card" label="银行卡">
        <Button
          onClick={() => {
            console.log(form.getFieldsValue());
          }}
        >
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
```

```tsx
/**
 * title: 银行卡列表
 */
import React from 'react';
import { BankCardList } from 'lanlinker';

export default () => {
  return (
    <BankCardList
      data={[
        {
          userBankName: 'a银行',
          code: 'a',
          userBankAccountNumber: '123214215423523',
          userBankAccountNumberIsDefault: false,
        },
        {
          userBankName: 'b银行',
          code: 'b',
          userBankAccountNumber: '12321421542352123',
          userBankAccountNumberIsDefault: false,
        },
        {
          userBankName: 'c银行',
          code: 'c',
          userBankAccountNumber: '123214215423523',
          userBankAccountNumberIsDefault: true,
        },
      ]}
      // disabled={true}
      onDelete={() => {
        console.log('onDelete');
      }}
      onCreate={() => {
        console.log('onCreate');
      }}
      onUpdate={() => {
        console.log('onUpdate');
      }}
      maxLength={4}
    />
  );
};
```
