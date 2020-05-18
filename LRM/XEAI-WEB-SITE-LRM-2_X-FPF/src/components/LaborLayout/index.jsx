import React from 'react';
import { Layout } from 'antd';

const LaborLayout = ({ content, sider }) => {
  return (
    <Layout>
      <Layout.Content>{content}</Layout.Content>
      <Layout.Sider width={340} style={{ marginLeft: 24 }} theme="light">
        {sider}
      </Layout.Sider>
    </Layout>
  );
};

export default LaborLayout;
