/**
 * @module 权限管理-模块综合管理
 * @author DesYang
 * @todo 模态框内容
 */
import React from 'react';
import { Button, Input, Tabs, Dropdown, Menu, Checkbox, Form, Select, Row, Col } from 'antd';
import {
  PageHeaderWrapper,
  LanLayout,
  Card,
  Table,
  SearchTree,
  ButtonModal,
  Tabs as LanTabs,
  Form as LanForm,
} from 'lanlinker';
import DataManagement from '@/components/DataManagement';
import moduleForm from './forms/module';
import accountForm from './forms/account';
import baseForm from './forms/base';
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
  const treeData2 = [
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
    <PageHeaderWrapper className={styles.moduleManagement}>
      <LanLayout
        siderWidth={300}
        siderCardProps={{ title: '模块组别管理', bodyStyle: { padding: 0 } }}
        contentCardProps={{ title: '模块详细列表' }}
        sider={
          <LanTabs>
            <LanTabs.TabPane tab="模块菜单分类" key="1">
              <SearchTree
                height={590}
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
            </LanTabs.TabPane>
            <LanTabs.TabPane tab="模块权限标签" key="2">
              <SearchTree
                height={590}
                treeProps={{
                  treeRawData: treeData2,
                  reName: {
                    title: 'a',
                    key: 'id',
                    icon: 'c',
                    pId: 'pId',
                  },
                }}
              ></SearchTree>
            </LanTabs.TabPane>
          </LanTabs>
        }
        content={
          <Table
            actions={{
              left: (
                <>
                  <ButtonModal
                    title="新增"
                    width={1000}
                    bodyStyle={{
                      height: 600,
                      overflow: 'auto',
                    }}
                    buttonProps={{ text: '新建', type: 'primary' }}
                  >
                    <LanForm configData={moduleForm()} columns={2} labelCol={{ span: 9 }}></LanForm>
                    <Tabs>
                      <Tabs.TabPane tab="账号信息" key="1">
                        <LanForm
                          configData={accountForm()}
                          columns={2}
                          labelCol={{ span: 9 }}
                        ></LanForm>
                      </Tabs.TabPane>
                      <Tabs.TabPane tab="基本信息" key="2">
                        <LanForm configData={baseForm()} labelCol={{ span: 4 }}></LanForm>
                      </Tabs.TabPane>
                    </Tabs>
                  </ButtonModal>
                  <ButtonModal buttonProps={{ text: '修改', type: 'primary' }}>hello</ButtonModal>
                  <Button type="primary" danger>
                    删除
                  </Button>
                  <ButtonModal buttonProps={{ text: '排序', type: 'primary' }}>hello</ButtonModal>
                </>
              ),
              right: (
                <Form layout="inline">
                  <Form.Item>
                    <Checkbox>总览</Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Row>
                      <Col span={8}>
                        <Select></Select>
                      </Col>
                      <Col span={16}>
                        <Input placeholder="请输入要查询的关键字"></Input>
                      </Col>
                    </Row>
                  </Form.Item>

                  <Button type="primary">查询</Button>
                </Form>
              ),
            }}
            columns={columns}
            dataSource={data}
            rowKey={(v, i) => i}
            rowSelection={rowSelection}
            scroll={{ x: 3935 }}
          ></Table>
        }
      ></LanLayout>
      <Card title="数据管理" marginTop>
        <DataManagement />
      </Card>
    </PageHeaderWrapper>
  );
};

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const columns = [
  {
    title: '平台系统执照中文名称',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '模块中文类型',
    dataIndex: 'b',
    ellipsis: true,
  },
  {
    title: '模块编号',
    dataIndex: 'c',
    ellipsis: true,
  },
  {
    title: '模块中文名称',
    dataIndex: 'd',
    ellipsis: true,
  },
  {
    title: '模块英文名称',
    dataIndex: 'e',
    ellipsis: true,
  },
  {
    title: '图标fontclass英文名称',
    dataIndex: 'f',
    ellipsis: true,
  },
  {
    title: '图标unicode英文名称',
    dataIndex: 'g',
    ellipsis: true,
  },
  {
    title: '模块URI',
    dataIndex: 'h',
    ellipsis: true,
  },
  {
    title: '模块简介',
    dataIndex: 'i',
    ellipsis: true,
  },
  {
    title: '模块描述',
    dataIndex: 'j',
    ellipsis: true,
  },
  {
    title: '模块备注',
    dataIndex: 'k',
    ellipsis: true,
  },
  {
    title: '模块元素名',
    dataIndex: 'l',
    ellipsis: true,
  },
  {
    title: '模块元素值',
    dataIndex: 'm',
    ellipsis: true,
  },
  {
    title: '创建时间',
    dataIndex: 'n',
    ellipsis: true,
  },
  {
    title: '修改时间',
    dataIndex: 'o',
    ellipsis: true,
  },
  {
    title: '启用时间',
    dataIndex: 'p',
    ellipsis: true,
  },
  {
    title: '失效时间',
    dataIndex: 'q',
    ellipsis: true,
  },
  {
    title: '操作',
    width: 100,
    fixed: 'right',
    render() {
      return (
        <Dropdown
          trigger="click"
          overlay={
            <Menu>
              <Menu.Item>
                <ButtonModal buttonProps={{ text: '详情', type: 'link' }}></ButtonModal>
              </Menu.Item>
              <Menu.Item>
                <ButtonModal buttonProps={{ text: '修改', type: 'link' }}></ButtonModal>
              </Menu.Item>
              <Menu.Item>
                <ButtonModal buttonProps={{ text: '删除', type: 'link' }}></ButtonModal>
              </Menu.Item>
            </Menu>
          }
        >
          <a>更多操作</a>
        </Dropdown>
      );
    },
  },
];

const data = [
  {
    a: '个人',
    b: 2342,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
  },
  {
    a: '个人',
    b: 2342,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
  },
  {
    a: '个人',
    b: 2342,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
  },
  {
    a: '个人',
    b: 2342,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
  },
  {
    a: '个人',
    b: 2342,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
  },
  {
    a: '个人',
    b: 2342,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
  },
  {
    a: '个人',
    b: 2342,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
  },
  {
    a: '个人',
    b: 2342,
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
    m: 54645,
    n: 54645,
    o: 54645,
    p: 54645,
    q: 54645,
  },
];
