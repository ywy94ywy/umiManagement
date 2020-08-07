/**
 * @module 用户密码管理
 */
import ListWrapper from '../components/ListWrapper';
import Login from './Login';

export default ({ className, style, formLayout, modalStyle }) => {
  const data = [
    {
      title: '用户登录密码管理',
      actions: [<Login modalStyle={modalStyle} formLayout={formLayout} />],
    },
  ];

  return (
    <div className={className} style={style}>
      <h2>用户密码管理</h2>
      <ListWrapper data={data} />
    </div>
  );
};
