/**
 * @module 违规流水信息
 */
import React from 'react';
import { Table } from 'lanlinker';
import { Button, Form, Input, Select } from 'antd';

export default () => {
  return (
    <Table
      columns={columns}
      actions={{
        right: (
          <Form layout="inline">
            <Form.Item label="违规类型">
              <Select></Select>
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入姓名或身份证号"></Input>
            </Form.Item>
            <Button type="primary">查询</Button>
            <Button>打印</Button>
          </Form>
        ),
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
    title: '姓名',
    dataIndex: 'a',
  },
  {
    title: '身份证号',
    dataIndex: 'b',
  },
  {
    title: '违规类型',
    dataIndex: 'c',
  },
  {
    title: '违规事件',
    dataIndex: 'd',
  },
  {
    title: '违规门区',
    dataIndex: 'e',
  },
  {
    title: '留证设备',
    dataIndex: 'f',
  },
  {
    title: '留证数量',
    dataIndex: 'g',
  },
];
