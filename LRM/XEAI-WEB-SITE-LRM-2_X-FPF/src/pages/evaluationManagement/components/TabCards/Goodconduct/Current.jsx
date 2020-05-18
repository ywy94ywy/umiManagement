/**
 * @module 本级组织评价记录
 */
import React from 'react';
import { Table, ButtonModal } from 'lanlinker';
import { Input, Button } from 'antd';

export default ({ dataSource }) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      actions={{
        left: (
          <>
            <ButtonModal buttonProps={{ text: '新增', type: 'primary' }} title="新增涉事组织">
              pending
            </ButtonModal>
            <ButtonModal buttonProps={{ text: '修改', type: 'primary' }} title="修改涉事组织">
              pending
            </ButtonModal>
            <Button type="primary" danger>删除</Button>
          </>
        ),
        right: (
          <>
            <Input placeholder="请输入评价记录流水编号"></Input>
            <Button type="primary">查询</Button>
          </>
        ),
      }}
    ></Table>
  );
};

const columns = [
  {
    title: '序号',
    key: 'number',
    render(t, r, i) {
      return i;
    },
  },
  {
    title: '企业名称',
    dataIndex: 'a',
  },
  {
    title: '统一社会信用代码',
    dataIndex: 'b',
  },
  {
    title: '事件时间',
    dataIndex: 'd',
  },
  {
    title: '事件类型',
    dataIndex: 'e',
  },
  {
    title: '事件内容',
    dataIndex: 'f',
  },
  {
    title: '操作人组织全名',
    dataIndex: 'g',
  },
  {
    title: '操作人联系电话',
    dataIndex: 'h',
  },
  {
    title: '备注',
    dataIndex: 'i',
  },
  {
    title: '附件',
    render() {
      return <ButtonModal buttonProps={{ text: '附件', type: 'link' }}></ButtonModal>;
    },
  },
];
