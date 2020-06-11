/**
 * @module 临时卡片授权
 */
import { useState } from 'react';
import { Form } from 'lanlinker';
import { Card, Row, Col } from 'antd';
import Header from './Header';
import TempTable from './TempTable';
import TempCard from './TempCard';

export default () => {
  const [form] = Form.useForm();

  return (
    <Row gutter={[12, 12]}>
      <Col span={24}>
        <Header />
      </Col>
      <Col flex="1" style={{ overflow: 'hidden' }}>
        <TempTable
          rowKey="id"
          dataSource={[{ id: '123', a: '123' }]}
          onRow={record => ({
            onClick() {},
          })}
        />
      </Col>
      <Col flex="340px" style={{ overflow: 'hidden' }}>
        <Card>
          <TempCard form={form} />
        </Card>
      </Col>
    </Row>
  );
};
