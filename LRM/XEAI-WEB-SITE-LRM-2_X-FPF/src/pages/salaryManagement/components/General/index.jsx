/**
 * @module 工资汇总记录
 */
import { useState } from 'react';
import { Table, ButtonModal, Modal } from 'lanlinker';
import { Button, Input, Form as AntdForm, DatePicker } from 'antd';
import SalaryModal from './SalaryModal';

export default () => {
  const [updateModal, setUpdateModal] = useState(false);
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
      render(_, record) {
        return (
          <>
            <Button
              type="link"
              size="small"
              onClick={() => {
                setUpdateModal({
                  visible: true,
                  info: record,
                });
              }}
            >
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

  return (
    <>
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
              <SalaryModal data={originData} />
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
      <Modal
        visible={updateModal.visible}
        title="修改工资单"
        width={1200}
        onCancel={() => setUpdateModal({ ...updateModal, visible: false })}
        bodyStyle={{ height: 700, overflow: 'auto' }}
      >
        <SalaryModal data={originData} />
      </Modal>
    </>
  );
};

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
