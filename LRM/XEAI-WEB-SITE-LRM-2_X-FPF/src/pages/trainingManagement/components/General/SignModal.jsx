/**
 * @module 签到模态框
 */
import { useState } from 'react';
import { Table, ButtonModal, IconFont } from 'lanlinker';
import { Button, Input, Select, Form, Space, Row, Col } from 'antd';
import SelectModal from './SelectModal';

export default () => {
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={[
        {
          id: 'a',
          1: '1',
        },
      ]}
      rowSelection={{ onChange() {} }}
      actions={{
        left: (
          <Form layout="inline">
            <Form.Item label="选择签到类型">
              <Space>
                <ButtonModal
                  title="手动选择签到"
                  width={1000}
                  buttonProps={{ text: '手动选择签到', type: 'primary' }}
                  bodyStyle={{ height: 700, overflow: 'auto' }}
                >
                  <SelectModal />
                </ButtonModal>
                <ButtonModal
                  title="刷IC卡签到"
                  width={1000}
                  buttonProps={{ text: '刷IC卡签到', type: 'primary' }}
                  bodyStyle={{ height: 700, overflow: 'auto' }}
                >
                  <Row justify="center">
                    <a
                      href="#"
                      onClick={e => e.preventDefault()}
                      style={{ lineHeight: 1.2 }}
                    >
                      <IconFont type="&#xe819;" style={{ fontSize: 120 }} />
                    </a>
                    <Col span={24}>
                      <p style={{ textAlign: 'center', marginBottom: 24 }}>
                        请刷IC卡签到
                      </p>
                    </Col>
                  </Row>
                  <Table columns={staffColumns} />
                </ButtonModal>
                <ButtonModal
                  title="刷身份证签到"
                  width={1000}
                  buttonProps={{ text: '刷身份证签到', type: 'primary' }}
                  bodyStyle={{ height: 700, overflow: 'auto' }}
                >
                  <Row justify="center">
                    <a
                      href="#"
                      onClick={e => e.preventDefault()}
                      style={{ lineHeight: 1.2 }}
                    >
                      <IconFont type="&#xe819;" style={{ fontSize: 120 }} />
                    </a>
                    <Col span={24}>
                      <p style={{ textAlign: 'center', marginBottom: 24 }}>
                        刷身份证签到
                      </p>
                    </Col>
                  </Row>
                  <Table columns={staffColumns} />
                </ButtonModal>
                <ButtonModal
                  title="人脸识别签到"
                  width={1000}
                  buttonProps={{ text: '人脸识别签到', type: 'primary' }}
                  bodyStyle={{ height: 700, overflow: 'auto' }}
                >
                  <Row justify="center">
                    <a
                      href="#"
                      onClick={e => e.preventDefault()}
                      style={{ lineHeight: 1.2 }}
                    >
                      <IconFont type="&#xe819;" style={{ fontSize: 120 }} />
                    </a>
                    <Col span={24}>
                      <p style={{ textAlign: 'center', marginBottom: 24 }}>
                        人脸识别签到
                      </p>
                    </Col>
                  </Row>
                  <Table columns={staffColumns} />
                </ButtonModal>
              </Space>
            </Form.Item>
          </Form>
        ),
        right: (
          <Form layout="inline" initialValues={{ a: '1' }}>
            <Form.Item>
              <InputWrapper />
            </Form.Item>
            <Form.Item>
              <Button type="primary">查询</Button>
            </Form.Item>
          </Form>
        ),
      }}
    />
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

const columns = [
  {
    title: '姓名',
    dataIndex: '1',
  },
  {
    title: '身份证号',
    dataIndex: '4',
  },
  {
    title: '岗位',
    dataIndex: '5',
  },
  {
    title: '培训名称',
    dataIndex: '6',
  },
  {
    title: '签到时间',
    dataIndex: '6',
  },
  {
    title: '是否合格',
    dataIndex: '6',
  },
  {
    title: '培训评分',
    dataIndex: '6',
  },
];

const staffColumns = [
  {
    title: '姓名',
    dataIndex: '1',
  },
  {
    title: '性别',
    dataIndex: '1',
  },
  {
    title: '身份证号',
    dataIndex: '1',
  },
  {
    title: '操作',
    render() {
      return (
        <Button type="link" size="small">
          删除
        </Button>
      );
    },
  },
];
