/**
 * @module 工资发放统计
 */
import React from 'react';
import { Table } from 'lanlinker';
import { Row, Button } from 'antd';

export default ({ dataSource = [] }) => (
  <>
    <Table columns={columns} dataSource={dataSource}></Table>
    <Row justify="end">
      <Button type="link">查看更多</Button>
    </Row>
  </>
);

const columns = [
  {
    title: '序号',
    key: 'id',
    render: (text, record, index) => index,
  },
  {
    title: '劳务队伍名称',
    dataIndex: 'a',
  },
  {
    title: '本月已发放工资',
    dataIndex: 'b',
  },
  {
    title: '本月未发放工资',
    dataIndex: 'c',
  },
  {
    title: '累计已发放工资',
    dataIndex: 'd',
  },
  {
    title: '累计未发放工资',
    dataIndex: 'e',
  },
];
