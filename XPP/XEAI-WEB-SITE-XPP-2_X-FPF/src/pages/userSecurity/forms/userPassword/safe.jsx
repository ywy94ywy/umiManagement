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
    rules: [{ required: true }],
    component: <SafeInput></SafeInput>,
  },
];
