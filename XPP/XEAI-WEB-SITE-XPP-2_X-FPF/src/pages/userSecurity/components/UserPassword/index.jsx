/**
 * @module 用户密码管理
 */
import ListWrapper from '../ListWrapper';
import Login from './Login';

export default ({ className, style }) => {
  const layout = { labelCol: { span: 9 }, wrapperCol: { span: 10 } };
  const modalStyle = {
    width: 700,
    bodyStyle: { minHeight: 250, paddingTop: 48 },
  };

  const data = [
    {
      title: '用户登录密码管理',
      actions: [<Login modalStyle={modalStyle} layout={layout} />],
    },
  ];

  return (
    <div className={className} style={style}>
      <h2>用户密码管理</h2>
      <ListWrapper data={data} />
    </div>
  );
};
