/**
 * @module 工程位置管理
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card, Layout, Space } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import Management from './components/Management';
import PositionList from './components/PositionList';

export default () => {
  const [currentNode, setCurrentNode] = useState(null);

  return (
    <PageHeaderWrapper>
      <Layout>
        <Layout.Sider theme="light" width={300} style={{ marginRight: 24 }}>
          <Card
            title={
              <Space>
                {/* <UserOutlined /> */}
                组织组别管理
              </Space>
            }
            style={{ height: '100%' }}
            bodyStyle={{ minHeight: 500 }}
          >
            <Management setCurrentNode={setCurrentNode} />
          </Card>
        </Layout.Sider>
        <Layout.Content>
          <Card
            title={
              <Space>
                {/* <UserOutlined /> */}
                工程位置列表
              </Space>
            }
            style={{ height: '100%' }}
            bodyStyle={{ minHeight: 500 }}
          >
            {currentNode && <PositionList currentNode={currentNode} />}
          </Card>
        </Layout.Content>
      </Layout>
    </PageHeaderWrapper>
  );
};
