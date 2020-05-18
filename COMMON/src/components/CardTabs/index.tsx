import React from 'react';
import { Card, Tabs } from 'antd';
import { TabsProps, TabPaneProps } from 'antd/es/Tabs';
import styles from './style.less';

export interface ICardTabs extends React.FC<TabsProps> {
  TabPane: React.ClassicComponentClass<TabPaneProps>;
}

const CardTabs: ICardTabs = ({ children, ...props }) => {
  return (
    <Card bodyStyle={{ padding: 0 }} className={styles.cardTabs}>
      <Tabs size="large" {...props}>
        {children}
      </Tabs>
    </Card>
  );
};

CardTabs.TabPane = Tabs.TabPane;
export default CardTabs;
