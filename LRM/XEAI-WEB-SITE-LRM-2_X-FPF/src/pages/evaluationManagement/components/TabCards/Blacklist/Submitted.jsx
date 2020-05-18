/**
 * @module 已提交评价记录
 */
import React from 'react';
import { Table } from 'lanlinker';
import { Input, Button } from 'antd';
export default ({ dataSource }) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      actions={{
        right: (
          <>
            <Input placeholder='请输入评价记录流水编号'></Input>
            <Button type="primary">查询</Button>
          </>
        ),
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
    title: '事件时间',
    dataIndex: 'b',
  },
  {
    title: '事件类型',
    dataIndex: 'd',
  },
  {
    title: '操作人组织全名',
    dataIndex: 'e',
  },
  {
    title: '事件状态类型',
    dataIndex: 'f',
  },
];
