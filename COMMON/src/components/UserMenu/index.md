---
group:
  path: /header
  title: 头部工具栏
title: 用户菜单
---

```tsx
/**
 * title: 用户菜单
 */
import React from 'react';
import { UserMenu } from 'lanlinker';
import { history } from 'umi';

export default () => {
  return (
    <div
      style={{
        background: '#1c1f87',
        height: 64,
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '64px',
      }}
    >
      <UserMenu
        userName="贾亚军"
        profile="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
        logout={() => {
          history.push('/');
        }}
        menu={[
          {
            title: 'XXXXXXXXXX系统',
            url: '/',
          },
        ]}
      />
    </div>
  );
};
```
