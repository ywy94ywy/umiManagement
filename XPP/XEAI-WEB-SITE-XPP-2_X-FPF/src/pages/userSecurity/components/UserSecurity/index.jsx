/**
 * @module 用户密保管理
 */
import ListWrapper from '../ListWrapper';
import SecurityQuestions from './SecurityQuestions';
import Mobile from './Mobile';
import Email from './Email';

export default () => {
  const layout = { labelCol: { span: 9 }, wrapperCol: { span: 10 } };
  const modalStyle = { width: 700, bodyStyle: { minHeight: 300 } };

  const data = [
    {
      title: '用户密保问题管理',
      description: '未设置密保问题，密保问题可有效保护帐户安全', //todo 动态
      actions: [<SecurityQuestions modalStyle={modalStyle} layout={layout} />],
    },
    {
      title: '用户密保手机管理',
      description: '已绑定手机：138****8293', //todo 动态
      actions: [<Mobile modalStyle={modalStyle} layout={layout} />],
    },
    {
      title: '用户密保邮箱管理',
      description: '未绑定邮箱', //todo 动态
      actions: [<Email modalStyle={modalStyle} layout={layout} />],
    },
  ];

  return <ListWrapper data={data} />;
};
