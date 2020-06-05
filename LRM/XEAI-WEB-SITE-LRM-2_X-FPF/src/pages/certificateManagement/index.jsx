/**
 * @page 证书管理
 * @todo 可编辑表格，删除按钮弹窗
 */
import { useState } from 'react';
import { PageHeaderWrapper, Table } from 'lanlinker';
import { Card, Input, Button, Select, TreeSelect, Row, Col, Form } from 'antd';
import StaffCard from '@/components/StaffCard';
import CertificateList from './components/CertificateList';

export default () => {
  const [list, setList] = useState();

  return (
    <PageHeaderWrapper>
      <Card>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Row justify="end">
              <Form layout="inline" initialValues={{ a: '1', b: '1' }}>
                <Form.Item label="组织名称">
                  <TreeSelect></TreeSelect>
                </Form.Item>
                <Form.Item label="岗位">
                  <Select></Select>
                </Form.Item>
                <Form.Item label="性别" name="b">
                  <Select>
                    <Select.Option value="1">男</Select.Option>
                    <Select.Option value="2">女</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <InputWrapper></InputWrapper>
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
            <Table
              rowKey="id"
              onRow={record => ({
                onClick() {
                  setList(record);
                },
              })}
              columns={columns}
              dataSource={[{ id: 't', a: '3' }]}
            ></Table>
          </Col>
          <Col flex="340px" style={{ overflow: 'hidden' }}>
            <StaffCard title="证书列表">
              {list && <CertificateList />}
            </StaffCard>
          </Col>
        </Row>
      </Card>
    </PageHeaderWrapper>
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

const columns = [
  {
    title: '姓名',
    dataIndex: 'a',
    width: 90,
    ellipsis: true,
  },
  {
    title: '身份证号',
    dataIndex: 'd',
    width: 120,
    ellipsis: true,
  },
  {
    title: '性别',
    dataIndex: 'e',
    width: 80,
    ellipsis: true,
  },
  {
    title: '岗位',
    dataIndex: 'f',
    width: 90,
    ellipsis: true,
  },
  {
    title: '证书数量',
    dataIndex: 'df',
    width: 80,
    ellipsis: true,
  },
];
