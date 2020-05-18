import { Card } from 'antd';
import { Table } from 'lanlinker';
import React from 'react';

const UserActivity = ({ data }) => (
  <Card bordered={false} title="各系统用户量">
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 6,
      }}
    />
  </Card>
);

export default UserActivity;

const columns = [
  {
    title: '排名',
    dataIndex: 'index',
  },
  {
    title: '系统名称',
    dataIndex: 'keyword',
    render: text => <a href="/">{text}</a>,
  },
  {
    title: '总用户数',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: 'DAU',
    dataIndex: 'a',
  },
  {
    title: 'WAU',
    dataIndex: 'b',
  },
  {
    title: 'MAU',
    dataIndex: 'c',
  },
];
