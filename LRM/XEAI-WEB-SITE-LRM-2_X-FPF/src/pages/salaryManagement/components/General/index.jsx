/**
 * @module 工资汇总记录
 */
import { useState } from 'react';
import { Table, Modal, Form, ButtonModal } from 'lanlinker';
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

export default () => {
  const [dataSource, setDataSource] = useState(originData);

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={[{ id: 'asd', a: '123' }]}
      actions={{
        left: (
          <ButtonModal
            title="新增工资单"
            width={1200}
            buttonProps={{ text: '新增', type: 'primary' }}
            bodyStyle={{ height: 700, overflow: 'auto' }}
          >
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
                      columns={c1}
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
                      columns={c2}
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
            <Form columns={2} style={{ width: '80%', margin: '24px auto' }}>
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
          </ButtonModal>
        ),
        right: (
          <AntdForm layout="inline">
            <AntdForm.Item label="工资单据日期">
              <DatePicker />
            </AntdForm.Item>
            <AntdForm.Item label="工资单据名称">
              <Input placeholder="请输入工资单据名称" />
            </AntdForm.Item>
            <AntdForm.Item>
              <Button type="primary">查询</Button>
            </AntdForm.Item>
            <AntdForm.Item>
              <Button>重置</Button>
            </AntdForm.Item>
          </AntdForm>
        ),
      }}
    ></Table>
  );
};

const columns = [
  {
    title: '流水记录编码',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '工资单据名称',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '工资单据日期',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '操作员姓名',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '附件',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '工资单据备注',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: 'a',
    render() {
      return (
        <>
          <Button type="link" size="small">
            修改
          </Button>
          <Button type="link" danger size="small">
            删除
          </Button>
        </>
      );
    },
  },
];

const originData = [];
for (let i = 0; i < 5; i++) {
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

const c = [
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

const c1 = [
  ...c,
  {
    title: '操作',
    render() {
      return <Button type="link">分配</Button>;
    },
  },
];

const c2 = [
  ...c,
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
