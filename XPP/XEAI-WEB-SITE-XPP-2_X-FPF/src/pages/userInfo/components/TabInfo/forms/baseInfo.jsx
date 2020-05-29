/**
 * @module 用户基本信息
 */
import { Input, Select } from 'antd';
import { BindInput } from 'lanlinker';

export default ({ disabled, type, authorized } = {}) => [
  {
    name: 'a',
    label: '用户类型',
    component: (
      <Select disabled>
        <Select.Option value="0">个人</Select.Option>
        <Select.Option value="1">企业</Select.Option>
      </Select>
    ),
  },
  {
    component: null,
  },
  {
    name: 'b',
    label: '用户全名',
    component: <Input disabled={authorized ? true : disabled}></Input>,
    rules: [{ required: true }],
  },
  type === 'person' && {
    component: null,
  },
  type === 'company' && {
    name: 'bbbb',
    label: '用户简名',
    component: <Input disabled={disabled}></Input>,
  },
  {
    name: 'c',
    label: '用户数字账号',
    component: <Input disabled></Input>,
  },
  {
    name: 'd',
    label: '用户昵称账号',
    component: <Input disabled={authorized ? true : disabled}></Input>,
  },
  {
    name: 'E',
    label: '用户手机账号',
    component: <BindInput disabled active></BindInput>,
  },
  {
    name: 'F',
    label: '用户邮箱账号',
    component: <BindInput disabled active></BindInput>,
  },
  {
    name: 'G',
    label: '用户证件账号',
    component: (
      <BindInput
        disabled
        activeTitle="已认证"
        inactiveTitle="未认证"
      ></BindInput>
    ),
  },
  {
    name: 'H',
    label: '用户全球编号',
    component: <Input disabled></Input>,
  },
];
