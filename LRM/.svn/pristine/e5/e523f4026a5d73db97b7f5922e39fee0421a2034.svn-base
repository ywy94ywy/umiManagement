/**
 * @module 违规员工信息
 */
import React from 'react';
import { Table, ButtonModal } from 'lanlinker';
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
    title: '劳务队伍',
    dataIndex: 'c',
  },
  {
    title: '劳务班组',
    dataIndex: 'd',
  },
  {
    title: '违规次数',
    dataIndex: 'e',
  },
  {
    title: '操作',
    render() {
      return (
        <>
          <ButtonModal buttonProps={{ text: '查看详情', type: 'link' }}></ButtonModal>
          <Button type="link" danger>
            加入不良记录
          </Button>
        </>
      );
    },
  },
];
