/**
 * @module 系统执照管理
 * @author DesYang
 */
import React from 'react';
import { Table, PageHeaderWrapper, Card, ButtonModal } from 'lanlinker';
import { Input, Button } from 'antd';
import DataManagement from '@/components/DataManagement';

export default () => {
  return (
    <PageHeaderWrapper>
      <Card title="执照详细列表" extra="单位帐套编号：11">
        <Table
          actions={{
            left: (
              <ButtonModal buttonProps={{ text: '新增', type: 'primary' }}>xinzeng</ButtonModal>
            ),
            right: (
              <>
                <Input placeholder="请输入要查询的关键字"></Input>
                <Button type="primary">查询</Button>
              </>
            ),
          }}
          columns={columns}
          dataSource={data}
          rowKey={(v, i) => i}
        ></Table>
      </Card>
      <Card title="数据管理" marginTop>
        <DataManagement
          onClicks={{
            importClassify() {
              console.log(1);
            },
            exportTags() {
              console.log(2);
            },
            importUsers() {
              console.log(3);
            },
            exportUsers() {
              console.log(4);
            },
            importLicense() {
              console.log(5);
            },
            licenseRecords() {
              console.log(6);
            },
          }}
        />
      </Card>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '系统名称',
    dataIndex: 'a',
  },
  {
    title: '激活码编号',
    dataIndex: 'b',
  },
  {
    title: '授权类型',
    dataIndex: 'c',
  },
  {
    title: '剩余时间',
    dataIndex: 'd',
  },
  {
    title: '激活日期',
    dataIndex: 'e',
  },
  {
    title: '到期日期',
    dataIndex: 'f',
  },
];

const data = [
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  },
];
