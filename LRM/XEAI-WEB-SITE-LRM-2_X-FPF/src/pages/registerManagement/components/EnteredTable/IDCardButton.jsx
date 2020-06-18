import { useState } from 'react';
import { Modal, Form } from 'lanlinker';
import { Button, message, Tree } from 'antd';
import registerForm from '../../form/registerForm';
import scanner from '../../img/scanner.png';

export default () => {
  const [editing, setEditing] = useState(false);
  const [scannerModal, setScannerModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [enterModal, setEnterModal] = useState(false);
  const [form] = Form.useForm();

  return (
    <>
      <Button onClick={() => setScannerModal(true)}>刷身份证登记</Button>
      <Modal
        visible={scannerModal}
        footer={null}
        onCancel={() => setScannerModal(false)}
      >
        <img
          src={scanner}
          style={{ margin: '50px auto', display: 'block' }}
          onClick={() => {
            setScannerModal(false);
            setRegisterModal(true);
          }}
        />
        <p style={{ textAlign: 'center' }}>扫描身份证，快速确定入场人员信息</p>
      </Modal>
      <Modal
        title="刷身份证登记员工信息"
        width={1200}
        centered
        bodyStyle={{ maxHeight: 700, overflow: 'auto' }}
        visible={registerModal}
        footer={
          editing ? (
            <>
              <Button type="primary" onClick={() => setEditing(false)}>
                保存
              </Button>
              <Button onClick={() => setEditing(false)}>取消</Button>
            </>
          ) : (
            <>
              <Button type="primary" onClick={() => setEditing(true)}>
                修改
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  setRegisterModal(false);
                  setEnterModal(true);
                }}
              >
                进场
              </Button>
              <Button onClick={() => setRegisterModal(false)}>取消</Button>
            </>
          )
        }
        // onOk={async () => {
        //   console.log(form.getFieldsValue());
        //   // const res = await form.validateFields();
        // }}
        onCancel={() => setRegisterModal(false)}
      >
        <Form
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
          configForm={registerForm({ form, editing })}
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
