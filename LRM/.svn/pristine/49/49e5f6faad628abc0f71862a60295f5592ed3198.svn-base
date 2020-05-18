/**
 * @module 劳务人员
 */
import React from 'react';
import { Table, ButtonModal } from 'lanlinker';
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
    title: '姓名',
    dataIndex: 'a',
  },
  {
    title: '身份证号',
    dataIndex: 'b',
  },
  {
    title: '岗位',
    dataIndex: 'c',
  },
  {
    title: '进场时间',
    dataIndex: 'd',
  },
  {
    title: '退场时间',
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
  {
    title: '家庭地址',
    dataIndex: 'j',
  },
  {
    title: '联系电话',
    dataIndex: 'k',
  },
  {
    title: '开户银行',
    dataIndex: 'l',
  },
  {
    title: '银行分行',
    dataIndex: 'm',
  },
  {
    title: '银行账户',
    dataIndex: 'n',
  },
  {
    title: '工资详情',
    render() {
      return <ButtonModal buttonProps={{ text: '查看详情', type: 'primary' }}></ButtonModal>;
    },
  },
  {
    title: '考勤记录',
    render() {
      return <ButtonModal buttonProps={{ text: '查看详情', type: 'primary' }}></ButtonModal>;
    },
  },
];
