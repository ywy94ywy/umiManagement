---
group:
  path: /tabs
  title: 标签页（废弃）
title: 标签页
---

### Tabs

```tsx
/**
 * title: 标题居中
 * desc: TabPane添加padding
 */
import React from 'react';
import { Tabs } from 'lanlinker';

export default () => {
  return (
    <div style={{ width: 150 }}>
      <Tabs>
        <Tabs.TabPane key="first" tab="first">
          111111
        </Tabs.TabPane>
        <Tabs.TabPane key="second" tab="second">
          222222
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
```
