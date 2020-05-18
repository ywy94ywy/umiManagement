---
group:
  path: /header
  title: 头部工具栏
title: 心知天气
---

```tsx
/**
 * title: 天气工具栏
 */
import React from 'react';
import { TimeWeather } from 'lanlinker';

export default () => {
  return (
    <div
      style={{
        background: '#1c1f87',
        height: 64,
      }}
    >
      <TimeWeather></TimeWeather>
    </div>
  );
};
```
