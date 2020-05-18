/**
 * @module 证书管理
 * @todo actions-form
 */
import React from 'react';
import { PageHeaderWrapper, Table } from 'lanlinker';
import { Card, Input, Button, Select, Form } from 'antd';
import LaborLayout from '@/components/LaborLayout';
import ListItemWrapper from '@/components/ListItemWrapper';

export default () => {
  return (
    <PageHeaderWrapper
      extra={
        <>
          <span>组织名称:</span>
          <Select></Select>
        </>
      }
    >
      <Card title="证书管理">
        <LaborLayout
          content={
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
          }
          sider={<ListItemWrapper title="证书列表"></ListItemWrapper>}
        />
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
    title: '证书数量',
    dataIndex: 'df',
  },
];
