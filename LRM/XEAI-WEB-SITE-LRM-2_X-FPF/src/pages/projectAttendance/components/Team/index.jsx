/**
 * @module 劳务队伍标签页
 */
import { useState } from 'react';
import { Button, Form, DatePicker, Input, Select } from 'antd';
import { useModel } from 'umi';
import TeamTable from '../Tables/TeamTable';

const { MonthPicker } = DatePicker;

export default () => {
  const [form] = Form.useForm();
  const { orgName } = useModel('projectAttendance', model => ({
    orgName: model.orgName,
  }));
  // 接口
  const dataSource = [
    {
      id: 'a',
      a: '劳务队伍数据',
    },
    {
      id: 'a2',
      a: '214',
    },
  ];

  return (
    <TeamTable
      dataSource={dataSource}
      actions={{
        right: (
          <Form form={form} layout="inline" initialValues={{ a: '1', b: '1' }}>
            <Form.Item label="统计维度" name="b">
              <Select>
                <Select.Option value="1">工时（小时）</Select.Option>
                <Select.Option value="2">工日（天）</Select.Option>
                <Select.Option value="3">劳动力（人数）</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="统计月份">
              <MonthPicker />
            </Form.Item>
            <Form.Item>
              <InputWrapper />
            </Form.Item>
            <Form.Item>
              <Button type="primary">查询</Button>
            </Form.Item>
            <Form.Item>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        ),
      }}
    ></TeamTable>
  );
};

const InputWrapper = () => {
  const holder = {
    '1': '请输入劳务队伍名称',
    '2': '请输入劳务队长姓名',
  };
  const [placeholder, setPlaceHolder] = useState(holder['1']);

  return (
    <Input
      addonBefore={
        <Form.Item noStyle name="a">
          <Select onSelect={e => setPlaceHolder(holder[e])}>
            <Select.Option value="1">劳务队伍名称</Select.Option>
            <Select.Option value="2">劳务队长姓名</Select.Option>
          </Select>
        </Form.Item>
      }
      placeholder={placeholder}
    ></Input>
  );
};
