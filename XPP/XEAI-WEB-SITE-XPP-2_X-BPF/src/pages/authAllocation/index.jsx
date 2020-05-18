/**
 * @module 权限管理-权限分配管理
 * @author DesYang
 */
import React from 'react';
import { Form, Select, Popconfirm, Checkbox } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import { PageHeaderWrapper, LanLayout, Table, SearchTree, ButtonModal } from 'lanlinker';

import styles from './style.less';

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
  const authColumns = [
    {
      title: '模块权限标签编号',
      dataIndex: 'a',
      ellipsis: true,
    },
    {
      title: '模块权限标签名称',
      dataIndex: 'b',
      ellipsis: true,
    },
    {
      title: '用户权限特征',
      dataIndex: 'c',
      ellipsis: true,
    },
    {
      title: '用户权限操作',
      render() {
        return (
          <>
            <ButtonModal
              title="关联"
              width={900}
              buttonProps={{
                text: '修改',
                type: 'link',
              }}
            >
              <Form layout="inline">
                <Table
                  rowKey="id"
                  style={{ width: '100%' }}
                  columns={relatedColumns}
                  dataSource={fakeData}
                  scroll={{
                    x: 2000,
                  }}
                  actions={{
                    left: (
                      <>
                        <Form.Item label="用户权限标签">
                          <Select></Select>
                        </Form.Item>
                        <Form.Item label="模块权限标签">
                          <Select></Select>
                        </Form.Item>
                      </>
                    ),
                  }}
                  pagination={{
                    pageSize: 8,
                  }}
                ></Table>
                <Form.Item label="权限选择">
                  <Checkbox.Group options={['全选', '增加', '删除', '修改', '查询']} />
                </Form.Item>
              </Form>
            </ButtonModal>
            <Popconfirm
              title="你确定要删除这行内容吗？"
              icon={<CloseCircleFilled twoToneColor="#52c41a" style={{ color: 'red' }} />}
              onConfirm={() => {
                console.log(12);
              }}
            >
              <a>删除</a>
            </Popconfirm>
          </>
        );
      },
    },
  ];
  return (
    <PageHeaderWrapper className={styles.moduleManagement}>
      <LanLayout
        siderWidth={300}
        siderCardProps={{ title: '用户权限标签' }}
        contentCardProps={{
          title: '权限分配情况列表',
        }}
        sider={
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
          ></SearchTree>
        }
        content={
          <Table
            rowKey="id"
            columns={authColumns}
            dataSource={fakeData}
            pagination={{
              pageSize: 7,
            }}
          ></Table>
        }
      ></LanLayout>
    </PageHeaderWrapper>
  );
};
const relatedColumns = [
  {
    title: '平台执照中文名称',
    dataIndex: 'a',
    width: 200,
  },
  {
    title: '模块中文类型',
    dataIndex: 'b',
    width: 200,
  },
  {
    title: '模块编号',
    dataIndex: 'c',
    width: 200,
  },
  {
    title: '模块中文名称',
    dataIndex: 'd',
    width: 200,
  },
  {
    title: '模块英文名称',
    dataIndex: 'e',
    width: 200,
  },
  {
    title: '模块元素中文名称',
    dataIndex: 'f',
    width: 200,
  },
  {
    title: '模块URI',
    dataIndex: 'g',
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'h',
    // width: 200,
  },
  {
    title: '启用时间',
    dataIndex: 'i',
    // width: 200,
  },
  {
    title: '失效时间',
    dataIndex: 'j',
    // width: 200,
  },
  {
    title: '修改时间',
    dataIndex: 'g',
    // width: 200,
  },
];

const fakeData = [];

for (let i = 0; i < 10; i++) {
  fakeData.push({
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 1,
    g: 1,
    h: 1,
    i: 1,
    j: 1,
    id: i,
  });
}
