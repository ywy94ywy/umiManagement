import { Input } from 'antd';
import CountDownInput from '@/components/CountDownInput';

export default [
  {
    label: '手机账号',
    name: 'a',
    rules: [{ required: true }],
    component: <Input placeholder="请输入手机账号"></Input>,
  },
  {
    label: '短信验证码',
    name: 'b',
    rules: [{ required: true }],
    component: <CountDownInput></CountDownInput>,
  },
];
