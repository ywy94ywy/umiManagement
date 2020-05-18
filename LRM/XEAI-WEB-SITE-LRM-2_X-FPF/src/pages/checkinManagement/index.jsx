/**
 * @module 考勤管理
 */
import React from 'react';
import { PageHeaderWrapper, Table, ButtonModal } from 'lanlinker';
import { Button, Form, Input, DatePicker, Card, Select } from 'antd';

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
      <Card>
        <Table
          columns={columns}
          actions={{
            left: (
              <ButtonModal
                buttonProps={{ text: '新增刷卡记录', type: 'primary' }}
                title="新增刷卡记录"
              ></ButtonModal>
            ),
            right: (
              <Form layout="inline">
                <Form.Item label="入场日期">
                  <DatePicker></DatePicker>
                </Form.Item>
                <Form.Item>
                  <Input placeholder="请输入"></Input>
                </Form.Item>
                <Form.Item>
                  <Button type="primary">查询</Button>
                </Form.Item>
                <Form.Item noStyle>
                  <Button type="primary">导出Excel</Button>
                </Form.Item>
              </Form>
            ),
          }}
        ></Table>
      </Card>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '流水编号',
    dataIndex: 'a',
  },
  {
    title: '姓名',
    dataIndex: 'b',
  },
  {
    title: '身份证号',
    dataIndex: 'c',
  },
  {
    title: '岗位',
    dataIndex: 'd',
  },
  {
    title: '劳务队伍',
    dataIndex: 'e',
  },
  {
    title: '劳务班组',
    dataIndex: 'f',
  },
];
