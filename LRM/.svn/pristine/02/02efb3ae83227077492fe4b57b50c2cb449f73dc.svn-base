/**
 * @module 项目疫情查询
 */
import React from 'react';
import { PageHeaderWrapper, Card, Table } from 'lanlinker';
import { Form, Input, Button } from 'antd';

export default () => {
  return (
    <PageHeaderWrapper>
      <Card>
        <Table
          columns={columns}
          dataSource={[]}
          actions={{
            right: (
              <>
                <Form.Item noStyle>
                  <Input></Input>
                </Form.Item>
                <Form.Item noStyle>
                  <Button type="primary">查询</Button>
                </Form.Item>
              </>
            ),
          }}
        ></Table>
      </Card>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '姓名',
    dataIndex: 'a',
    width: 120,
  },
  {
    title: '身份证号',
    dataIndex: 'd',
  },
  {
    title: '性别',
    dataIndex: 'e',
  },
  {
    title: '岗位',
    dataIndex: 'f',
  },
  {
    title: '申报时间',
    dataIndex: 'df',
  },
  {
    title: '体温',
    dataIndex: 'df',
  },
  {
    title: '咳嗽',
    dataIndex: 'df',
  },
  {
    title: '乏力',
    dataIndex: 'df',
  },
  {
    title: '腹泻',
    dataIndex: 'df',
  },
  {
    title: '新冠',
    dataIndex: 'df',
  },
];
