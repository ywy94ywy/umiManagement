import React from 'react';
import { Table } from 'lanlinker';
import { Card, Row, Button } from 'antd';
import LaborLayout from '@/components/LaborLayout';

export default ({ dataSource }) => {
  return (
    <LaborLayout
      content={<Table columns={columns} dataSource={dataSource}></Table>}
      sider={
        <>
          <Row justify="end">
            <Button type="primary">发放临时卡</Button>
          </Row>
          <Card size="small" style={{ marginTop: 12 }}>
            heelo
          </Card>
        </>
      }
    />
  );
};

const columns = [
  {
    title: '流水编号',
    dataIndex: 'a',
  },
  {
    title: '卡号',
    dataIndex: 'b',
  },
  {
    title: '持卡人姓名',
    dataIndex: 'd',
  },
  {
    title: '制作时间',
    dataIndex: 'e',
  },
  {
    title: '失效时间',
    dataIndex: 'f',
  },
  {
    title: '备注',
    dataIndex: 'g',
  },
];
