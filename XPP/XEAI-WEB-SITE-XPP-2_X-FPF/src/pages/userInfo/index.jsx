/**
 * @module 用户信息管理
 * @todo 可编辑表格，级联菜单,图片真实旋转
 */
import { PageHeaderWrapper } from 'lanlinker';
import { Tabs, Card } from 'antd';
import {
  BasicInfo,
  GeneralInfo,
  PersonExpanded,
  CompanyExpanded,
} from './components/TabInfo';
import EditTable from './components/EditTable';
import Cookies from 'js-cookie';

const { TabPane } = Tabs;

export default () => {
  const { userType } = JSON.parse(Cookies.get('u_inf') || {});

  const authorized = false; // todo 认证状态

  return (
    <PageHeaderWrapper>
      <Card bodyStyle={{ padding: '0 24px', minHeight: 670 }}>
        <Tabs size="large">
          <TabPane tab="用户基本信息" key="1">
            <BasicInfo userType={userType} authorized={authorized}></BasicInfo>
          </TabPane>
          <TabPane tab="用户综合信息" key="2">
            <GeneralInfo userType={userType}></GeneralInfo>
          </TabPane>
          {userType === 'PERSONAL' && (
            <TabPane tab="个人扩展信息" key="3">
              <PersonExpanded authorized={authorized}></PersonExpanded>
            </TabPane>
          )}
          {userType === 'UNIT' && (
            <TabPane tab="企业扩展信息" key="3">
              <CompanyExpanded></CompanyExpanded>
            </TabPane>
          )}
          <TabPane tab="用户联系人信息" key="4">
            <EditTable userType={userType}></EditTable>
          </TabPane>
        </Tabs>
      </Card>
    </PageHeaderWrapper>
  );
};
