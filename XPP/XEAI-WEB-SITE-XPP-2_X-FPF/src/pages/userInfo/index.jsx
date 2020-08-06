/**
 * @page 用户信息管理
 * @todo 头像
 */
import { PageHeaderWrapper } from 'lanlinker';
import { Tabs, Card } from 'antd';
import { getBreifUserInfo } from '@/utils';
import PersonRegister from './person/Register';
import PersonExpanded from './person/Expanded';
import CompanyRegister from './company/Register';
import CompanyExpanded from './company/Expanded';

const { TabPane } = Tabs;

const layout = { labelCol: { flex: '0 0 130px' } };

export default () => {
  const { userType } = getBreifUserInfo();

  return (
    <PageHeaderWrapper>
      <Card bodyStyle={{ paddingTop: 0, minHeight: 600 }}>
        <Tabs size="large">
          {userType === '1' && (
            <>
              <TabPane tab="注册信息" key="1">
                <PersonRegister layout={layout} />
              </TabPane>
              <TabPane tab="扩展信息" key="2">
                <PersonExpanded layout={layout} />
              </TabPane>
            </>
          )}
          {userType === '2' && (
            <>
              <TabPane tab="注册信息" key="3">
                <CompanyRegister layout={layout} />
              </TabPane>
              <TabPane tab="扩展信息" key="4">
                <CompanyExpanded layout={layout} />
              </TabPane>
            </>
          )}
        </Tabs>
      </Card>
    </PageHeaderWrapper>
  );
};
