import { Input } from 'antd';

export default [
  {
    label: '原登录密码',
    name: 'a',
    rules: [{ required: true }],
    component: <Input placeholder="请输入原登录密码"></Input>,
  },
  {
    label: '新登录密码',
    name: 'b',
    rules: [{ required: true }],
    component: <Input placeholder="请输入新登录密码"></Input>,
  },
  {
    label: '新登录密码确认',
    dependencies: ['b'],
    validateTrigger: 'onBlur',
    name: 'c',
    rules: [
      { required: true },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue('b') === value) {
            return Promise.resolve();
          }
          return Promise.reject('两次输入的密码不一致！');
        },
      }),
    ],
    component: <Input placeholder="请重新输入新登录密码"></Input>,
  },
];
