import React from 'react';
import { Tabs as AntdTabs } from 'antd';
import {
  TabsProps as AntdTabsProps,
  TabPaneProps as AntdTabPaneProps,
} from 'antd/es/tabs';
import classNames from 'classnames';
import styles from './style.less';

interface ITabs extends React.FC<AntdTabsProps> {
  TabPane: React.FC<AntdTabPaneProps>;
}

const Tabs: ITabs = ({ className, children, ...rest }) => {
  return (
    <AntdTabs className={classNames(styles.tabsBar, className)} {...rest}>
      {children}
    </AntdTabs>
  );
};

const TabPane: React.FC<AntdTabPaneProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <AntdTabs.TabPane
      className={classNames(styles.tabPane, className)}
      {...rest}
    >
      {children}
    </AntdTabs.TabPane>
  );
};

Tabs.TabPane = TabPane;

export default Tabs;
