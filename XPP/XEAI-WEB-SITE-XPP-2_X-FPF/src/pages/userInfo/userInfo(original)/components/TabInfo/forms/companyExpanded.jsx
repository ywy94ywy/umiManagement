/**
 * @module 企业扩展信息
 */
import { Input, Select, Space, Form } from 'antd';
import { INDUSTRY } from './expandedSelect';

export default ({ disabled = true } = {}) => {
  return [
    {
      name: 'c',
      label: '单位行业',
      component: (
        <Select disabled={disabled}>
          {INDUSTRY.map(v => (
            <Select.Option value={v} key={v}>
              {v}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      name: 'd',
      label: '单位规模',
      component: (
        <Space>
          <Form.Item noStyle name="h">
            <Input disabled={disabled}></Input>
          </Form.Item>
          <span>人</span>
        </Space>
      ),
    },
    {
      name: 'a',
      label: '负责人姓名',
      component: <Input disabled={disabled}></Input>,
    },
    {
      name: 'b',
      label: '负责人职级',
      component: <Input disabled={disabled}></Input>,
    },
    {
      name: 'e',
      label: '负责人手机',
      component: <Input disabled={disabled}></Input>,
    },
    {
      name: 'f',
      label: '负责人电话',
      component: <Input disabled={disabled}></Input>,
    },
    {
      name: 'g',
      label: '负责人微信',
      component: <Input disabled={disabled}></Input>,
    },
    {
      name: 'h',
      label: '负责人邮箱',
      component: <Input disabled={disabled}></Input>,
    },
  ];
};
