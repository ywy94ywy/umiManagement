/**
 * @module 用户综合信息
 */
import { Input, DatePicker, Form, Select, Space } from 'antd';
import { BindInput } from 'lanlinker';
import User from '../../User';

const { Option } = Select;

export default ({ disabled, type } = {}) => [
  {
    name: 'a',
    label: '用户常用电话',
    component: <Input disabled={disabled}></Input>,
  },
  {
    name: 'aaa',
    component: <User disabled={disabled}></User>,
  },
  {
    name: 'b',
    label: '用户QQ账号',
    component: <BindInput disabled active></BindInput>,
  },
  {
    component: null,
  },
  {
    name: 'c',
    label: '用户微信账号',
    component: <BindInput disabled></BindInput>,
  },
  {
    component: null,
  },
  {
    name: 'Dd',
    label: '用户常用邮编',
    component: <Input disabled={disabled}></Input>,
  },
  {
    component: null,
  },
  {
    name: 'E',
    label: '用户常用地址',
    component: (
      <Input
        disabled={disabled}
        maxLength={64}
        placeholder="最长可输入64个字符"
      ></Input>
    ),
    colSpan: 2,
  },
  {
    name: 'F',
    label: '用户住址地区',
    component: (
      <Space>
        <Select disabled={disabled}>
          <Select.Option></Select.Option>
        </Select>
        <Select disabled={disabled}>
          <Select.Option></Select.Option>
        </Select>
        <Select disabled={disabled}>
          <Select.Option></Select.Option>
        </Select>
        <Select disabled={disabled}>
          <Select.Option></Select.Option>
        </Select>
      </Space>
    ),
    colSpan: 2,
  },
  type === 'person'
    ? {
        name: 'D',
        label: '用户出生日期',
        component: <DatePicker disabled={disabled}></DatePicker>,
      }
    : 1,
  {
    name: 'H',
    label: '用户简介',
    component: (
      <Input
        disabled={disabled}
        maxLength={50}
        placeholder="最长可输入50个字符"
      ></Input>
    ),
    colSpan: 2,
  },
  {
    name: 'Hsd',
    label: '用户描述',
    component: (
      <Input.TextArea
        disabled={disabled}
        maxLength={512}
        placeholder="最长可输入512个字符"
      ></Input.TextArea>
    ),
    colSpan: 2,
  },
  {
    name: 'Hsdf',
    label: '用户备注',
    component: (
      <Input.TextArea
        disabled={disabled}
        maxLength={512}
        placeholder="最长可输入512个字符"
      ></Input.TextArea>
    ),
    colSpan: 2,
  },
  {
    name: 'Hadfgdf',
    label: '用户网址',
    component: (
      <Input
        addonBefore={
          <Form.Item name="prefix" noStyle initial>
            <Select style={{ width: 100 }} disabled={disabled}>
              <Option value="http://">http://</Option>
              <Option value="https://">https://</Option>
            </Select>
          </Form.Item>
        }
        disabled={disabled}
        maxLength={64}
        placeholder="最长可输入64个字符"
      />
    ),
    colSpan: 2,
  },
];
