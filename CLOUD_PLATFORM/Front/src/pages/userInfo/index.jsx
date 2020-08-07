/**
 * @page 用户信息管理
 * @todo 头像
 */
import { PageHeaderWrapper } from 'lanlinker';
import { Tabs, Card } from 'antd';
import { useModel } from 'umi';
import { USER_TYPE } from '@/config/enum';
import PersonRegister from './person/Register';
import PersonExpanded from './person/Expanded';
import CompanyRegister from './company/Register';
import CompanyExpanded from './company/Expanded';

const { TabPane } = Tabs;

const layout = { labelCol: { flex: '0 0 140px' } };

export default () => {
  const { userInfo } = useModel('userInfo');

  return (
    <PageHeaderWrapper>
      <Card bodyStyle={{ paddingTop: 0, minHeight: 600 }}>
        <Tabs size="large">
          {userInfo.type === USER_TYPE.PERSON.KEY && (
            <>
              <TabPane tab="注册信息" key="1">
                <PersonRegister layout={layout} />
              </TabPane>
              <TabPane tab="扩展信息" key="2">
                <PersonExpanded layout={layout} />
              </TabPane>
            </>
          )}
          {userInfo.type === USER_TYPE.COMPANY.KEY && (
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
