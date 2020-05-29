/**
 * @module 权限管理-模块综合管理
 * @todo 模态框处理，公共删除confirm
 */
import { PageHeaderWrapper, Table, SearchTree, ButtonModal, useConstructTree } from 'lanlinker';
import { Button, Input, Card, Tabs, Dropdown, Menu, Checkbox, Form, Select, Row, Col } from 'antd';
import DataManagement from '@/components/DataManagement';
import ModuleModal from './components/ModuleModal';
import styles from './style.less';

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
  const [treeData] = useConstructTree(treeRawData, {
    title: 'a',
    key: 'id',
    icon: 'c',
    pId: 'pId',
  });

  return (
    <PageHeaderWrapper className={styles.moduleManagement}>
      <Row gutter={[24, 24]}>
        <Col flex="0 0 300px" style={{ overflow: 'hidden' }}>
          <Card title="模块组别管理" bodyStyle={{ padding: '0 12px 16px' }}>
            <Tabs>
              <Tabs.TabPane tab="模块菜单分类" key="模块菜单分类">
                <SearchTree
                  height={590}
                  treeProps={{
                    treeData,
                  }}
                ></SearchTree>
              </Tabs.TabPane>
              <Tabs.TabPane tab="模块权限标签" key="模块权限标签">
                <SearchTree
                  height={590}
                  treeProps={{
                    treeData,
                  }}
                ></SearchTree>
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Col>
        <Col flex="1" style={{ overflow: 'hidden' }}>
          <Card title="模块详细列表">
            <Table
              actions={{
                left: (
                  <>
                    <ModuleModal
                      title="新增"
                      buttonProps={{ text: '新增', type: 'primary' }}
                    ></ModuleModal>
                    <ButtonModal buttonProps={{ text: '修改', type: 'primary' }}>
                      暂无页面
                    </ButtonModal>
                    <Button type="primary" danger>
                      删除
                    </Button>
                  </>
                ),
                right: (
                  <Form layout="inline" initialValues={{ c: '1' }}>
                    <Form.Item>
                      <Checkbox>总览</Checkbox>
                    </Form.Item>
                    <Form.Item name="b">
                      <Input
                        style={{ width: 250 }}
                        addonBefore={
                          <Form.Item name="c" noStyle>
                            <Select
                              options={[
                                {
                                  label: '模块编码',
                                  value: '1',
                                },
                                {
                                  label: '平台系统执照编码',
                                  value: '2',
                                },
                                {
                                  label: '模块英文名称',
                                  value: '3',
                                },
                                {
                                  label: '模块英文类型',
                                  value: '4',
                                },
                                {
                                  label: '模块URL',
                                  value: '5',
                                },
                                {
                                  label: '模块元素中文名称',
                                  value: '6',
                                },
                              ]}
                            ></Select>
                          </Form.Item>
                        }
                        placeholder="请输入关键字"
                      ></Input>
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary">查询</Button>
                    </Form.Item>
                    <Form.Item>
                      <Button>重置</Button>
                    </Form.Item>
                  </Form>
                ),
              }}
              columns={columns}
              dataSource={data}
              rowKey={(v, i) => i}
              rowSelection={{ onChange() {} }}
              scroll={{ x: 1740 }}
            ></Table>
          </Card>
        </Col>
        <Col span={24}>
          <Card title="数据管理">
            <DataManagement />
          </Card>
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '平台系统执照中文名称',
    dataIndex: 'a',
    width: 200,
    ellipsis: true,
  },
  {
    title: '模块中文类型',
    dataIndex: 'b',
    width: 120,
    align: 'center',
    ellipsis: true,
  },
  {
    title: '模块编号',
    dataIndex: 'c',
    width: 120,
    ellipsis: true,
  },
  {
    title: '模块中文名称',
    dataIndex: 'd',
    width: 200,
    ellipsis: true,
  },
  {
    title: '模块英文名称',
    dataIndex: 'e',
    width: 300,
    ellipsis: true,
  },
  {
    title: '模块URI',
    dataIndex: 'h',
    width: 200,
    ellipsis: true,
  },
  {
    title: '创建时间',
    dataIndex: 'n',
    width: 130,
    ellipsis: true,
  },
  {
    title: '修改时间',
    dataIndex: 'o',
    width: 130,
    ellipsis: true,
  },
  {
    title: '启用时间',
    dataIndex: 'p',
    width: 130,
    ellipsis: true,
  },
  {
    title: '失效时间',
    dataIndex: 'q',
    width: 130,
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
                <ModuleModal
                  title="详情"
                  buttonProps={{ text: '详情', type: 'link' }}
                  disabled
                ></ModuleModal>
              </Menu.Item>
              <Menu.Item>
                <ModuleModal
                  title="修改"
                  buttonProps={{ text: '修改', type: 'link' }}
                ></ModuleModal>
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
