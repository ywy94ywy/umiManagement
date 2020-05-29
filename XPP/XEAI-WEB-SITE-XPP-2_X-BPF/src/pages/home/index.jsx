/**
 * @module 首页
 */
import { Col, Row } from 'antd';
import { PageHeaderWrapper } from 'lanlinker';
import IntroduceRow from './components/IntroduceRow';
import UserActivity from './components/UserActivity';
import SideProportion from './components/SideProportion';
import Enterprise from './components/Enterprise';

export default () => {
  return (
    <PageHeaderWrapper>
      <Row gutter={[24, 24]}>
        <IntroduceRow visitData={[]} />
        <Col span={12}>
          <UserActivity data={data} />
        </Col>
        <Col span={12}>
          <SideProportion />
        </Col>
      </Row>
      <Enterprise data={data} />
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
