/**
 * @module 劳务人员
 */
import React from 'react';
import { Table } from 'lanlinker';
import { Button, Form, DatePicker, Input } from 'antd';

export default () => {
  return (
    <Table
      columns={columns}
      actions={{
        right: (
          <Form layout="inline">
            <Form.Item label="进场日期">
              <DatePicker></DatePicker>
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入姓名或身份证号"></Input>
            </Form.Item>
            <Button type="primary">查询</Button>
            <Button>重置</Button>
          </Form>
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
    title: '姓名',
    dataIndex: 'b',
  },
  {
    title: '身份证号',
    dataIndex: 'c',
  },
  {
    title: '性别',
    dataIndex: 'd',
  },
  {
    title: '岗位',
    dataIndex: 'e',
  },
  {
    title: '刷卡次数',
    dataIndex: 'f',
  },
];
