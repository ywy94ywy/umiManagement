/**
 * @module 首页
 */
import React from 'react';
import { Col, Row } from 'antd';
import { PageHeaderWrapper } from 'lanlinker';
import IntroduceRow from './components/IntroduceRow';
import UserActivity from './components/UserActivity';
import SideProportion from './components/SideProportion';

export default () => {
  return (
    <PageHeaderWrapper>
      <IntroduceRow visitData={[]} />
      <Row gutter={24} type="flex" style={{ marginTop: 24 }}>
        <Col span={12}>
          <UserActivity data={data} />
        </Col>
        <Col span={12}>
          <SideProportion />
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
};

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    a: 1,
    id: i,
  });
}
