/**
 * @module 待进场员工信息-树
 */
import { Tabs } from 'antd';
import CompanyTree from './CompanyTree';
import CooperationTree from './CooperationTree';

export default () => {
  return (
    <Tabs>
      <Tabs.TabPane tab="公司成员" key="公司成员">
        <CompanyTree />
      </Tabs.TabPane>
      <Tabs.TabPane tab="合作成员" key="合作成员">
        <CooperationTree />
      </Tabs.TabPane>
    </Tabs>
  );
};
