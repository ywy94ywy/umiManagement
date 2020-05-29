import { Input, Select } from 'antd';
import { SafeInput } from 'lanlinker';

export const questionForm0 = [
  {
    label: '安全密码',
    name: 'a',
    rules: [
      {
        required: true,
      },
    ],
    component: <SafeInput></SafeInput>,
  },
];

export const questionForm1 = [
  {
    label: '密保问题01',
    name: 'a',
    rules: [
      {
        required: true,
      },
    ],
    component: (
      <Select>
        <Select.Option value="1">您母亲的生日是？</Select.Option>
      </Select>
    ),
  },
  {
    label: '密保答案01',
    name: 'b',
    rules: [
      {
        required: true,
      },
    ],
    component: <Input placeholder="请输入密保答案"></Input>,
  },
  {
    label: '密保问题02',
    name: 'c',
    rules: [
      {
        required: true,
      },
    ],
    component: (
      <Select>
        <Select.Option value="1">您父亲的生日是？</Select.Option>
      </Select>
    ),
  },
  {
    label: '密保答案02',
    name: 'd',
    rules: [
      {
        required: true,
      },
    ],
    component: <Input placeholder="请输入密保答案"></Input>,
  },
  {
    label: '密保问题03',
    name: 'e',
    rules: [
      {
        required: true,
      },
    ],
    component: (
      <Select>
        <Select.Option value="1">您配偶的生日是？</Select.Option>
      </Select>
    ),
  },
  {
    label: '密保答案03',
    name: 'f',
    rules: [
      {
        required: true,
      },
    ],
    component: <Input placeholder="请输入密保答案"></Input>,
  },
];

export const questionForm2 = [
  {
    label: '密保问题01',
    component: <span>您母亲的生日是？</span>,
  },
  {
    label: '密保答案01',
    name: 'a',
    rules: [
      {
        required: true,
      },
    ],
    component: <Input placeholder="请输入密保答案"></Input>,
  },
  {
    label: '密保问题02',
    component: <span>您父亲的生日是？</span>,
  },
  {
    label: '密保答案02',
    name: 'b',
    rules: [
      {
        required: true,
      },
    ],
    component: <Input placeholder="请输入密保答案"></Input>,
  },
  {
    label: '密保问题03',
    component: <span>您配偶的生日是？</span>,
  },
  {
    label: '密保答案03',
    name: 'c',
    rules: [
      {
        required: true,
      },
    ],
    component: <Input placeholder="请输入密保答案"></Input>,
  },
];
