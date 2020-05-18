/**
 * @module 用户信息管理
 * @author DesYang
 * @todo 可编辑表格，级联菜单,图片真实旋转
 */
import React from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Tabs } from 'antd';
import { BasicInfo, GeneralInfo, PersonExpanded, CompanyExpanded } from './components/TabInfo';
import EditTable from './components/EditTable';
import styles from './style.less';
import Cookies from 'js-cookie';
const { TabPane } = Tabs;

export default () => {
  const type = Cookies.get('type');

  return (
    <PageHeaderWrapper className={styles.userInfo}>
      <Tabs size="large" tabBarStyle={{ padding: '0 20px' }} className={styles.userTab}>
        <TabPane tab="用户基本信息" key="1">
          <BasicInfo type={type}></BasicInfo>
        </TabPane>
        <TabPane tab="用户综合信息" key="2">
          <GeneralInfo type={type}></GeneralInfo>
        </TabPane>
        {type === 'person' && (
          <TabPane tab="个人扩展信息" key="3">
            <PersonExpanded></PersonExpanded>
          </TabPane>
        )}
        {type === 'company' && (
          <TabPane tab="企业扩展信息" key="3">
            <CompanyExpanded></CompanyExpanded>
          </TabPane>
        )}
        <TabPane tab="用户联系人信息" key="4">
          <EditTable></EditTable>
        </TabPane>
      </Tabs>
    </PageHeaderWrapper>
  );
};
