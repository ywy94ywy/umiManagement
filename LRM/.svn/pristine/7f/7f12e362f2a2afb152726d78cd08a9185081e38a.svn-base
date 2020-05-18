import React from 'react';
import { Table } from 'lanlinker';
import ListItem from '../ListItem';
import { Layout, Button, Card, Form, Select, DatePicker, Input, Row, Col } from 'antd';

export default ({ dataSource }) => (
  <Layout>
    <Layout.Content>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={(v, i) => i}
        bordered
        scroll={{ y: 500 }}
        actions={{
          left: <Button type="primary">批量修改</Button>,
          right: <Button type="primary">导出Excel</Button>,
        }}
      ></Table>
    </Layout.Content>
    <Layout.Sider theme="light" width={340} style={{ marginLeft: 24 }}>
      <Card size="small" bordered>
        <ListItem buttonProps={{ text: '续签劳动合同' }}></ListItem>
        <h3>合同文件</h3>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label="期限类型">
            <Select></Select>
          </Form.Item>
          <Form.Item label="生效日期">
            <DatePicker style={{ width: '100%' }}></DatePicker>
          </Form.Item>
          <Form.Item label="失效日期">
            <DatePicker style={{ width: '100%' }}></DatePicker>
          </Form.Item>
          <Form.Item label="计量单位">
            <Select></Select>
          </Form.Item>
          <Form.Item label="计量单价">
            <Row gutter={12} align="middle">
              <Col span={20}>
                <Input></Input>
              </Col>
              <Col span={4}>元</Col>
            </Row>
          </Form.Item>
          <Form.Item label="附件上传">
            <Row>
              <Col span={12}>
                <Button type="primary" size="small">
                  本地上传
                </Button>
              </Col>
              <Col span={12}>
                <Button type="primary" size="small">
                  高拍仪上传
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: 12 }}>
              <Col span={12}>
                <Button type="primary" size="small">
                  查看详情
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <Row gutter={24} justify="center">
          <Col>
            <Button type="primary">保存</Button>
          </Col>
          <Col>
            <Button>取消</Button>
          </Col>
        </Row>
      </Card>
    </Layout.Sider>
  </Layout>
);

const columns = [
  {
    title: '姓名',
    dataIndex: 'a',
    width: 120,
  },
  {
    title: '性别',
    dataIndex: 'b',
    width: 90,
  },
  {
    title: '身份证号',
    dataIndex: 'd',
  },
  {
    title: '岗位',
    dataIndex: 'e',
  },
  {
    title: '合同生效时间',
    dataIndex: 'f',
  },
  {
    title: '合同失效时间',
    dataIndex: 'g',
  },
];
