/**
 * @module 工资模态框
 */
import { useState } from 'react';
import { Table, Form, ButtonModal } from 'lanlinker';
import {
  Button,
  Input,
  Form as AntdForm,
  DatePicker,
  Upload,
  TreeSelect,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import EditTable from '../EditTable';

export default ({ data }) => {
  const [dataSource, setDataSource] = useState(data);

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
          left: (
            <ButtonModal
              title="选择员工"
              width={1000}
              bodyStyle={{ height: 700, overflow: 'auto' }}
              buttonProps={{ type: 'primary', text: '选择员工' }}
              okText="生成工资表"
            >
              <h3>待分配员工列表</h3>
              <Table
                rowKey="id"
                columns={unassignedColumns}
                dataSource={[{ id: '123', a: '23' }]}
                rowSelection={{
                  onSelect() {},
                }}
                actions={{
                  left: <Button type="primary">批量分配</Button>,
                  right: (
                    <AntdForm layout="inline">
                      <AntdForm.Item label="组织名称">
                        <TreeSelect />
                      </AntdForm.Item>
                    </AntdForm>
                  ),
                }}
              />
              <br />
              <h3>待发工资员工列表</h3>
              <Table
                rowKey="id"
                columns={unpaidColumns}
                dataSource={[{ id: '123', a: '23' }]}
                rowSelection={{
                  onSelect() {},
                }}
                actions={{
                  left: (
                    <Button type="primary" danger>
                      批量删除
                    </Button>
                  ),
                }}
              />
            </ButtonModal>
          ),
        }}
      />
      <Form
        columns={2}
        style={{ width: '80%', margin: '24px auto' }}
        labelCol={{ flex: '120px' }}
      >
        <Form.Item label="工资单据名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="工资单据日期" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label="工资支付日期" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label="操作员姓名">
          <Input />
        </Form.Item>
        <Form.Item label="工资单据备注" colSpan={2}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="附件">
          <Upload>
            <Button>
              <UploadOutlined />
              上传文件
            </Button>
          </Upload>
        </Form.Item>
      </Form>
    </>
  );
};

const staffColumns = [
  {
    title: '姓名',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '性别',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '年龄',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '身份证号',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '身份证号',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '岗位',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '所属队伍',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '所属班组',
    dataIndex: 'a',
    ellipsis: true,
  },
];

const unassignedColumns = [
  ...staffColumns,
  {
    title: '操作',
    render() {
      return <Button type="link">分配</Button>;
    },
  },
];

const unpaidColumns = [
  ...staffColumns,
  {
    title: '操作',
    render() {
      return (
        <Button type="link" danger>
          删除
        </Button>
      );
    },
  },
];
