/**
 * @module 新增窗口
 */
import { Table, ButtonModal, Form } from 'lanlinker';
import { Input, Button, TreeSelect } from 'antd';
import { misForm, goodForm } from '../config';

export default ({ type = 'mis' }) => {
  let currentForm = [];
  type === 'mis' && (currentForm = misForm);
  type === 'good' && (currentForm = goodForm);

  return (
    <div style={{ height: 600, overflow: 'auto' }}>
      <Table
        rowKey="id"
        columns={selectedColumns}
        dataSource={[{ id: 'a', a: '123' }]}
        scroll={{ x: 1500 }}
        actions={{
          left: (
            <Form layout="inline">
              <Form.Item label="选择涉事人员">
                <ButtonModal
                  title="选择涉事人员"
                  width={800}
                  buttonProps={{ text: '添加涉事人员', type: 'primary' }}
                  bodyStyle={{ maxHeight: 600, overflow: 'auto' }}
                >
                  <Table
                    rowKey="id"
                    dataSource={[{ id: 'a', a: '123' }]}
                    scroll={{ x: 1500 }}
                    columns={unSelectedColumns}
                    rowSelection={{ onSelect() {} }}
                    actions={{
                      left: (
                        <Form layout="inline">
                          <Form.Item label="选择组织">
                            <TreeSelect />
                          </Form.Item>
                        </Form>
                      ),
                      right: (
                        <>
                          <Input placeholder="请输入姓名或身份证号" />
                          <Button type="primary">查询</Button>
                        </>
                      ),
                    }}
                  />
                </ButtonModal>
              </Form.Item>
            </Form>
          ),
          right: (
            <>
              <Input placeholder="请输入姓名或身份证号"></Input>
              <Button type="primary">查询</Button>
            </>
          ),
        }}
      />
      <Form
        columns={2}
        configForm={currentForm}
        style={{ width: '80%', margin: '24px auto' }}
        labelCol={{ flex: '120px' }}
        initialValues={{ b: '1', d: '1' }}
      />
    </div>
  );
};

const unSelectedColumns = [
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
    title: '籍贯',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '所属劳务公司',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '所属队伍',
    dataIndex: 'a',
    ellipsis: true,
  },
];

const selectedColumns = [
  ...unSelectedColumns,
  {
    title: '操作',
    dataIndex: 'a',
    render() {
      return (
        <Button type="link" danger size="small">
          删除
        </Button>
      );
    },
  },
];
