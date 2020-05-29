import { SafeInput } from 'lanlinker';

export default [
  {
    name: 'a',
    label: '新安全密码',
    rules: [{ required: true }],
    component: <SafeInput></SafeInput>,
  },
  {
    name: 'b',
    label: '新安全密码确认',
    validateTrigger: 'onBlur',
    rules: [
      { required: true },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue('a').join('') === value.join('')) {
            return Promise.resolve();
          }
          return Promise.reject('两次输入的密码不一致！');
        },
      }),
    ],
    component: <SafeInput></SafeInput>,
  },
];
