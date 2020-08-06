/**
 * @module 用户密保管理
 */
import { useEffect } from 'react';
import ListWrapper from '../ListWrapper';
import Mobile from './Mobile';
import Email from './Email';
import { useModel } from 'umi';

export default ({ className, style }) => {
  const { userInfo, fetchUserRequest } = useModel('userInfo');

  useEffect(() => {
    if (!userInfo) {
      fetchUserRequest.run();
    }
  }, []);

  let mobile = userInfo.mobile;
  let email = userInfo.email;
  if (mobile) {
    mobile = mobile.replace(/^(\d{3})(\d{4})(\d{4})$/, (_, a, b, c) => {
      return a + b.replace(/./g, '*') + c;
    });
  }

  const layout = { labelCol: { span: 9 }, wrapperCol: { span: 10 } };
  const modalStyle = {
    width: 700,
    bodyStyle: { minHeight: 250, paddingTop: 48 },
  };

  const data = [
    {
      title: '用户密保手机管理',
      description: mobile ? '已绑定手机：' + mobile : '未绑定手机',
      actions: [<Mobile modalStyle={modalStyle} layout={layout} />],
    },
    {
      title: '用户密保邮箱管理',
      description: email ? '已绑定邮箱：' + email : '未绑定邮箱',
      actions: [<Email modalStyle={modalStyle} layout={layout} />],
    },
  ];

  return (
    <div className={className} style={style}>
      <h2>用户密保管理</h2>
      <ListWrapper data={data} />
    </div>
  );
};
