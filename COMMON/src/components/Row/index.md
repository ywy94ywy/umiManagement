---
group:
  path: /Row
  title: 行
title: 行
---

### 定间距为 24

```tsx
/**
 * title: gutter=[24,24]
 */
import React from 'react';
import { Row } from 'lanlinker';
import { Card, Col } from 'antd';

export default () => {
  return (
    <Row>
      <Col span={12}>
        <Card>1</Card>
      </Col>
      <Col span={12}>
        <Card>2</Card>
      </Col>
      <Col span={12}>
        <Card>3</Card>
      </Col>
    </Row>
  );
};
```
