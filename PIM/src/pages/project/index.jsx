/**
 * @module 项目信息管理
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card, Layout, Space, Tabs } from 'antd';
import Details from './components/Details';
import { UserOutlined } from '@ant-design/icons';
import GroupTree from './components/GroupTree';

const { TabPane } = Tabs;
const TAB_KEY_LIST = ['contractor', 'supervisor']; // 标签key
const DETAIL_KEY_LIST = ['project', 'engineering']; // 详情页面类别

export default () => {
  const [tab, setTab] = useState(TAB_KEY_LIST[0]);
  const [detailType, setDetailType] = useState({
    type: [],
    node: {},
  });

  return (
    <PageHeaderWrapper>
      <Layout>
        <Layout.Sider theme="light" width={300} style={{ marginRight: 24 }}>
          <Card
            title={
              <Space>
                <UserOutlined />
                组织组别管理
              </Space>
            }
            style={{ height: '100%' }}
            bodyStyle={{ padding: '0 16px', minHeight: 500 }}
          >
            <Tabs activeKey={tab} onChange={key => setTab(key)}>
              <TabPane tab="承建工程标签" key={TAB_KEY_LIST[0]}>
                <GroupTree
                  tabKey={tab}
                  detailKeyList={DETAIL_KEY_LIST}
                  setDetailType={setDetailType}
                />
              </TabPane>
              <TabPane tab="监管工程标签" key={TAB_KEY_LIST[1]}>
                <GroupTree
                  tabKey={tab}
                  detailKeyList={DETAIL_KEY_LIST}
                  setDetailType={setDetailType}
                />
              </TabPane>
            </Tabs>
          </Card>
        </Layout.Sider>
        <Layout.Content>
          <Card
            title={
              <Space>
                <UserOutlined />
                详情信息
              </Space>
            }
            style={{ height: '100%' }}
            bodyStyle={{ padding: '0 24px 24px', minHeight: 500 }}
          >
            <Details
              tabKeyList={TAB_KEY_LIST}
              detailKeyList={DETAIL_KEY_LIST}
              detailType={detailType}
            />
          </Card>
        </Layout.Content>
      </Layout>
    </PageHeaderWrapper>
  );
};
