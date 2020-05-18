/**
 * @module 管理人员
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
            <Form.Item label="人场日期">
              <DatePicker></DatePicker>
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入部门名称或负责人姓名"></Input>
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
    title: '序号',
    render(t, v, i) {
      return i;
    },
  },
  {
    title: '部门名称',
    dataIndex: 'a',
  },
  {
    title: '负责人姓名',
    dataIndex: 'b',
  },
  {
    title: '小计值',
    dataIndex: 'c',
  },
  {
    title: '项目经理',
    dataIndex: 'd',
  },
  {
    title: '资料员',
    dataIndex: 'e',
  },
  {
    title: '施工员',
    dataIndex: 'f',
  },
  {
    title: '安全员',
    dataIndex: 'g',
  },
  {
    title: '标准员',
    dataIndex: 'h',
  },
  {
    title: '材料员',
    dataIndex: 'i',
  },
  {
    title: '劳务员',
    dataIndex: 'j',
  },
  {
    title: '机械员',
    dataIndex: 'k',
  },
  {
    title: '质量员',
    dataIndex: 'l',
  },
];
