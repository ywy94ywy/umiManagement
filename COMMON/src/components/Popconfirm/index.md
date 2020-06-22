---
group:
  path: /popconfirm
  title: 气泡确认框
title: 气泡确认框
---

```tsx
/**
 * title: 气泡确认框
 * desc: 非要把确定放左边！
 */
import React, { useState } from 'react';
import { Popconfirm } from 'lanlinker';

export default () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <Popconfirm
        title="测试测试测试测试测试测试测试测试测试"
        onConfirm={e => {
          console.log('确定', e);
        }}
        onCancel={e => {
          console.log('取消', e);
        }}
      >
        <a href="#">删除</a>
      </Popconfirm>
    </>
  );
};
```

<!--
```tsx
/**
 * title: 删除气泡确认框
 */
import React, { useState } from 'react';
import { DeleteConfirm } from 'lanlinker';

export default () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <DeleteConfirm
        title="测试测试测试测试测试测试测试测试测试"
        onConfirm={e => {
          console.log('确定', e);
        }}
        onCancel={e => {
          console.log('取消', e);
        }}
      >
        <a href="#">删除</a>
      </DeleteConfirm>
    </>
  );
};
``` -->
