/**
 * @module 劳务班组标签页
 */
import { useState } from 'react';
import { Button, Form, DatePicker, Input, Select } from 'antd';
import GroupTable from '../Tables/GroupTable';

const { RangePicker } = DatePicker;

export default ({ setModalInfo }) => {
  // 接口
  const dataSource = [
    {
      id: 'a',
      a: '劳务班组数据',
    },
    {
      id: 'a2',
      a: '214',
    },
  ];

  return (
    <GroupTable
      dataSource={dataSource}
      setModalInfo={setModalInfo}
      actions={{
        right: (
          <Form layout="inline" initialValues={{ a: '1' }}>
            <Form.Item label="进场日期">
              <RangePicker style={{ width: 220 }} />
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
    ></GroupTable>
  );
};

const InputWrapper = () => {
  const holder = {
    '1': '请输入劳务班组名称',
    '2': '请输入劳务班长姓名',
  };
  const [placeholder, setPlaceHolder] = useState(holder['1']);

  return (
    <Input
      addonBefore={
        <Form.Item noStyle name="a">
          <Select onSelect={e => setPlaceHolder(holder[e])}>
            <Select.Option value="1">劳务班组名称</Select.Option>
            <Select.Option value="2">劳务班长姓名</Select.Option>
          </Select>
        </Form.Item>
      }
      placeholder={placeholder}
    ></Input>
  );
};
