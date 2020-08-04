/**
 * @page 用户安全管理
 */
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import UserPassword from './components/UserPassword';
import UserSecurity from './components/UserSecurity';

export default () => {
  return (
    <PageHeaderWrapper>
      <Card bodyStyle={{ paddingLeft: 50, minHeight: 600 }}>
        <UserPassword style={{ marginBottom: 30 }} />
        <UserSecurity />
      </Card>
    </PageHeaderWrapper>
  );
};
