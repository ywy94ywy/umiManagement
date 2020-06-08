/**
 * @module 工资明细记录
 */
import { useState } from 'react';
import { Button, Form, TreeSelect, DatePicker, Input, Select } from 'antd';
import EditTable from '../EditTable';

const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    id: i.toString(),
    aa: i,
    a: `Edrward ${i}`,
    b: Math.random() * 10 ** 18,
    c: Math.ceil(Math.random() * 10 ** 11),
    d: (Math.random() * 10 ** 18).toString(36),
    e: Math.ceil(Math.random() * 10 ** 3),
    f: Math.ceil(Math.random() * 10 ** 3),
    g: Math.ceil(Math.random() * 10 ** 3),
    h: Math.ceil(Math.random() * 10 ** 3),
    h: Math.ceil(Math.random() * 10 ** 3),
    i1: Math.ceil(Math.random() * 10 ** 3),
    i2: Math.ceil(Math.random() * 10 ** 3),
    i3: Math.ceil(Math.random() * 10 ** 3),
    i4: Math.ceil(Math.random() * 10 ** 3),
    i5: Math.ceil(Math.random() * 10 ** 3),
    i6: Math.ceil(Math.random() * 10 ** 3),
    i7: Math.ceil(Math.random() * 10 ** 3),
    i8: Math.ceil(Math.random() * 10 ** 3),
    i9: Math.ceil(Math.random() * 10 ** 3),
    i10: Math.ceil(Math.random() * 10 ** 3),
    i11: Math.ceil(Math.random() * 10 ** 3),
    i12: Math.ceil(Math.random() * 10 ** 3),
    i13: Math.ceil(Math.random() * 10 ** 3),
    k: (Math.random() * 10 ** 18).toString(36),
  });
}

export default () => {
  const [dataSource, setDataSource] = useState(originData);

  return (
    <>
      <EditTable
        rowKey="id"
        dataSource={dataSource}
        onSave={data => {
          const { id, ...res } = data;
          setDataSource(
            dataSource.map(v => (v.id === id ? { ...v, ...res } : v)),
          );
        }}
        actions={{
          right: (
            <Form layout="inline" initialValues={{ a: '1' }}>
              <Form.Item label="组织名称">
                <TreeSelect />
              </Form.Item>
              <Form.Item label="工资支付日期">
                <DatePicker />
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
      />
    </>
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
