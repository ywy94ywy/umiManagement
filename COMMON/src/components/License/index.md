---
group:
  path: /license
  title: 营业执照
title: 营业执照
---

```tsx
import React, { useState } from 'react';
import { License } from 'lanlinker';
import { Form, Button, Space } from 'antd';

export default () => {
  const [form] = Form.useForm();
  const [editable, setEditable] = useState(false);
  const [disabled, setDisabled] = useState(false);
  form.setFieldsValue(license);

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setEditable(c => !c);
          }}
        >
          Edit切换
        </Button>
        <Button
          disabled={!editable}
          type="primary"
          onClick={() => {
            setDisabled(c => !c);
          }}
        >
          Disable切换
        </Button>
        <Button
          disabled={!(editable && !disabled)}
          type="primary"
          onClick={async () => {
            const res = await form.validateFields();
            console.log(res)
          }}
        >
          提交
        </Button>
      </Space>
      <License editable={editable} disabled={disabled} form={form} />
    </>
  );
};
const license = {
  a: '913206811388888888',
  b: '320681000000000',
  c: '江苏南通二建集团有限公司',
  d: '有限责任公司',
  e: '上海市人民中路888号',
  f: '杨晓东',
  g: '18500',
  h: '2001-11-12',
  i: '2001-06-18 ~ 2033-12-02',
  j:
    '房屋建筑工程总承包（特级）；市政公用工程施工总承包（壹级）；建筑装修装饰工程专业承包（壹级）；机电设备安装工程专业承包（壹级）；钢结构工程专业承包（壹级）；机电安装工程施工总承包（贰级）；消防设施工程专业承包（贰级）；地基基础工程专业承包（贰级）；起重设备安装工程专业承包（贰级）（涉及专项审批的，在审批机关批准的经营期限内从事经营）；承包与其实力、规模、业绩相适应的国外工程项目；五金、建筑材料销售；建筑施工机械设备租赁，园林绿化工程施工，模块化建筑技术研发、组装。（依法须经批准的项目，经相关部门批准后方可开展经营活动）',
  k: '上海市市场监督管理局',
  l: '2001-06-18',
};
```
