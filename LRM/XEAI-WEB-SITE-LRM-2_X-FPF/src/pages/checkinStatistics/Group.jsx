/**
 * @module 劳务班组
 */
import React from 'react';
import { Table } from 'lanlinker';
import { Button, Form, DatePicker, Input, Select } from 'antd';

export default () => {
  return (
    <Table
      columns={columns}
      actions={{
        right: (
          <Form layout="inline">
            <Form.Item label="统计维度">
              <Select></Select>
            </Form.Item>
            <Form.Item label="统计月份">
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
      scroll={{
        x: 2770,
      }}
    ></Table>
  );
};

const columns = [
  {
    title: '序号',
    render(t, r, i) {
      return i;
    },
  },
  {
    title: '劳务班组',
    dataIndex: 'a',
  },
  {
    title: '劳务队长',
    dataIndex: 'b',
  },
  {
    title: '出勤率',
    dataIndex: 'c',
  },
  {
    title: '日平均值',
    dataIndex: 'd',
  },
  {
    title: '小计值',
    dataIndex: 'e',
  },
];

new Array(31).fill('').map((v, i) => {
  columns.push({ title: i + 1 + '日', dataIndex: 'f' + i + 1 });
});
