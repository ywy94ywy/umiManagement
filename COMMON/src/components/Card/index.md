---
group:
  path: /card
  title: 卡片(废弃)
title: 卡片
---

### 添加了便捷的 margin

```tsx
/**
 * title: margin-top
 * desc: 为antd的卡片增加了margin
 */
import React from 'react';
import { Card } from 'lanlinker';

export default () => {
  return (
    <>
      <Card>上方</Card>
      <Card marginTop>下方</Card>
    </>
  );
};
```

```tsx
/**
 * title: margin-left
 * desc: 为antd的卡片增加了margin
 */
import React from 'react';
import { Card } from 'lanlinker';
import { Row, Col } from 'antd';

export default () => {
  return (
    <Row gutter={[24,24]}>
      <Col span={12}>
        <Card>左侧</Card>
      </Col>
      <Col span={12}>
        <Card >右侧</Card>
      </Col>
      <Col span={12}>
        <Card >右侧</Card>
      </Col>
    </Row>
  );
};
```
