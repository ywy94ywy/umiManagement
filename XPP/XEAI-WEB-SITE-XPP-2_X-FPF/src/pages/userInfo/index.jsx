/**
 * @page 用户信息管理
 */
import { PageHeaderWrapper } from 'lanlinker';
import { Tabs, Card } from 'antd';

import PersonRegister from './person/Register';
import PersonExpanded from './person/Expanded';
import CompanyRegister from './company/Register';
import CompanyExpanded from './company/Expanded';
import Cookies from 'js-cookie';

const { TabPane } = Tabs;

const layout = { labelCol: { flex: '0 0 130px' } };

export default () => {
  const { userType } = JSON.parse(Cookies.get('u_inf') || {});

  const authorized = false; // todo 认证状态

  return (
    <PageHeaderWrapper>
      <Card bodyStyle={{ paddingTop: 0, minHeight: 600 }}>
        <Tabs size="large">
          {/* <TabPane tab="注册信息" key="1">
            <PersonRegister layout={layout} />
          </TabPane>
          <TabPane tab="扩展信息" key="2">
            <PersonExpanded layout={layout} />
          </TabPane> */}
          <TabPane tab="注册信息" key="3">
            <CompanyRegister layout={layout} />
          </TabPane>
          <TabPane tab="扩展信息" key="4">
            <CompanyExpanded layout={layout} />
          </TabPane>
        </Tabs>
      </Card>
    </PageHeaderWrapper>
  );
};
