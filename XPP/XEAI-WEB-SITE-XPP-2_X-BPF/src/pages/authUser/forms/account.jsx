import { Input, Select } from 'antd';

export default () => {
  return [
    {
      label: '用户数字账号',
      component: <Input></Input>,
    },
    {
      label: '用户昵称账号',
      component: <Input></Input>,
    },
    {
      label: '用户邮箱账号',
      component: <Input></Input>,
    },
    {
      label: '用户手机账号',
      component: <Input></Input>,
    },
    {
      label: '用户证件账号',
      component: <Input></Input>,
    },
    {
      label: '用户全球编号',
      component: <Input></Input>,
    },
    {
      label: '用户账号类型',
      component: <Select></Select>,
    },
  ];
};
