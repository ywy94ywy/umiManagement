---
group:
  path: /TreeContextMenu
  title: 右键菜单
title: 右键菜单
---


```tsx
/**
 * title: 右键菜单
 */
import React from 'react';
import { TreeContextMenu } from 'lanlinker';

export default () => {
  return (
    <div style={{ height: 200 }}>
      <div style={{ position: 'absolute' }}>
        <TreeContextMenu
          createClick={e => {
            console.log(e);
          }}
          reNameClick={e => {
            console.log(e);
          }}
          moveClick={e => {
            console.log(e);
          }}
          removeClick={e => {
            console.log(e);
          }}
          moveUpClick={(e, step) => {
            console.log(e, step);
          }}
          moveDownClick={(e, step) => {
            console.log(e, step);
          }}
        ></TreeContextMenu>
      </div>
    </div>
  );
};
```
