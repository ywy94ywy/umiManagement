/**
 * title: 表格头部布局
 */
import React from 'react';
import { Table, Form } from 'lanlinker';
import { Input, Button, Alert } from 'antd';

export default () => {
  return (
    <Table
      actions={{
        right: (
          <Form layout="inline">
            <Form.Item>
              <Input placeholder="请输入"></Input>
            </Form.Item>
            <Button>按钮3</Button>
          </Form>
        ),
      }}
      alert={<Alert message="提示信息"></Alert>}
    />
  );
};
