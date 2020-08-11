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
    name: '通行证管理系统',
    iconColor: "linear-gradient(#EC808D,#D95148)",
    iconUnicode: "&#xe65b;"
  },
  {
    name: '222222222',
    iconColor: "linear-gradient(#EC808D,#D95148)",
    iconUnicode: "&#xe65b;"
  },
];
```
