/**
 * @module 选择培训员工模态框
 */
import { useState } from 'react';
import { Table } from 'lanlinker';
import { TreeSelect, Form, Button, Input, Select } from 'antd';

export default () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'a',
    },
    {
      title: '性别',
      dataIndex: 'b',
    },
    {
      title: '年龄',
      dataIndex: 'c',
    },
    {
      title: '身份证号',
      dataIndex: 'd',
    },
    {
      title: '岗位',
      dataIndex: 'e',
    },
    {
      title: '所属队伍',
      dataIndex: 'f',
    },
    {
      title: '所属班组',
      dataIndex: 'g',
    },
  ];

  return (
    <Table
      rowKey="id"
      dataSource={[
        {
          id: '1',
          a: '1',
        },
      ]}
      rowSelection={{
        onChange() {},
      }}
      columns={columns}
      actions={{
        right: (
          <Form layout="inline" initialValues={{ a: '1' }}>
            <Form.Item label="组织名称">
              <TreeSelect />
            </Form.Item>
            <Form.Item>
              <InputWrapper />
            </Form.Item>
            <Form.Item>
              <Button type="primary">查询</Button>
            </Form.Item>
          </Form>
        ),
      }}
    />
  );
};

const InputWrapper = () => {
  const holder = {
    '1': '请输入姓名',
    '2': '请输入身份证号',
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
            <Select.Option value="1">姓名</Select.Option>
            <Select.Option value="2">身份证号</Select.Option>
          </Select>
        </Form.Item>
      }
      placeholder={placeholder}
    ></Input>
  );
};
