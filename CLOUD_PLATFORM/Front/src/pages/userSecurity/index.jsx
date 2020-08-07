/**
 * @page 用户安全管理
 */
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import UserPassword from './UserPassword';
import UserSecurity from './UserSecurity';

export default () => {
  const formLayout = { labelCol: { span: 9 }, wrapperCol: { span: 10 } };
  const modalStyle = {
    width: 700,
    bodyStyle: { minHeight: 250, paddingTop: 48 },
  };

  return (
    <PageHeaderWrapper>
      <Card bodyStyle={{ paddingLeft: 50, minHeight: 600 }}>
        <UserPassword
          style={{ marginBottom: 30 }}
          formLayout={formLayout}
          modalStyle={modalStyle}
        />
        <UserSecurity formLayout={formLayout} modalStyle={modalStyle} />
      </Card>
    </PageHeaderWrapper>
  );
};
