import React from 'react';
import { Col, Row, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import ChartCard from './ChartCard';
import Field from './Field';

const IntroduceRow = () => {
  return (
    <Row gutter={24}>
      <Col span={6}>
        <ChartCard
          title="注册用户数据量"
          total="126,560"
          action={
            <Tooltip title="介绍">
              <InfoCircleOutlined />
            </Tooltip>
          }
          footer={<Field label="当日注册用户量" value="1,233"></Field>}
        ></ChartCard>
      </Col>
      <Col span={6}>
        <ChartCard
          title="访问量"
          total="6,560"
          action={
            <Tooltip title="介绍">
              <InfoCircleOutlined />
            </Tooltip>
          }
          footer={<Field label="当日访问量" value="6,560"></Field>}
        ></ChartCard>
      </Col>
      <Col span={6}>
        <ChartCard
          title="日点击量"
          total="6,560"
          action={
            <Tooltip title="介绍">
              <InfoCircleOutlined />
            </Tooltip>
          }
          footer={<Field label="昨日浏览量" value="6,560"></Field>}
        />
      </Col>
      <Col span={6}>
        <ChartCard
          title="各系统购买率"
          total="78%"
          action={
            <Tooltip title="介绍">
              <InfoCircleOutlined />
            </Tooltip>
          }
          footer={<Field label="当日IP访问数" value="6,560"></Field>}
        />
      </Col>
    </Row>
  );
};

export default IntroduceRow;
