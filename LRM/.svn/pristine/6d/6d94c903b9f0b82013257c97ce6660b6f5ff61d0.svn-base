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
    title: '序号',
    render(t, r, i) {
      return i;
    },
  },
  {
    title: '劳务班组名称',
    dataIndex: 'a',
  },
  {
    title: '在职人员',
    dataIndex: 'b',
  },
  {
    title: '进场人员',
    dataIndex: 'c',
  },
  {
    title: '退场人员',
    dataIndex: 'd',
  },
  {
    title: '银行账号',
    dataIndex: 'e',
  },
  {
    title: '劳动合同',
    dataIndex: 'f',
  },
  {
    title: '安全教育',
    dataIndex: 'g',
  },
  {
    title: '持证上岗',
    dataIndex: 'h',
  },
  {
    title: '住宿分配',
    dataIndex: 'i',
  },
];
