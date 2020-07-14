import { Input, Select } from 'antd';
import { SafeInput } from 'lanlinker';

export const questionForm0 = [
  {
    label: '安全密码',
    name: 'userSafePassword',
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
        {/* {questions.map()} */}
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

const questions = [
  {
    key: 1,
    value: '您母亲的生日是?(YYYYMMDD)',
  },
  {
    key: 2,
    value: '您父亲的生日是?(YYYYMMDD)',
  },
  {
    key: 3,
    value: '您配偶的生日是?(YYYYMMDD)',
  },
  {
    key: 4,
    value: '您母亲的姓名是?',
  },
  {
    key: 5,
    value: '您父亲的姓名是?',
  },
  {
    key: 6,
    value: '您配偶的姓名是?',
  },
  {
    key: 7,
    value: '您的学号是?',
  },
  {
    key: 8,
    value: '您的工号是?',
  },
  {
    key: 9,
    value: '您小学班主任的名字是?',
  },
  {
    key: 10,
    value: '您初中班主任的名字是?',
  },
  {
    key: 11,
    value: '您高中班主任的名字是?',
  },
  {
    key: 12,
    value: '您大学班主任的名字是?',
  },
  {
    key: 13,
    value: '您最熟悉的童年好友的名字是?',
  },
  {
    key: 14,
    value: '您最熟悉的学校舍友姓名是?',
  },
  {
    key: 15,
    value: '对您一生影响最大的人姓名是?',
  },
];
