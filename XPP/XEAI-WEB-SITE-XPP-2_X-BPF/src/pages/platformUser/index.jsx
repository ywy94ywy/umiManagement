/**
 * @module 平台管理-用户执照管理
 */
import { PageHeaderWrapper, SearchTree, Table, ButtonModal, useConstructTree } from 'lanlinker';
import { Button, Input, Row, Col, Card } from 'antd';
import DataManagement from '@/components/DataManagement';

export default () => {
  const [treeData] = useConstructTree(treeRawData, {
    title: 'a',
    key: 'id',
    icon: 'c',
    pId: 'pId',
  });

  const columns = [
    {
      title: '流水编码',
      dataIndex: 'a',
      ellipsis: true,
      width: 170,
    },
    {
      title: '用户名称',
      dataIndex: 'b',
      ellipsis: true,
      width: 90,
    },
    {
      title: '申请时间',
      dataIndex: 'c',
      ellipsis: true,
      width: 120,
    },
    {
      title: '身份证号码',
      dataIndex: 'd',
      ellipsis: true,
      width: 120,
    },
    {
      title: '是否验证身份',
      dataIndex: 'e',
      ellipsis: true,
      width: 120,
    },
    {
      title: '操作',
      align: 'center',
      width: 120,
      render() {
        return (
          <>
            <ButtonModal buttonProps={{ text: '通过', type: 'link', size: 'small' }}>
              lll
            </ButtonModal>
            <ButtonModal buttonProps={{ text: '拒绝', type: 'link', size: 'small' }}>
              lll
            </ButtonModal>
          </>
        );
      },
    },
  ];

  return (
    <PageHeaderWrapper>
      <Row gutter={[24, 24]}>
        <Col flex="0 0 290px" style={{ overflow: 'hidden' }}>
          <Card title="租户执照">
            <SearchTree
              height={618}
              treeProps={{
                treeData,
              }}
            ></SearchTree>
          </Card>
        </Col>
        <Col flex="1">
          <Card title="用户执照列表">
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
              rowKey="b"
              dataSource={data}
            ></Table>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
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
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
};

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
