/**
 * @module 工程信息
 * @todo 图片加载优化
 * @todo 地图地点
 */
import { Row, Col, Card } from 'antd';
import ImgList from './components/ImgList';
import ProjectDetails from './components/ProjectDetails';

export default () => {
  return (
    <Row style={{ padding: 24 }} gutter={24}>
      <Col flex="385px">
        <Card title="XXX工程名称" bodyStyle={{ height: 750 }}>
          <ImgList />
        </Card>
      </Col>
      <Col flex="1" style={{ overflow: 'hidden' }}>
        <Card
          title="工程信息详情"
          bodyStyle={{ padding: '0 24px', minHeight: 750 }}
        >
          <ProjectDetails />
        </Card>
      </Col>
    </Row>
  );
};
