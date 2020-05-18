import { Input, DatePicker } from 'antd';
export default () => {
  return [
    {
      label: '用户QQ账号',
      component: <Input></Input>,
    },
    {
      label: 'QQ绑定日期',
      component: <DatePicker></DatePicker>,
    },
    {
      label: '用户微信账号',
      component: <Input></Input>,
    },
    {
      label: '微信绑定日期',
      component: <DatePicker></DatePicker>,
    },
    {
      label: '用户新浪账号',
      component: <Input></Input>,
    },
    {
      label: '新浪绑定日期',
      component: <DatePicker></DatePicker>,
    },
  ];
};
