import React, { useState } from 'react';
import { Table } from 'lanlinker';
import { Card, Row, Col, Button, Form, Input, Select, DatePicker } from 'antd';
import LaborLayout from '@/components/LaborLayout';

export default ({ dataSource }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <LaborLayout
      content={<Table columns={columns} dataSource={dataSource}></Table>}
      sider={
        <>
          <Row justify="end">
            <Button type="primary">发放临时卡</Button>
          </Row>
          <Card size="small" style={{ marginTop: 12 }}>
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Form.Item label="卡号">
                <Input disabled={disabled}></Input>
              </Form.Item>
              <Form.Item label="启用时间">
                <DatePicker style={{ width: '100%' }} disabled={disabled}></DatePicker>
              </Form.Item>
              <Form.Item label="失效时间">
                <DatePicker style={{ width: '100%' }} disabled={disabled}></DatePicker>
              </Form.Item>
              <Form.Item label="制卡时间"></Form.Item>
              <Form.Item label="制卡操作人"></Form.Item>
              <Form.Item label="门区权限">
                <Button type="primary" block disabled={disabled}>
                  选择门区
                </Button>
              </Form.Item>
              <Form.Item label="持卡人姓名">
                <Input disabled={disabled}></Input>
              </Form.Item>
              <Form.Item label="身份证号">
                <Input disabled={disabled}></Input>
              </Form.Item>
              <Form.Item label="来访类型">
                <Select disabled={disabled}></Select>
              </Form.Item>
              <Form.Item label="联系方式">
                <Input disabled={disabled}></Input>
              </Form.Item>
              <Form.Item label="代收人姓名">
                <Input disabled={disabled}></Input>
              </Form.Item>
              <Form.Item label="备注">
                <Input disabled={disabled}></Input>
              </Form.Item>
            </Form>
            <Row justify="center" gutter={12}>
              {disabled ? (
                <>
                  <Col>
                    <Button type="primary" onClick={() => setDisabled(false)}>
                      修改
                    </Button>
                  </Col>
                  <Col>
                    <Button>退卡</Button>
                  </Col>
                </>
              ) : (
                <Col>
                  <Button type="primary" onClick={() => setDisabled(true)}>
                    确定
                  </Button>
                </Col>
              )}
            </Row>
          </Card>
        </>
      }
    />
  );
};

const columns = [
  {
    title: '流水编号',
    dataIndex: 'a',
  },
  {
    title: '卡号',
    dataIndex: 'b',
  },
  {
    title: '持卡人姓名',
    dataIndex: 'd',
  },
  {
    title: '制作时间',
    dataIndex: 'e',
  },
  {
    title: '失效时间',
    dataIndex: 'f',
  },
  {
    title: '备注',
    dataIndex: 'g',
  },
];
