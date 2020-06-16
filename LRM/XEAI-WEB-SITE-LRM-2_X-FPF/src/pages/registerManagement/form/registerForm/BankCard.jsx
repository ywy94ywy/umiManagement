import { useState } from 'react';
import { BankCardList, Modal } from 'lanlinker';
import { Form, Input, Select } from 'antd';

export default ({ value, disabled }) => {
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  return (
    <>
      <BankCardList
        value={value}
        disabled={disabled}
        maxLength={1}
        onCreate={() => {
          setCreateModal(true);
        }}
        onUpdate={() => {
          setUpdateModal(true);
        }}
        onDelete={() => {
          console.log('onDelete');
        }}
      />
      <Modal
        visible={createModal}
        title="添加银行卡账号"
        width={700}
        onCancel={() => setCreateModal(false)}
      >
        <Form style={{ width: '80%', margin: '0 auto' }}>
          <Form.Item label="银行卡号">
            <Input placeholder="请输入银行卡号" />
          </Form.Item>
          <Form.Item label="银行名称">
            <Select />
          </Form.Item>
          <Form.Item label="支行名称">
            <Select />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        visible={updateModal}
        title="修改银行卡账号"
        width={700}
        onCancel={() => setUpdateModal(false)}
      >
        <Form style={{ width: '80%', margin: '0 auto' }}>
          <Form.Item label="银行卡号">
            <Input placeholder="请输入银行卡号" />
          </Form.Item>
          <Form.Item label="银行名称">
            <Select />
          </Form.Item>
          <Form.Item label="支行名称">
            <Select />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
