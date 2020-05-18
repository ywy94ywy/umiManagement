/**
 * @module 用户银行信息
 */
import { Input } from 'antd';

export default () => {
  return [
    {
      label: '用户全名',
      component: <Input></Input>,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      hold: true,
    },
    {
      label: '用户数字账号',
      component: <Input></Input>,
    },
    {
      label: '用户昵称账号',
      component: <Input></Input>,
    },
    {
      label: '用户手机账号',
      component: <Input></Input>,
    },
    {
      label: '用户邮箱账号',
      component: <Input></Input>,
    },
    {
      label: '用户证件账号',
      component: <Input addonBefore="Http://"></Input>,
    },
    {
      label: '用户全球编号',
      component: <Input></Input>,
    },
    {
      label: '用户账号创建时间',
      component: <Input></Input>,
    },
    {
      label: '用户账号修改时间',
      component: <Input></Input>,
    },
    {
      label: '用户手机绑定时间',
      component: <Input></Input>,
    },
    {
      label: '用户邮箱绑定时间',
      component: <Input></Input>,
    },
    {
      label: '用户证件绑定时间',
      component: <Input></Input>,
    },
    {
      hold: true,
    },
    {
      label: '记录校验码',
      component: <Input></Input>,
    },
    {
      hold: true,
    },
  ];
};
