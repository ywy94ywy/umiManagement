import { SafeInput } from 'lanlinker';

export default [
  {
    label: '原安全密码',
    name: 'userSafePasswordSource',
    rules: [{ required: true }],
    component: <SafeInput />,
  },
  {
    label: '新安全密码',
    name: 'userSafePasswordTarget',
    rules: [{ required: true }],
    component: <SafeInput />,
  },
  {
    label: '新安全密码确认',
    name: 'userSafePasswordTargetConfirm',
    dependencies: ['userSafePasswordTarget'],
    rules: [
      { required: true },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('userSafePasswordTarget') === value) {
            return Promise.resolve();
          }
          return Promise.reject('两次输入的密码不一致！');
        },
      }),
    ],
    component: <SafeInput />,
  },
];
