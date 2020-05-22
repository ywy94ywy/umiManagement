import { SafeInput } from 'lanlinker';

export default [
  {
    label: '原安全密码',
    name: 'a',
    rules: [{ required: true }],
    component: <SafeInput></SafeInput>,
  },
  {
    label: '新安全密码',
    name: 'b',
    rules: [{ required: true }],
    component: <SafeInput></SafeInput>,
  },
  {
    label: '新安全密码确认',
    name: 'c',
    validateTrigger: 'onBlur',
    rules: [
      { required: true },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue('b').join('') === value.join('')) {
            return Promise.resolve();
          }
          return Promise.reject('两次输入的密码不一致！');
        },
      }),
    ],
    component: <SafeInput></SafeInput>,
  },
];
