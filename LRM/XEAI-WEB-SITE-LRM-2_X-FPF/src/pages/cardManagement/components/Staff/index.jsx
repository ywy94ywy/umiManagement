/**
 * @module 员工卡片授权
 */
import { useState } from 'react';
import { Input, Button, Select, Row, Col, Form, TreeSelect } from 'antd';
import StaffCardWrapper from '@/components/StaffCard';
import StaffTable from './StaffTable';
import StaffCard from './StaffCard';

export default () => {
  const [staff, setStaff] = useState();

  return (
    <Row gutter={[12, 12]}>
      <Col span={24}>
        <Row justify="end">
          <Form layout="inline" initialValues={{ a: '1', b: '1' }}>
            <Form.Item label="组织名称">
              <TreeSelect></TreeSelect>
            </Form.Item>
            <Form.Item label="授权状态" name="b">
              <Select>
                <Select.Option value="1">全部人员</Select.Option>
                <Select.Option value="2">已授权</Select.Option>
                <Select.Option value="3">未授权</Select.Option>
              </Select>
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
        </Row>
      </Col>
      <Col flex="1" style={{ overflow: 'hidden' }}>
        <StaffTable
          rowKey="id"
          dataSource={[{ id: '123', a: '123' }]}
          onRow={record => ({
            onClick() {
              setStaff({});
            },
          })}
        />
      </Col>
      <Col flex="340px" style={{ overflow: 'hidden' }}>
        <StaffCardWrapper title="授权方式">
          {staff && <StaffCard />}
        </StaffCardWrapper>
      </Col>
    </Row>
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
