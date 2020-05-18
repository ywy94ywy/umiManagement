/**
 * @module 培训人员统计
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
    title: '安全教育人数',
    dataIndex: 'b',
  },
  {
    title: '入场教育人数',
    dataIndex: 'c',
  },
  {
    title: '进场教育人数',
    dataIndex: 'd',
  },
];
