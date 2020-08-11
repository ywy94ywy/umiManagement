---
group:
  path: /header
  title: 头部工具栏
title: 切换系统
---

```tsx
/**
 * title: 切换主题
 */
import React from 'react';
import { SwitchSystems } from 'lanlinker';

export default () => {
  return (
    <div
      style={{
        background: '#1c1f87',
        height: 64,
        lineHeight: '64px',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <SwitchSystems
        list={list}
        height={400}
        onSelect={value => {
          console.log(value);
        }}
        extra={<a>申请新执照</a>}
      />
    </div>
  );
};
const list = [
  {
    name: '通行证管理系统',
    iconColor: 'linear-gradient(#EC808D,#D95148)',
    iconUnicode: '&#xe65b;',
  },
  {
    name: '222222222',
    iconColor: 'linear-gradient(#EC808D,#D95148)',
    iconUnicode: '&#xe65b;',
  },
];
```
