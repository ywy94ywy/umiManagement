/**
 * @module 卡片记录查询
 */
import { useState } from 'react';
import { Table } from 'lanlinker';
import { Input, Button, Form, Select } from 'antd';

export default () => {
  return (
    <Table
      rowKey="id"
      dataSource={[
        {
          id: 'a',
          a: '123',
        },
      ]}
      columns={columns}
      actions={{
        right: (
          <Form layout="inline" initialValues={{ a: '1' }}>
            <Form.Item label="组织名称">
              <Select></Select>
            </Form.Item>
            <Form.Item label="卡片性质">
              <Select></Select>
            </Form.Item>
            <Form.Item label="卡片类型">
              <Select></Select>
            </Form.Item>
            <Form.Item>
              <InputWrapper />
            </Form.Item>
            <Form.Item>
              <Button type="primary">查询</Button>
            </Form.Item>
            <Form.Item>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        ),
      }}
    />
  );
};

const InputWrapper = () => {
  const holder = {
    '1': '请输入卡号',
    '2': '请输入姓名',
    '3': '请输入身份证号',
    '4': '请输入流水编码',
  };
  const [placeholder, setPlaceHolder] = useState(holder['1']);

  return (
    <Input
      addonBefore={
        <Form.Item noStyle name="a">
          <Select
            onSelect={e => setPlaceHolder(holder[e])}
            style={{ width: 100 }}
          >
            <Select.Option value="1">卡号</Select.Option>
            <Select.Option value="2">姓名</Select.Option>
            <Select.Option value="3">身份证号</Select.Option>
            <Select.Option value="4">流水编码</Select.Option>
          </Select>
        </Form.Item>
      }
      placeholder={placeholder}
    ></Input>
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
    title: '卡号',
    dataIndex: 'd',
  },
  {
    title: '姓名',
    dataIndex: 'd',
  },
  {
    title: '身份证号',
    dataIndex: 'e',
  },
  {
    title: '岗位',
    dataIndex: 'f',
  },
  {
    title: '制卡操作人',
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
