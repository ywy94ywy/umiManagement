import React, { useState } from 'react';
import { Modal } from 'lanlinker';
import BankCard from '../BankCard';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, message, Select, Checkbox, Row, Col, Skeleton } from 'antd';
import styles from './style.less';

export default ({ data, loading }) => {
  const [add, showAdd] = useState(false);

  if (!data || loading) {
    return <Skeleton />;
  }

  return (
    <div className={styles.layout}>
      {data.map((v, i) => (
        <BankCard
          key={i}
          title={v.title}
          type={v.type}
          number={v.number}
          first={v.first}
        ></BankCard>
      ))}
      <div
        className={styles.empty}
        onClick={() => {
          showAdd(true);
        }}
      >
        <PlusOutlined />
      </div>
      <Modal
        title="添加银行卡帐号"
        width={730}
        bodyStyle={modalStyle}
        visible={add}
        onOk={() => {
          // 调用修改接口;
          showAdd(false);
          message.success('已成功添加银行卡!');
        }}
        onCancel={() => {
          showAdd(false);
        }}
      >
        <Form style={formStyle} labelCol={{ span: 6 }}>
          <Form.Item label="银行卡号">
            <Input></Input>
          </Form.Item>
          <Form.Item label="银行名称">
            <Select></Select>
          </Form.Item>
          <Form.Item label="支行名称">
            <Row gutter={12}>
              <Col span={8}>
                <Select></Select>
              </Col>
              <Col span={8}>
                <Select></Select>
              </Col>
              <Col span={8}>
                <Select></Select>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6 }}>
            <Checkbox>设为默认银行卡账号</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

const modalStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '300px',
};
const formStyle = { width: '70%' };
