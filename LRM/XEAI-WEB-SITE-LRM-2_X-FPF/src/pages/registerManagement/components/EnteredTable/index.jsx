/**
 * @module 待进场员工信息-表格
 */
import { useState } from 'react';
import { Table, ButtonModal, Modal, Form as LForm } from 'lanlinker';
import { Button, Input, Select, Form, Tree, message } from 'antd';
import IDCardButton from './IDCardButton';
import EnterButton from './EnterButton';
import registerForm from '../../form/registerForm';

export default () => {
  const [form] = LForm.useForm();
  const [updateModal, setUpdateModal] = useState(false);
  const [enterModal, setEnterModal] = useState(false);

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
      title: '操作',
      width: 130,
      fixed: 'right',
      render: () => (
        <>
          <Button
            type="link"
            size="small"
            onClick={() => {
              setUpdateModal(true);
            }}
          >
            修改
          </Button>
          {/* </Popconfirm> */}
          <Button
            type="link"
            size="small"
            onClick={() => {
              setEnterModal(true);
            }}
          >
            进场
          </Button>
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
              <IDCardButton />
              {/* <ButtonModal
                title="批量导入人员进场"
                width={600}
                buttonProps={{ text: '批量导入' }}
              >
                <Table
                columns={columnsP}
                actions={{
                  left: (
                    <>
                      <Button type="primary">上传EXCEL</Button>
                      <Button type="link">下载excel模板</Button>
                    </>
                  ),
                  right: (
                    <>
                      <Input placeholder="请输入姓名或身份证号"></Input>
                      <Button type="primary">查询</Button>
                    </>
                  ),
                }}
              ></Table>
              </ButtonModal> */}
              <EnterButton />
            </>
          ),
          right: (
            <Form layout="inline" initialValues={{ prefix: '1', b: '1' }}>
              <Form.Item name="b">
                <Select>
                  <Select.Option value="1">全部岗位</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="a">
                <InputWrapper />
              </Form.Item>
              <Button type="primary">查询</Button>
            </Form>
          ),
        }}
      />
      <Modal
        visible={updateModal}
        title="修改登记员工信息"
        width={1200}
        centered
        bodyStyle={{ maxHeight: 700, overflow: 'auto' }}
        onOk={() => setUpdateModal(false)}
        onCancel={() => setUpdateModal(false)}
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
          configForm={registerForm({ form })}
        />
      </Modal>
      <Modal
        title="选择进场组织"
        visible={enterModal}
        onOk={() => {
          message.success('人员进场成功！');
          setEnterModal(false);
        }}
        onCancel={() => setEnterModal(false)}
      >
        <h3>请选择进场组织</h3>
        <Tree></Tree>
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
        <Form.Item noStyle name="prefix">
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
