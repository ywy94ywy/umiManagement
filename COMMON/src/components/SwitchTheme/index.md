---
group:
  path: /header
title: 切换主题
---

```tsx
/**
 * title: 切换主题
 */
import React, { useState } from 'react';
import { SwitchTheme } from 'lanlinker';
import { ThemeContext } from '../Context/theme';

export default () => {
  const [fs, setFs] = useState('14px');
  const [bg, setBg] = useState('#1C1F87');
  const icFs = parseInt(fs) + 2 + 'px';

  return (
    <ThemeContext.Provider value={{ fs, icFs, bg, setFs, setBg }}>
      <div
        style={{
          background: bg + ' center/cover',
          height: 64,
          lineHeight: '64px',
          display: 'flex',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <SwitchTheme />
      </div>
    </ThemeContext.Provider>
  );
};
```
