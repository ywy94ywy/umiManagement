import React from 'react';
import { Tabs, Layout } from 'antd';
import { Card, CardProps } from '../../Card';
import { TabsProps } from 'antd/es/tabs';
import styles from './style.less';

export interface LanLayoutProps {
  sider?: React.ReactNode;
  siderWidth?: number;
  siderCardProps?: CardProps;
  contentCardProps?: CardProps;
  tabList?: string[];
  tabProps?: TabsProps;
  tabPaneProps?: any;
  siderList?: React.ReactNode[];
  content?: React.ReactNode;
}

const LanLayout: React.FC<LanLayoutProps> = ({
  siderWidth = 320,
  siderCardProps: {
    style: siderStyle,
    bodyStyle: siderBodyStyle,
    ...siderCardRestProps
  } = {},
  contentCardProps: { style: contentStyle, ...contentCardRestProps } = {},
  sider,
  tabList, // feiqi
  tabProps, // feiqi
  tabPaneProps: { style: paneStyle, ...tabPaneRestProps } = {}, // feiqi
  siderList = [], // feiqi
  content,
}) => {
  return (
    <Layout>
      <Layout.Sider theme="light" width={siderWidth}>
        <Card
          bodyStyle={siderBodyStyle || { padding: tabList ? 0 : 12 }}
          style={{ height: '100%', ...siderStyle }}
          {...siderCardRestProps}
        >
          {tabList ? (
            <Tabs tabBarGutter={12} className={styles.leftTabs} {...tabProps}>
              {tabList.map((v, i) => (
                <Tabs.TabPane
                  tab={v}
                  key={v}
                  style={{ padding: '0 10px 15px', ...paneStyle }}
                  {...tabPaneRestProps}
                >
                  {siderList[i]}
                </Tabs.TabPane>
              ))}
            </Tabs>
          ) : (
            <div>{siderList[0]}</div>
          )}
          {sider}
        </Card>
      </Layout.Sider>
      <Layout.Content>
        <Card
          marginLeft
          style={{ height: '100%', ...siderStyle }}
          {...contentCardRestProps}
        >
          {content}
        </Card>
      </Layout.Content>
    </Layout>
  );
};

export default LanLayout;
