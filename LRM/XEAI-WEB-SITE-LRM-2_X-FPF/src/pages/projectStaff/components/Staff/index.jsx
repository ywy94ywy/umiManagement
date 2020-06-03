/**
 * @module 劳务人员标签页
 */
import { useState } from 'react';
import { useConstructTree } from 'lanlinker';
import { Button, Form, DatePicker, Input, Select, TreeSelect } from 'antd';
import StaffTable from '../Tables/StaffTable';

const { RangePicker } = DatePicker;

export default () => {
  // 接口
  const dataSource = [
    {
      id: 'a',
      a: '劳务人员数据',
    },
    {
      id: 'a2',
      a: '214',
    },
  ];

  const treeRawData = [
    {
      id: 1,
      a: '名字1',
      value: 1,
      b: '键1',
      c: '图标',
      pId: 0,
    },
    {
      id: 2,
      a: '名字2',
      value: 2,
      b: '键2',
      c: '图标',
      pId: 0,
    },
    {
      id: 3,
      a: '名字3',
      value: 3,
      b: '键3',
      c: '图标',
      pId: 1,
    },
    {
      id: 7,
      a: '名字4',
      value: 7,
      b: '键7',
      c: '图标',
      pId: 1,
    },
    {
      id: 8,
      a: '名字',
      value: 8,
      b: '键8',
      c: '图标',
      pId: 1,
    },
    {
      id: 5,
      a: '名字',
      value: 5,
      b: '键5',
      c: '图标',
      pId: 2,
    },
    {
      id: 4,
      a: '名字',
      value: 4,
      b: '键4',
      c: '图标',
      pId: 3,
    },
    {
      id: 6,
      a: '名字',
      value: 6,
      b: '键6',
      c: '图标',
      pId: 3,
    },
    {
      id: 9,
      a: '名字9',
      value: 9,
      b: '键9',
      c: '图标',
      pId: 7,
    },
  ];

  const [treeData] = useConstructTree(treeRawData, {
    title: 'a',
    icon: 'c',
    key: 'id',
  });

  return (
    <StaffTable
      dataSource={dataSource}
      actions={{
        right: (
          <Form layout="inline" initialValues={{ a: '1' }}>
            <Form.Item label="组织名称">
              <TreeSelect
                showSearch
                treeData={treeData}
                style={{ width: 150 }}
                treeDefaultExpandAll
                placeholder="请选择"
              />
            </Form.Item>
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
    ></StaffTable>
  );
};

const InputWrapper = () => {
  const holder = {
    '1': '请输入姓名',
    '2': '请输入身份证号',
  };
  const [placeholder, setPlaceHolder] = useState(holder['1']);

  return (
    <Input
      addonBefore={
        <Form.Item noStyle name="a">
          <Select
            onSelect={e => setPlaceHolder(holder[e])}
            style={{ width: 100 }}
          >
            <Select.Option value="1">姓名</Select.Option>
            <Select.Option value="2">身份证号</Select.Option>
          </Select>
        </Form.Item>
      }
      placeholder={placeholder}
    ></Input>
  );
};
