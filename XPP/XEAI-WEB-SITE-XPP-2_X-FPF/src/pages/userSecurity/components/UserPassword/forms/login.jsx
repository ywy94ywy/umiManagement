import { Input } from 'antd';

export default [
  {
    label: '原登录密码',
    name: 'sourceUserLoginPassword',
    rules: [{ required: true }],
    component: <Input placeholder="请输入原登录密码" />,
  },
  {
    label: '新登录密码',
    name: 'targetUserLoginPassword',
    rules: [{ required: true }],
    component: <Input placeholder="请输入新登录密码" />,
  },
  {
    label: '新登录密码确认',
    dependencies: ['targetUserLoginPassword'],
    name: 'targetUserLoginPasswordConfirm',
    rules: [
      { required: true },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('targetUserLoginPassword') === value) {
            return Promise.resolve();
          }
          return Promise.reject('两次输入的密码不一致！');
        },
      }),
    ],
    component: <Input placeholder="请重新输入新登录密码" />,
  },
];
