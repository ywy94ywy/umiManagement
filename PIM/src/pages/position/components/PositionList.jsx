/**
 * @module 工程位置列表
 */
import { useState } from 'react';
import { Table, ButtonModal } from 'lanlinker';
import { Button, Form, Input, Select } from 'antd';
import { useRequest } from 'umi';
import { fetchTable } from '../services';

export default ({ currentNode }) => {
  const { id } = currentNode;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { data, loading } = useRequest(fetchTable(id), {
    refreshDeps: [id],
  });

  return (
    <Table
      rowKey="id"
      dataSource={data}
      loading={loading}
      actions={{
        left: (
          <>
            <ButtonModal
              title="新增"
              buttonProps={{
                text: '新增',
                type: 'primary',
              }}
            >
              <Form
                layout="vertical"
                initialValues={{
                  b: '1',
                  c: '1',
                }}
              >
                <Form.Item label="请输入新增的位置名称">
                  <Input placeholder="请输入位置名称"></Input>
                </Form.Item>
                <Form.Item name="b" label="位置类型">
                  <Select
                    options={[
                      {
                        label: '闸机',
                        value: '1',
                      },
                      {
                        label: '摄像头',
                        value: '2',
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item name="c" label="是否考勤">
                  <Select
                    options={[
                      {
                        label: '是',
                        value: '1',
                      },
                      {
                        label: '否',
                        value: '2',
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="备注">
                  <Input placeholder="请输入"></Input>
                </Form.Item>
              </Form>
            </ButtonModal>
            <Button type="primary" danger>
              删除
            </Button>
          </>
        ),
      }}
      columns={columns}
      rowSelection={{
        selectedRowKeys,
        onChange(keys) {
          setSelectedRowKeys(keys);
        },
      }}
    ></Table>
  );
};

const columns = [
  {
    title: '位置编码',
    dataIndex: 'a',
  },
  {
    title: '位置名称',
    dataIndex: 'b',
  },
  {
    title: '位置类型',
    dataIndex: 'c',
  },
  {
    title: '是否考勤',
    dataIndex: 'd',
  },
  {
    title: '备注',
    dataIndex: 'e',
  },
  {
    title: '操作',
    dataIndex: 'f',
  },
];
