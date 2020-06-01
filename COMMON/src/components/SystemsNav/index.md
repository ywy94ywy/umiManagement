---
group:
  path: /header
  title: 头部工具栏
title: 菜单栏
---

```tsx
/**
 * title: 菜单栏
 */
import React from 'react';
import { SystemsNav } from 'lanlinker';

export default () => {
  return (
    <div
      style={{
        background: '#1c1f87',
        height: 64,
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '64px',
        color: 'white',
      }}
    >
      <SystemsNav systemsNav={systemsNav} />
    </div>
  );
};

const systemsNav = [
  {
    icon: '&#xe792;',
    title: '物料',
    url: 'https://www.baidu.com',
  },
  {
    icon: '&#xe792;',
    title: '设备',
    url: '/header/switch-theme',
  },
  {
    icon: '&#xe792;',
    title: '质量',
    url: '/',
  },
  {
    icon: '&#xe792;',
    title: '视频',
    url: '/',
  },
  {
    icon: '&#xe792;',
    title: '综合',
    url: '/',
  },
  {
    icon: '&#xe792;',
    title: '环境',
    url: '/',
  },
];
```
