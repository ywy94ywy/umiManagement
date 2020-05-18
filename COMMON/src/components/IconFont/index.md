---
group:
  path: /iconfont
  title: 字体图标
title: 字体图标
---

```jsx
/**
 * title: IconFont
 * desc: 使用在线JS地址的自定义图片
 */
import React from 'react';
import { IconFont } from 'lanlinker';

export default () => {
  return (
    <div style={{ fontSize: 20 }}>
      <IconFont type="icon-appstore" />
      <IconFont type="icon-bank" />
      <IconFont type="icon-info-circle" />
    </div>
  );
};
```
