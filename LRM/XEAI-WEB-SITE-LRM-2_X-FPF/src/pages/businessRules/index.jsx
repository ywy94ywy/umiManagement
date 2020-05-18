import { PageHeaderWrapper, SearchTree, Table, ButtonModal } from 'lanlinker';
import { Card, Layout, Switch } from 'antd';

export default () => {
  return (
    <PageHeaderWrapper>
      <Card>
        <Layout>
          <Layout.Sider theme="light" width={250}>
            <Card bodyStyle={{ padding: 12 }}>
              <SearchTree
                height={640}
                treeProps={{
                  treeRawData: treeData,
                  reName: {
                    titleName: 'a',
                    keyName: 'id',
                    iconName: 'c',
                    pIdName: 'pId',
                  },
                }}
              ></SearchTree>
            </Card>
          </Layout.Sider>
          <Layout.Content style={{ marginLeft: 24 }}>
            <Table
              columns={columns}
              dataSource={data}
              rowKey={(r, i) => i}
              scroll={{ x: 1500 }}
            ></Table>
          </Layout.Content>
        </Layout>
      </Card>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '规则编码',
    dataIndex: 'a',
    width: 100,
    fixed: 'left',
  },
  {
    title: '规则名称',
    dataIndex: 'b',
    width: 150,
    fixed: 'left',
  },
  {
    title: '规则内容',
    dataIndex: 'c',
  },
  {
    title: '设定值',
    dataIndex: 'd',
  },
  {
    title: '规则单位',
    dataIndex: 'dd',
  },
  {
    title: '规则使用人员',
    dataIndex: 'ddd',
  },
  {
    title: '规则禁止下级修改',
    dataIndex: 'asgf',
  },
  {
    title: '备注',
    dataIndex: 'sdfh',
  },
  {
    title: '操作',
    width: 100,
    render() {
      return (
        <ButtonModal buttonProps={{ text: '修改', type: 'link' }}>
          修改
        </ButtonModal>
      );
    },
    fixed: 'right',
  },
  {
    title: '启用规则',
    fixed: 'right',
    width: 100,
    render(r) {
      return (
        <Switch
          defaultChecked={r.f}
          checkedChildren="开"
          unCheckedChildren="关"
        ></Switch>
      );
    },
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

const data = [
  {
    a: 1,
    b: 2,
    f: true,
  },
  {
    a: 1,
    b: 2,
    f: false,
  },
];
