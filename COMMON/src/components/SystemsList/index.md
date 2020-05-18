---
group:
  path: /header
title: 系统列表
---

```tsx
/**
 * title: 系统列表
 */
import React from 'react';
import { SystemsList } from 'lanlinker';

export default () => {
  return (
    <SystemsList
      list={list}
      height={400}
      onSelect={value => {
        console.log(value);
      }}
    />
  );
};

const list = [
  {
    title: '通行证管理系统',
  },
  {
    title: '项目综合管理系统',
  },
  {
    title: '劳务实名制管理系统',
  },
  {
    title: '视频监控管理系统',
  },
  {
    title: '物料管理系统',
  },
  {
    title: '质量安全监管系统',
  },
  {
    title: '设备管理系统',
  },
  {
    title: '项目进度管理系统',
  },
  {
    title: '环境管理系统',
  },
];
```
