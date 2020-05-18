import { PageHeaderWrapper, SearchTree, useConstructTree } from 'lanlinker';
import { Card, Layout, Tabs } from 'antd';

const { TabPane } = Tabs;

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
  console.log('render');
  return (
    <PageHeaderWrapper>
      <Card>
        <Layout>
          <Layout.Sider theme="light" width={300}>
            <Card bodyStyle={{ padding: '0 16px', height: 500 }}>
              <Tabs>
                <TabPane tab="承建工程标签" key="承建工程标签">
                  <SearchTree
                    height={400}
                    treeProps={{
                      treeData,
                      onRightClick(a) {
                        console.log(a);
                        return <Card>123</Card>;
                      },
                    }}
                  ></SearchTree>
                </TabPane>
                <TabPane tab="监管工程标签" key="监管工程标签">
                  <SearchTree height={400}></SearchTree>
                </TabPane>
              </Tabs>
            </Card>
          </Layout.Sider>
          <Layout.Content style={{ marginLeft: 24 }}>
            <Card bodyStyle={{ padding: 0, height: 500 }}>12415</Card>
          </Layout.Content>
        </Layout>
      </Card>
    </PageHeaderWrapper>
  );
};
