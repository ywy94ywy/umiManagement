/**
 * title: 蓝瓴特色布局3
 */
import React from 'react';
import { LanLayout, SearchTree } from 'lanlinker';
import { Button } from 'antd';

export default () => {
  return (
    <LanLayout
      contentCardProps={{ title: '标题2' }}
      tabProps={{ tabBarGutter: 48 }}
      tabList={['标签名称1', '标签名称2']}
      sider={
        <Button block type="primary">
          按钮
        </Button>
      }
      siderList={[
        <SearchTree
          treeProps={{
            treeRawData: treeData,
            reName: {
              title: 'a',
              icon: 'c',
            },
          }}
          height={500}
        >
          1
        </SearchTree>,
        <SearchTree
          treeProps={{
            treeRawData: treeData,
            reName: {
              title: 'a',
              icon: 'c',
            },
          }}
          height={500}
        >
          1
        </SearchTree>,
        <SearchTree
          treeProps={{
            treeRawData: treeData,
            reName: {
              title: 'a',
              icon: 'c',
            },
          }}
          height={500}
        >
          1
        </SearchTree>,
      ]}
      content={<div>主页面</div>}
    ></LanLayout>
  );
};

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
