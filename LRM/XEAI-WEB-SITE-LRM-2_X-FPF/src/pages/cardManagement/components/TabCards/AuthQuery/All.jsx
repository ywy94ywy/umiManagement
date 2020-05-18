import React from 'react';
import { Table, SearchTree } from 'lanlinker';
import { Layout, Card, Button } from 'antd';

export default ({ dataSource }) => {
  return (
    <Layout>
      <Layout.Sider theme="light" width={250}>
        <Card size="small">
          <SearchTree
            height={500}
            treeProps={{
              treeRawData: fakeTree,
              reName: {
                titleName: 'a',
                keyName: 'id',
                iconName: 'c',
                pIdName: 'pId',
              },
            }}
          ></SearchTree>
          ,
        </Card>
      </Layout.Sider>
      <Layout.Content style={{ marginLeft: 24 }}>
        <Table
          columns={columns}
          dataSource={dataSource}
          actions={{
            right: <Button type="primary">导出Excel</Button>,
          }}
        ></Table>
      </Layout.Content>
    </Layout>
  );
};

const columns = [
  {
    title: '姓名',
    dataIndex: 'a',
    width: 120,
  },
  {
    title: '性别',
    dataIndex: 'b',
    width: 90,
  },
  {
    title: '启用时间',
    dataIndex: 'd',
  },
  {
    title: '失效时间',
    dataIndex: 'e',
  },
  {
    title: '制卡时间',
    dataIndex: 'f',
  },
  {
    title: '制卡操作人',
    dataIndex: 'g',
  },
];

const fakeTree = [
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
    a: '名字3',
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
