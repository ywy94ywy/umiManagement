import { PageHeaderWrapper, SearchTree } from 'lanlinker';
import { Card, Layout, Form, Select, Row, Checkbox, Tabs } from 'antd';

export default () => {
  return (
    <PageHeaderWrapper>
      <Card>
        <Layout>
          <Layout.Content>
            <h3>监控设备状态</h3>
            <Row>
              <Form.Item label="设备编号">
                <Select></Select>
              </Form.Item>
              <Form.Item label="设置设备状态">正常使用已开启</Form.Item>
            </Row>

            <h3>实时监控画面</h3>
          </Layout.Content>
          <Layout.Sider theme="light" style={{ marginLeft: 24 }} width={280}>
            <h3>监控选择</h3>
            <Row>
              <Select></Select>
            </Row>
            <Row>
              <Checkbox>已开启</Checkbox>
              <Checkbox>未开启</Checkbox>
            </Row>
            <Tabs>
              <Tabs.TabPane tab="承建项目标签" key="承建项目标签">
                <SearchTree
                  height={340}
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
              </Tabs.TabPane>
              <Tabs.TabPane tab="监管项目标签" key="监管项目标签">
                <SearchTree
                  height={340}
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
              </Tabs.TabPane>
            </Tabs>
            <h3>云台控制</h3>
          </Layout.Sider>
        </Layout>
      </Card>
    </PageHeaderWrapper>
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
