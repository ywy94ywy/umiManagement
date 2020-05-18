/**
 * @module 登记管理
 */
import React from 'react';
import {
  PageHeaderWrapper,
  Card,
  ButtonModal,
  Table,
  SearchTree,
  Form,
  Tabs,
} from 'lanlinker';
import { Input, Popconfirm, Select, Button, Layout } from 'antd';
import registerForm from './registerForm';
import styles from './style.less';

export default () => {
  return (
    <PageHeaderWrapper className={styles.registerManagement}>
      <Card title="待进场员工信息">
        <Layout>
          <Layout.Sider theme="light" width={250}>
            <ButtonModal
              title="手工登记员工信息"
              width={1000}
              buttonProps={{ text: '手工登记', type: 'primary', block: true }}
              block
            >
              <Form columns={2} labelWidth={150} configData={registerForm} />
            </ButtonModal>
            <Card bodyStyle={{ padding: 0 }} style={{ marginTop: '10px' }}>
              <Tabs>
                <Tabs.TabPane tab="管理人员" key="管理人员">
                  <SearchTree
                    height={580}
                    treeProps={{
                      treeRawData: treeData,
                      reName: {
                        title: 'a',
                        icon: 'c',
                      },
                    }}
                  ></SearchTree>
                </Tabs.TabPane>
                <Tabs.TabPane tab="劳务人员" key="劳务人员">
                  <SearchTree
                    height={580}
                    treeProps={{
                      treeRawData: treeData,
                      reName: {
                        title: 'a',
                        icon: 'c',
                      },
                    }}
                  ></SearchTree>
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Layout.Sider>
          <Layout.Content className={styles.content}>
            <Table
              dataSource={data}
              columns={columns1}
              rowKey={(v, i) => i}
              scroll={{
                x: 910,
              }}
              actions={{
                left: (
                  <>
                    <ButtonModal
                      buttonProps={{ text: '刷身份证登记' }}
                    ></ButtonModal>
                    <ButtonModal
                      title="批量导入人员进场"
                      width={1000}
                      buttonProps={{ text: '批量导入' }}
                    >
                      <Table
                        columns={columnsP}
                        actions={{
                          left: (
                            <>
                              <Button type="primary">上传EXCEL</Button>
                              <Button type="link">下载excel模板</Button>
                            </>
                          ),
                          right: (
                            <>
                              <Input placeholder="请输入姓名或身份证号"></Input>
                              <Button type="primary">查询</Button>
                            </>
                          ),
                        }}
                      ></Table>
                    </ButtonModal>
                  </>
                ),
                right: (
                  <>
                    <Select defaultValue="1">
                      <Select.Option value="1">全部岗位</Select.Option>
                    </Select>
                    <Input placeholder="请输入姓名或身份证号"></Input>
                    <Button type="primary">查询</Button>
                  </>
                ),
              }}
            ></Table>
          </Layout.Content>
        </Layout>
      </Card>
      <Card title="已进场员工信息" marginTop>
        <Layout>
          <Layout.Sider theme="light" width={250}>
            <Card bodyStyle={{ padding: 0 }}>
              <Tabs>
                <Tabs.TabPane tab="管理人员" key="管理人员">
                  <SearchTree
                    height={622}
                    treeProps={{
                      treeRawData: treeData,
                      reName: {
                        title: 'a',
                        icon: 'c',
                      },
                    }}
                  ></SearchTree>
                </Tabs.TabPane>
                <Tabs.TabPane tab="劳务人员" key="劳务人员">
                  <SearchTree
                    height={622}
                    treeProps={{
                      treeRawData: treeData,
                      reName: {
                        title: 'a',
                        icon: 'c',
                      },
                    }}
                  ></SearchTree>
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Layout.Sider>
          <Layout.Content className={styles.content}>
            <Table
              dataSource={data}
              columns={columns2}
              rowKey={(v, i) => i}
              rowSelection={() => {}}
              scroll={{ x: 1080 }}
              actions={{
                left: (
                  <Button type="primary" danger>
                    批量退场
                  </Button>
                ),
                right: (
                  <>
                    <Select defaultValue="1">
                      <Select.Option value="1">全部岗位</Select.Option>
                    </Select>
                    <Input placeholder="请输入姓名或身份证号"></Input>
                    <Button type="primary">查询</Button>
                  </>
                ),
              }}
            ></Table>
          </Layout.Content>
        </Layout>
      </Card>
    </PageHeaderWrapper>
  );
};

