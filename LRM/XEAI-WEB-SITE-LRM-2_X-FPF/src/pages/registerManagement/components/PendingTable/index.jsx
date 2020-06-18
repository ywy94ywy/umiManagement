/**
 * @module 已进场员工信息-表格
 */
import { useState } from 'react';
import { Table, Form as LForm, Modal } from 'lanlinker';
import { Button, Form, Select, Input, Popconfirm } from 'antd';
import ExitButton from './ExitButton';
import registerForm from '../../form/registerForm';

export default () => {
  const [detailModal, setDetailModal] = useState(false);
  const [form] = LForm.useForm();

  const columns = [
    {
      title: '姓名',
      dataIndex: 'a',
      width: 120,
      ellipsis: true,
    },
    {
      title: '性别',
      dataIndex: 'b',
      width: 80,
      ellipsis: true,
    },
    {
      title: '年龄',
      dataIndex: 'c',
      ellipsis: true,
      width: 80,
    },
    {
      title: '身份证号',
      dataIndex: 'd',
      width: 200,
      ellipsis: true,
    },
    {
      title: '手机号码',
      dataIndex: 'dd',
      width: 160,
      ellipsis: true,
    },
    {
      title: '岗位',
      dataIndex: 'e',
      width: 140,
      ellipsis: true,
    },
    {
      title: '进场时间',
      dataIndex: 'f',
      width: 140,
      ellipsis: true,
    },
    {
      title: '操作',
      width: 130,
      fixed: 'right',
      render: () => (
        <>
          <Button type="link" size="small" onClick={() => setDetailModal(true)}>
            详情
          </Button>
          <Popconfirm title="是否退场">
            <Button type="link" danger size="small">
              退场
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];
  return (
    <>
      <Table
        rowKey="id"
        dataSource={data}
        columns={columns}
        scroll={{
          x: 1200,
        }}
        rowSelection={{ onSelect() {} }}
        actions={{
          left: (
            <>
              <ExitButton />
            </>
          ),
          right: (
            <Form layout="inline" initialValues={{ a: '1', b: '1' }}>
              <Form.Item name="b">
                <Select>
                  <Select.Option value="1">全部岗位</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <InputWrapper />
              </Form.Item>
              <Button type="primary">查询</Button>
            </Form>
          ),
        }}
      />
      <Modal
        visible={detailModal}
        title="修改登记员工信息"
        width={1200}
        centered
        bodyStyle={{ maxHeight: 700, overflow: 'auto' }}
        onOk={() => setDetailModal(false)}
        onCancel={() => setDetailModal(false)}
      >
        <LForm
          form={form}
          columns={2}
          initialValues={{
            4: '1',
            table: new Array(1).fill(1).map((v, i) => ({
              id: i,
              a: '123',
              b: '11',
            })),
            card: [
              {
                userBankName: 'asf',
                code: 'a',
                userBankAccountNumber: '1234214',
              },
            ],
          }}
          labelCol={{ flex: '130px' }}
          style={{ width: '80%', margin: '0 auto' }}
          configForm={registerForm({ form, editing: false })}
        />
      </Modal>
    </>
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

const data = new Array(15).fill('').map((v, i) => ({
  id: i,
  a: 'asfas',
  b: '0',
  c: '30',
  d: '323663522362535265',
  dd: '13862555555',
  e: '传统建筑画工',
  f: '2019-01-01 12:11:24',
}));
