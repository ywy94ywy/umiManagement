/**
 * @module 用户密码管理
 */
import ListWrapper from '../ListWrapper';
import Login from './Login';
import { SecurityUpdate, SecurityReset } from './Security';

const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱</span>,
};

export default () => {
  const layout = { labelCol: { span: 9 }, wrapperCol: { span: 10 } };
  const modalStyle = {
    width: 700,
    bodyStyle: { minHeight: 300, paddingTop: 48 },
  };

  const data = [
    {
      title: '用户登录密码管理',
      description: <>当前密码强度：{passwordStrength.strong}</>, //todo 动态
      actions: [<Login modalStyle={modalStyle} layout={layout} />],
    },
    {
      title: '用户安全密码管理',
      description: '安全密码限定6位字符',
      actions: [
        <SecurityUpdate modalStyle={modalStyle} layout={layout} />,
        <SecurityReset modalStyle={modalStyle} layout={layout} />,
      ],
    },
  ];

  return <ListWrapper data={data} />;
};
