/**
 * @module 培训汇总管理
 */
import { useState, useRef } from 'react';
import { ButtonModal, Table, Modal } from 'lanlinker';
import { Button, Form, DatePicker, Input, Select } from 'antd';
import GeneralModal from './GeneralModal';
import SignModal from './SignModal';
import EvaluateModal from './EvaluateModal';

export default () => {
  const [uploadModal, setUploadModal] = useState(false);
  const [signModal, setSignModal] = useState(false);
  const [gradeModal, setGradeModal] = useState(false);
  const gradeRef = useRef();

  const columns = [
    {
      title: '培训名称',
      dataIndex: 'a',
    },
    {
      title: '培训类型',
      dataIndex: 'b',
    },
    {
      title: '培训老师',
      dataIndex: 'c',
    },
    {
      title: '培训日期',
      dataIndex: 'd',
    },
    {
      title: '培训时长(小时)',
      dataIndex: 'e',
    },
    {
      title: '培训机构',
      dataIndex: 'f',
    },
    {
      title: '培训地点',
      dataIndex: 'g',
    },
    {
      title: '操作',
      render() {
        return (
          <>
            <Button
              type="link"
              size="small"
              onClick={() => setUploadModal(true)}
            >
              修改
            </Button>
            <Button type="link" size="small" onClick={() => setSignModal(true)}>
              签到
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => setGradeModal(true)}
            >
              评分
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
        dataSource={[
          {
            id: '123',
            a: '23',
          },
        ]}
        rowSelection={{
          onSelect() {},
        }}
        actions={{
          left: (
            <>
              <ButtonModal
                title="新增培训记录"
                width={1200}
                buttonProps={{ text: '新增', type: 'primary' }}
                bodyStyle={{ height: 700, overflow: 'auto' }}
              >
                <GeneralModal />
              </ButtonModal>
              <Button type="primary" danger>
                批量删除
              </Button>
            </>
          ),
          right: (
            <Form layout="inline" initialValues={{ a: '1' }}>
              <Form.Item label="培训日期">
                <DatePicker></DatePicker>
              </Form.Item>
              <Form.Item label="培训类型">
                <Select></Select>
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
      />
      <Modal
        title="修改培训记录"
        width={1200}
        visible={uploadModal}
        bodyStyle={{ height: 700, overflow: 'auto' }}
        onCancel={() => setUploadModal(false)}
      >
        <GeneralModal />
      </Modal>
      <Modal
        title="培训签到"
        width={1200}
        visible={signModal}
        bodyStyle={{ height: 700, overflow: 'auto' }}
        onCancel={() => setSignModal(false)}
      >
        <SignModal />
      </Modal>
      <Modal
        title="培训评分"
        width={1200}
        visible={gradeModal}
        bodyStyle={{ height: 700, overflow: 'auto' }}
        onOk={() => {
          console.log(gradeRef.current);
        }}
        onCancel={() => setGradeModal(false)}
      >
        <EvaluateModal ref={gradeRef} />
      </Modal>
    </>
  );
};

const InputWrapper = () => {
  const holder = {
    '1': '请输入培训名称',
    '2': '请输入培训老师',
  };
  const [placeholder, setPlaceHolder] = useState(holder['1']);

  return (
    <Input
      addonBefore={
        <Form.Item noStyle name="a">
          <Select onSelect={e => setPlaceHolder(holder[e])}>
            <Select.Option value="1">培训名称</Select.Option>
            <Select.Option value="2">培训老师</Select.Option>
          </Select>
        </Form.Item>
      }
      placeholder={placeholder}
    ></Input>
  );
};
