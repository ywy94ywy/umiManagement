/**
 * @module 培训明细记录
 */
import { useState } from 'react';
import { Table, Modal } from 'lanlinker';
import { Button, Form, DatePicker, Input, Select } from 'antd';
import DetailModal from './DetailModal';

export default () => {
  const [updateModal, setUpdateModal] = useState({ visible: false, info: {} });
  const [detailModal, setDetailModal] = useState({ visible: false, info: {} });

  const columns = [
    {
      title: '姓名',
      dataIndex: 'a',
      ellipsis: true,
    },
    {
      title: '身份证号',
      dataIndex: 'd',
      ellipsis: true,
    },
    {
      title: '岗位',
      dataIndex: 'g',
      ellipsis: true,
    },
    {
      title: '培训名称',
      dataIndex: 'b',
      ellipsis: true,
    },
    {
      title: '培训日期',
      dataIndex: 'b',
      ellipsis: true,
    },
    {
      title: '签到时间',
      dataIndex: 'b',
      ellipsis: true,
    },
    {
      title: '是否合格',
      dataIndex: 'e',
      ellipsis: true,
    },
    {
      title: '培训评分',
      dataIndex: 'f',
      ellipsis: true,
    },
    {
      title: '操作',
      render(_, record) {
        return (
          <>
            <Button
              type="link"
              size="small"
              onClick={() => setUpdateModal({ visible: true, info: record })}
            >
              修改
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => setDetailModal({ visible: true, info: record })}
            >
              详情
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
        dataSource={[{ id: '123', a: '1213' }]}
        actions={{
          right: (
            <Form layout="inline" initialValues={{ a: '1', b: '1' }}>
              <Form.Item label="培训日期">
                <DatePicker></DatePicker>
              </Form.Item>
              <Form.Item name="b" label="培训类型">
                <Select>
                  <Select.Option value="1">安全教育</Select.Option>
                  <Select.Option value="2">入场教育</Select.Option>
                  <Select.Option value="3">退场教育</Select.Option>
                  <Select.Option value="4">技能教育</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <InputWrapper />
              </Form.Item>
              <Form.Item>
                <Button type="primary">查询</Button>
              </Form.Item>
              <Form.Item>
                <Button>重置</Button>
              </Form.Item>
            </Form>
          ),
        }}
      ></Table>
      <Modal
        title="修改评分"
        width={850}
        visible={updateModal.visible}
        onCancel={() => setUpdateModal({ ...updateModal, visible: false })}
      >
        <DetailModal type="update" />
      </Modal>
      <Modal
        title="查看详情"
        width={850}
        footer={null}
        visible={detailModal.visible}
        onCancel={() => setDetailModal({ ...detailModal, visible: false })}
      >
        <DetailModal />
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
