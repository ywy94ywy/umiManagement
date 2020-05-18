/**
 * @module 劳务班组
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
    title: '劳务队伍名称',
    dataIndex: 'b',
  },
  {
    title: '劳务队长姓名',
    dataIndex: 'c',
  },
  {
    title: '刷卡次数',
    dataIndex: 'd',
  },
];
