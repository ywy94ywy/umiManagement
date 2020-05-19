/**
 * @module 项目信息管理
 */
import { useState } from 'react';
import { PageHeaderWrapper, useConstructTree } from 'lanlinker';
import { Card, Layout, Space } from 'antd';
import TabsForm from './components/TabsForm';
import TabsSearch from './components/TabsSearch';
import { UserOutlined } from '@ant-design/icons';

export default () => {
  const treeRawData = [
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

  const [treeData] = useConstructTree(treeRawData, {
    title: 'a',
    icon: 'c',
    key: 'id',
  });

  return (
    <PageHeaderWrapper>
      <Card>
        <Layout>
          <Layout.Sider theme="light" width={300} style={{ marginRight: 24 }}>
            <Card
              title={
                <Space>
                  <UserOutlined />
                  组织组别管理
                </Space>
              }
              bodyStyle={{ padding: '0 16px', height: '100%', minHeight: 500 }}
            >
              <TabsSearch treeData={treeData} />
            </Card>
          </Layout.Sider>
          <Layout.Content>
            <Card
              title={
                <Space>
                  <UserOutlined />
                  详情信息
                </Space>
              }
              bodyStyle={{ height: '100%', minHeight: 500 }}
            >
              <TabsForm />
            </Card>
          </Layout.Content>
        </Layout>
      </Card>
    </PageHeaderWrapper>
  );
};
