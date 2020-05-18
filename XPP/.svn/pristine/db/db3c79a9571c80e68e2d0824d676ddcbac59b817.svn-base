/**
 * @module 平台管理-用户执照管理
 */
import React from 'react';
import { PageHeaderWrapper, Card, SearchTree, Table, ButtonModal, LanLayout } from 'lanlinker';
import { Button, Input } from 'antd';
import DataManagement from '@/components/DataManagement';

export default () => {
  const treeData = [
    {
      id: 1,
      a: '名字1',
      b: '键1',
      c: '图标',
      pId: 0,
    },
    {
      id: 2,
      a: '名字2',
      b: '键2',
      c: '图标',
      pId: 0,
    },
    {
      id: 3,
      a: '名字3333333333333333333333333333333333333333333333',
      b: '键3',
      c: '图标',
      pId: 1,
    },
    {
      id: 7,
      a: '名字4',
      b: '键7',
      c: '图标',
      pId: 1,
    },
    {
      id: 8,
      a: '名字',
      b: '键8',
      c: '图标',
      pId: 1,
    },
    {
      id: 5,
      a: '名字',
      b: '键5',
      c: '图标',
      pId: 2,
    },
    {
      id: 4,
      a: '名字',
      b: '键4',
      c: '图标',
      pId: 3,
    },
    {
      id: 6,
      a: '名字',
      b: '键6',
      c: '图标',
      pId: 3,
    },
    {
      id: 9,
      a: '名字9',
      b: '键9',
      c: '图标',
      pId: 7,
    },
  ];

  return (
    <PageHeaderWrapper>
      <LanLayout
        siderCardProps={{ title: '租户执照' }}
        contentCardProps={{ title: '用户执照列表' }}
        siderList={[
          <SearchTree
            height={645}
            treeProps={{
              treeRawData: treeData,
              reName: {
                title: 'a',
                key: 'id',
                icon: 'c',
                pId: 'pId',
              },
            }}
          ></SearchTree>,
        ]}
        content={
          <Table
            actions={{
              right: (
                <>
                  <Input placeholder="请输入要查询的关键字"></Input>
                  <Button type="primary">查询</Button>
                </>
              ),
            }}
            columns={columns}
            rowKey="id"
            dataSource={data}
          ></Table>
        }
      ></LanLayout>
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
    title: '流水编码',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '用户名称',
    dataIndex: 'b',
    ellipsis: true,
  },
  {
    title: '申请时间',
    dataIndex: 'c',
    ellipsis: true,
  },
  {
    title: '身份证号码',
    dataIndex: 'd',
    ellipsis: true,
  },
  {
    title: '是否身份验证',
    dataIndex: 'e',
    ellipsis: true,
  },
  {
    title: '操作',
    render() {
      return (
        <>
          <ButtonModal buttonProps={{ text: '通过', type: 'link' }}>lll</ButtonModal>
          <ButtonModal buttonProps={{ text: '拒绝', type: 'link' }}>lll</ButtonModal>
        </>
      );
    },
  },
];

const data = [];
for (let i = 0; i < 8; i++) {
  data.push({
    a: '个人',
    b: 23142,
    c: '南通二建集团有限公司',
    d: 15812345678,
    e: '12345678910@qq.com',
    f: 310109197708022019,
    g: '南通二建集团有限公司',
    h: '南通二建',
    i: '江苏省南通市启东市人民中路683号',
    j: '0351-0123456',
    k: 65756,
    l: 54645,
    id: i,
  });
}
