/**
 * @module 用户安全信息
 */
import { Input, Select } from 'antd';
import { SafeInput } from 'lanlinker';

export default () => {
  return [
    {
      label: '用户登录密码',
      component: <Input></Input>,
      rules: [{ required: true }],
    },
    {
      label: '用户安全密码',
      component: <SafeInput></SafeInput>,
      rules: [{ required: true }],
    },
    {
      label: '用户密保问题01',
      component: <Select></Select>,
    },
    {
      label: '用户密保答案01',
      component: <Input></Input>,
    },
    {
      label: '用户密保问题02',
      component: <Select></Select>,
    },
    {
      label: '用户密保答案02',
      component: <Input></Input>,
    },
    {
      label: '用户密保问题03',
      component: <Select></Select>,
    },
    {
      label: '用户密保答案03',
      component: <Input></Input>,
    },
  ];
};