const columns1 = [
  {
    title: '姓名',
    dataIndex: 'a',
    width: 120,
    ellipsis: true,
  },
  {
    title: '性别',
    dataIndex: 'b',
    width: 80,
    ellipsis: true,
    filters: [
      {
        text: '男',
        value: '1',
      },
      {
        text: '女',
        value: '2',
      },
    ],
  },
  {
    title: '年龄',
    dataIndex: 'c',
    ellipsis: true,
    width: 80,
    filters: [
      {
        text: '16~30',
        value: '1',
      },
      {
        text: '31~40',
        value: '2',
      },
      {
        text: '41~50',
        value: '3',
      },
      {
        text: '51~55',
        value: '4',
      },
      {
        text: '55以上',
        value: '5',
      },
    ],
  },
  {
    title: '身份证号',
    dataIndex: 'd',
    width: 200,
    ellipsis: true,
  },
  {
    title: '联系电话',
    dataIndex: 'dd',
    width: 160,
    ellipsis: true,
  },
  {
    title: '岗位',
    dataIndex: 'e',
    width: 140,
    ellipsis: true,
  },
  {
    title: '操作',
    width: 130,
    fixed: 'right',
    render: () => (
      <>
        <Popconfirm title="你确定该人员退场吗？">
          <Button type="link" size="small">
            修改
          </Button>
        </Popconfirm>
        <Button type="link" size="small">
          进场
        </Button>
      </>
    ),
  },
];

const columns2 = [
  {
    title: '姓名',
    dataIndex: 'a',
    width: 120,
    ellipsis: true,
  },
  {
    title: '性别',
    dataIndex: 'b',
    width: 80,
    ellipsis: true,
    filters: [
      {
        text: '男',
        value: '1',
      },
      {
        text: '女',
        value: '2',
      },
    ],
  },
  {
    title: '年龄',
    dataIndex: 'c',
    ellipsis: true,
    width: 80,
    filters: [
      {
        text: '16~30',
        value: '1',
      },
      {
        text: '31~40',
        value: '2',
      },
      {
        text: '41~50',
        value: '3',
      },
      {
        text: '51~55',
        value: '4',
      },
      {
        text: '55以上',
        value: '5',
      },
    ],
  },
  {
    title: '身份证号',
    dataIndex: 'd',
    width: 200,
    ellipsis: true,
  },
  {
    title: '联系电话',
    dataIndex: 'dd',
    width: 160,
    ellipsis: true,
  },
  {
    title: '岗位',
    dataIndex: 'e',
    width: 140,
    ellipsis: true,
  },
  {
    title: '进场时间',
    dataIndex: 'f',
    width: 160,
    ellipsis: true,
  },
  {
    title: '操作',
    width: 80,
    fixed: 'right',
    render: () => (
      <>
        <Button type="link" size="small" danger>
          退场
        </Button>
      </>
    ),
  },
];

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

const data = new Array(15).fill('').map(() => ({
  a: 'asfas',
  b: '0',
  c: '30',
  d: '323663522362535265',
  dd: '13862555555',
  e: '传统建筑画工',
  f: '2019-01-01 12:11:24',
}));

const columnsP = [
  {
    title: '姓名',
    dataIndex: 'a',
  },
  {
    title: '性别',
    dataIndex: 'a',
  },
  {
    title: '身份证号',
    dataIndex: 'a',
  },
  {
    title: '劳务公司',
    dataIndex: 'a',
  },
  {
    title: '劳务队伍',
    dataIndex: 'a',
  },
  {
    title: '劳务班组',
    dataIndex: 'a',
  },
  {
    title: '岗位',
    dataIndex: 'a',
  },
];
