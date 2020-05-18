import React, { useState } from 'react';
import { PageHeaderWrapper, ButtonModal, SearchTree, Table } from 'lanlinker';
import { Layout, Row, Col, Card, Button, Input } from 'antd';
import styles from './style.less';

const STATE = ['展示', '床位分配', '床位管理'];

export default () => {
  const [state, setState] = useState(STATE[0]);

  return (
    <PageHeaderWrapper className={styles.dormManagement}>
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
          </Card>
        </Layout.Sider>
        <Layout.Content style={{ marginLeft: 24 }}>
          <Card className={styles.content}>
            <Row justify="space-between">
              <div>面包屑</div>
              <div className={styles.actions}>
                {state === STATE[0] && (
                  <>
                    <ButtonModal
                      buttonProps={{ text: '查看已入住人员', type: 'primary' }}
                      width={800}
                      title="已入住人员名单"
                    >
                      <Table
                        actions={{
                          left: (
                            <>
                              <Input placeholder="请输入姓名或身份证号"></Input>
                              <Button type="primary">查询</Button>
                            </>
                          ),
                        }}
                        columns={columns}
                      ></Table>
                    </ButtonModal>
                    <Button type="primary" onClick={() => setState(STATE[1])}>
                      床位分配
                    </Button>
                    <Button type="primary" onClick={() => setState(STATE[2])}>
                      床位管理
                    </Button>
                  </>
                )}
                {state === STATE[1] && (
                  <>
                    <ButtonModal
                      buttonProps={{ text: '新增已入住人员', type: 'primary' }}
                      width={800}
                      title="选择入住人员名单"
                    >
                      <Table
                        actions={{
                          left: <Button type="primary">添加员工</Button>,
                          right: (
                            <>
                              <Input placeholder="请输入姓名或身份证号"></Input>
                              <Button type="primary">查询</Button>
                            </>
                          ),
                        }}
                        columns={columns}
                      ></Table>
                    </ButtonModal>
                    <Button onClick={() => setState(STATE[0])}>分配完成</Button>
                  </>
                )}
                {state === STATE[2] && (
                  <>
                    <Button onClick={() => setState(STATE[0])} type="primary">
                      确定
                    </Button>
                    <Button onClick={() => setState(STATE[0])}>取消</Button>
                  </>
                )}
              </div>
            </Row>
            <Row gutter={48}>
              {new Array(7).fill(1).map((v, i) => (
                <Col key={i}>
                  <Card hoverable bordered className={styles.bed}>
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        border: '1px solid black',
                        margin: '0 auto 5px',
                      }}
                    >
                      暂无图片
                    </div>
                    <div>A栋-01层-105室-01床</div>
                    <div>胡志鹏</div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Layout.Content>
      </Layout>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '姓名',
    dataIndex: 'a',
  },
  {
    title: '身份证号',
    dataIndex: 'b',
  },
  {
    title: '岗位',
    dataIndex: 'c',
  },
  {
    title: '劳务队伍',
    dataIndex: 'd',
  },
  {
    title: '劳务班组',
    dataIndex: 'e',
  },
  {
    title: '宿舍分配状态',
    dataIndex: 'f',
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
