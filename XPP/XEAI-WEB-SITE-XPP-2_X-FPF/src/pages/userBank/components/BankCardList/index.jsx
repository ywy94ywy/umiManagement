import { useState } from 'react';
import { Modal } from 'lanlinker';
import BankCard from '../BankCard';
import { useRequest } from 'umi';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, message, Select, Checkbox, Skeleton } from 'antd';
import { createBankCard } from '../../servers';
import styles from './style.less';

export default ({ data, loading, runFetch }) => {
  if (!data || loading) {
    return <Skeleton />;
  }

  return (
    <div className={styles.layout}>
      {data.map((v, i) => (
        <BankCard
          key={i}
          title={v.userBankName}
          type={v.type}
          number={v.userBankAccountNumber}
          first={v.userBankAccountNumberIsDefault}
        />
      ))}
      <AddCard runFetch={runFetch} />
    </div>
  );
};

const AddCard = ({ runFetch }) => {
  const [add, showAdd] = useState(false);
  const [form] = Form.useForm();
  const { run: runCreate } = useRequest(createBankCard, {
    manual: true,
  });

  return (
    <>
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
        onOk={async () => {
          // 调用修改接口;

          const res = await form.validateFields();
          const data = {
            ...res,
            userBankCode: 'test',
            userBankBranchCode: 'test',
            userId: 1,
          };
          console.log(data);
          runCreate(data).then(res => runFetch(1));
          // showAdd(false);
          message.success('已成功添加银行卡!');
        }}
        onCancel={() => {
          showAdd(false);
        }}
      >
        <Form form={form} style={formStyle} labelCol={{ span: 6 }}>
          <Form.Item name="userBankAccountNumber" label="银行卡号">
            <Input></Input>
          </Form.Item>
          <Form.Item name="userBankName" label="银行名称">
            <Select>
              <Select.Option value="中国工商银行">中国工商银行</Select.Option>
              <Select.Option value="中国建设银行">中国建设银行</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="userBankBranchName" label="支行名称">
            <Select>
              <Select.Option value="名称1">名称1</Select.Option>
              <Select.Option value="名称2">名称2</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="userBankAccountNumberIsDefault"
            valuePropName="checked"
            wrapperCol={{ offset: 6 }}
          >
            <Checkbox>设为默认银行卡账号</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const modalStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '300px',
};
const formStyle = { width: '70%' };
