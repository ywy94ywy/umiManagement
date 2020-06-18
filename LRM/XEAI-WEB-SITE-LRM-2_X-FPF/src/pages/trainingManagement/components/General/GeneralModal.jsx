/**
 * @module 新增/修改模态框
 */
import { useState } from 'react';
import { Table, ButtonModal, Form } from 'lanlinker';
import {
  Input,
  Select,
  DatePicker,
  Form as AntdForm,
  Button,
  Space,
  Upload,
  Popconfirm,
  Modal,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import SelectModal from './SelectModal';

export default () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: '1',
    },
    {
      title: '性别',
      dataIndex: '21',
    },
    {
      title: '年龄',
      dataIndex: '3',
    },
    {
      title: '身份证',
      dataIndex: '4',
    },
    {
      title: '岗位',
      dataIndex: '5',
    },
    {
      title: '所属队伍',
      dataIndex: '6',
    },
    {
      title: '所属班组',
      dataIndex: '7',
    },
    {
      title: '操作',
      render() {
        return (
          <Popconfirm title="确定删除这条记录吗？">
            <Button type="link" size="small">
              删除
            </Button>
          </Popconfirm>
        );
      },
    },
  ];
  return (
    <>
      <Form
        columns={3}
        style={{ margin: '0 auto' }}
        labelCol={{ flex: '100px' }}
      >
        <Form.Item name="1" label="培训类型" rules={[{ required: true }]}>
          <Select />
        </Form.Item>
        <Form.Item name="2" label="培训名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="3" label="培训老师" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="4" label="培训日期" rules={[{ required: true }]}>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="5" label="培训时长" rules={[{ required: true }]}>
          <Space>
            <Input />
            <span style={{ whiteSpace: 'nowrap' }}>时长</span>
          </Space>
        </Form.Item>
        <Form.Item name="6" label="培训地点" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="培训机构">
          <Input />
        </Form.Item>
        <Form.Item label="培训简述">
          <Input />
        </Form.Item>
        <Form.Item label="备注">
          <Input />
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
      <Table
        rowKey="id"
        dataSource={[
          {
            id: '1',
            1: '2',
          },
        ]}
        rowSelection={{
          onChange() {},
        }}
        columns={columns}
        actions={{
          left: (
            <>
              <ButtonModal
                title="选择培训员工"
                width={1000}
                buttonProps={{ text: '选择培训员工', type: 'primary' }}
                bodyStyle={{ height: 700, overflow: 'auto' }}
                onOk={(_, close) => {
                  close();
                }}
              >
                <SelectModal />
              </ButtonModal>
              <Button
                type="primary"
                danger
                onClick={() => {
                  Modal.confirm({ title: '确定从培训记录中删除这3条记录吗？' });
                }}
              >
                批量删除
              </Button>
            </>
          ),
          right: (
            <AntdForm layout="inline" initialValues={{ a: '1' }}>
              <AntdForm.Item>
                <InputWrapper />
              </AntdForm.Item>
              <AntdForm.Item>
                <Button type="primary">查询</Button>
              </AntdForm.Item>
            </AntdForm>
          ),
        }}
      />
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
