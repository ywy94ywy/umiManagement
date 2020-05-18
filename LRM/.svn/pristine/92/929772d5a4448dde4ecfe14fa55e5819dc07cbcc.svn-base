/**
 * @module 刷卡记录
 */
import React from 'react';
import { Table, ButtonModal } from 'lanlinker';
import { Button, Form, DatePicker, Input } from 'antd';

export default () => {
  return (
    <>
      <Form layout="inline" style={{ marginBottom: 12 }}>
        <Form.Item label="姓名">XXX</Form.Item>
        <Form.Item label="性别">XXX</Form.Item>
        <Form.Item label="身份证">XXX</Form.Item>
        <Form.Item label="岗位">XXX</Form.Item>
      </Form>
      <Table columns={columns}></Table>
    </>
  );
};

const columns = [
  {
    title: '流水编号',
    dataIndex: 'a',
  },
  {
    title: '刷卡时间',
    dataIndex: 'b',
  },
  {
    title: '通勤标志',
    dataIndex: 'c',
  },
  {
    title: '通勤类型',
    dataIndex: 'd',
  },
  {
    title: '刷卡照片',
    render() {
      return <ButtonModal buttonProps={{ text: '预览', type: 'primary' }}></ButtonModal>;
    },
  },
];
