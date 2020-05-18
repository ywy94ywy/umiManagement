import React from 'react';
import { Table } from 'lanlinker';
import { Select } from 'antd';

export default ({ dataSource }) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      actions={{
        left: <Select></Select>,
      }}
    ></Table>
  );
};

const columns = [
  {
    title: '流水编号',
    dataIndex: 'a',
  },
  {
    title: '卡片种类',
    dataIndex: 'b',
  },
  {
    title: '授权人姓名',
    dataIndex: 'd',
  },
  {
    title: '性别',
    dataIndex: 'e',
  },
  {
    title: '岗位',
    dataIndex: 'f',
  },
  {
    title: '操作人',
    dataIndex: 'g',
  },
  {
    title: '启用时间',
    dataIndex: 'h',
  },
  {
    title: '失效时间',
    dataIndex: 'i',
  },
];
