/**
 * @module 个人扩展信息
 */
import { Input, Radio, Select, Form, Space } from 'antd';
import {
  NATION,
  EDUCATION,
  MARRIAGE,
  POLITICES,
  BLOOD,
} from './expandedSelect';

export default ({ disabled = true, authorized } = {}) => [
  {
    colSpan: 2,
    component: <h1>附加信息</h1>,
  },
  {
    name: 'userSex',
    label: '用户性别',
    component: (
      <Radio.Group
        disabled={authorized ? true : disabled}
        // style={{ width: '100%' }}
      >
        <Radio value={1}>男</Radio>
        <Radio value={2}>女</Radio>
      </Radio.Group>
    ),
    rules: [{ required: true, message: '请选择用户性别' }],
  },
  {
    name: 'userNation',
    label: '用户民族',
    component: (
      <Select disabled={disabled}>
        {NATION.map(v => (
          <Select.Option value={v} key={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
    ),
  },
  {
    name: 'unifyEducationTypeCode',
    label: '用户学历',
    component: (
      <Select disabled={disabled}>
        {EDUCATION.map(v => (
          <Select.Option value={v} key={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
    ),
  },
  {
    name: 'userNativePlace',
    label: '用户籍贯',
    component: <Input disabled={disabled}></Input>,
  },
  {
    name: 'e',
    label: '婚姻状况',
    component: (
      <Select disabled={disabled}>
        {MARRIAGE.map(v => (
          <Select.Option value={v} key={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
    ),
  },
  {
    name: 'f',
    label: '政治面貌',
    component: (
      <Select disabled={disabled}>
        {POLITICES.map(v => (
          <Select.Option value={v} key={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
    ),
  },
  {
    label: '用户身高',
    component: (
      <Space>
        <Form.Item noStyle name="g">
          <Input disabled={disabled}></Input>
        </Form.Item>
        <span>cm</span>
      </Space>
    ),
  },
  {
    label: '用户体重',
    component: (
      <Space>
        <Form.Item noStyle name="h">
          <Input disabled={disabled}></Input>
        </Form.Item>
        <span>kg</span>
      </Space>
    ),
  },
  {
    name: 'iii',
    label: '用户血型',
    component: (
      <Select disabled={disabled}>
        {BLOOD.map(v => (
          <Select.Option value={v} key={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
    ),
  },
  {
    name: 'jjjj',
    label: '用户特长',
    component: <Input disabled={disabled}></Input>,
  },
  {
    colSpan: 2,
    component: <h1>工作信息</h1>,
  },
  {
    name: 'k',
    label: '工作单位',
    component: <Input disabled={disabled}></Input>,
  },
  {
    name: 'l',
    label: '工作电话',
    component: <Input disabled={disabled}></Input>,
  },
  {
    name: 'm',
    label: '工作手机',
    component: <Input disabled={disabled}></Input>,
  },
  {
    name: 'n',
    label: '工作微信',
    component: <Input disabled={disabled}></Input>,
  },
  {
    name: 'o',
    label: '工作QQ',
    component: <Input disabled={disabled}></Input>,
  },
  {
    name: 'p',
    label: '工作邮箱',
    component: <Input disabled={disabled}></Input>,
  },
  {
    name: 'q',
    label: '用户职业',
    component: <Input disabled={disabled}></Input>,
  },
];
