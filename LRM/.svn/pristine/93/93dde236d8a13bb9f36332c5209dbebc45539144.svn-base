import React from 'react';
import { ButtonModal, Table } from 'lanlinker';
import { Button, Form, DatePicker, Input, Select } from 'antd';

export default () => {
  return (
    <Table
      columns={columns}
      rowSelection={() => {}}
      actions={{
        left: (
          <>
            <ButtonModal buttonProps={{ text: '新增', type: 'primary' }}></ButtonModal>
            <Button type="primary" danger>
              删除
            </Button>
          </>
        ),
        right: (
          <Form layout="inline">
            <Form.Item label="培训日期">
              <DatePicker></DatePicker>
            </Form.Item>
            <Form.Item label="培训类型">
              <Select></Select>
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入培训名称或培训老师姓名"></Input>
            </Form.Item>
            <Button type="primary">查询</Button>
          </Form>
        ),
      }}
    ></Table>
  );
};

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
    title: '是否合格',
    dataIndex: 'e',
  },
  {
    title: '培训得分',
    dataIndex: 'f',
  },
  {
    title: '岗位',
    dataIndex: 'g',
  },
  {
    title: '操作',
    render() {
      return <Button type="link">修改</Button>;
    },
  },
];
