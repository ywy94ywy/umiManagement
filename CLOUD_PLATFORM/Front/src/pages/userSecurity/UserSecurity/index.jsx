/**
 * @module 用户密保管理
 */
import ListWrapper from '../components/ListWrapper';
import Mobile from './Mobile';
import Email from './Email';
import { useModel } from 'umi';

export default ({ className, style, formLayout, modalStyle }) => {
  const { userInfo } = useModel('userInfo');

  let mobile = userInfo.mobile;
  let email = userInfo.email;
  // 手机号码脱敏
  if (mobile) {
    mobile = mobile.replace(/^(\d{3})(\d{4})(\d{4})$/, (_, a, b, c) => {
      return a + b.replace(/./g, '*') + c;
    });
  }

  const data = [
    {
      title: '用户密保手机管理',
      description: mobile ? '已绑定手机：' + mobile : '未绑定手机',
      actions: [<Mobile modalStyle={modalStyle} formLayout={formLayout} />],
    },
    {
      title: '用户密保邮箱管理',
      description: email ? '已绑定邮箱：' + email : '未绑定邮箱',
      actions: [<Email modalStyle={modalStyle} formLayout={formLayout} />],
    },
  ];

  return (
    <div className={className} style={style}>
      <h2>用户密保管理</h2>
      <ListWrapper data={data} />
    </div>
  );
};
