/**
 * @module 登记管理
 */
import { useState } from 'react';
import { PageHeaderWrapper, Modal, Form } from 'lanlinker';
import { Card, Row, Col, Button } from 'antd';
import EnteredTree from './components/EnteredTree';
import EnteredTable from './components/EnteredTable';
import PendingTree from './components/PendingTree';
import PendingTable from './components/PendingTable';
import registerForm from './form/registerForm';

export default () => {
  const [form] = Form.useForm();
  const [modalInfo, setModalInfo] = useState({ visible: false, info: {} });

  return (
    <PageHeaderWrapper>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card title="待进场员工信息">
            <Row gutter={12}>
              <Col flex="250px" style={{ overflow: 'hidden' }}>
                <Button
                  type="primary"
                  block
                  onClick={() => {
                    setModalInfo({ ...modalInfo, visible: true });
                    form.resetFields();
                  }}
                >
                  手工登记
                </Button>
                <Card
                  size="small"
                  bodyStyle={{ paddingTop: 0 }}
                  style={{ marginTop: '12px' }}
                >
                  <EnteredTree />
                </Card>
              </Col>
              <Col flex="1" style={{ overflow: 'hidden' }}>
                <EnteredTable />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={24}>
          <Card title="已进场员工信息">
            <Row gutter={12}>
              <Col flex="250px" style={{ overflow: 'hidden' }}>
                <Card size="small">
                  <PendingTree />
                </Card>
              </Col>
              <Col flex="1" style={{ overflow: 'hidden' }}>
                <PendingTable />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Modal
        title="手工登记员工信息"
        width={1200}
        centered
        bodyStyle={{ maxHeight: 700, overflow: 'auto' }}
        visible={modalInfo.visible}
        onOk={async () => {
          console.log(form.getFieldsValue());
          // const res = await form.validateFields();
        }}
        onCancel={() => setModalInfo({ ...modalInfo, visible: false })}
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
            // card: [
            //   {
            //     userBankName: 'asf',
            //     code: 'a',
            //     userBankAccountNumber: '1234214',
            //   },
            // ],
          }}
          labelCol={{ flex: '130px' }}
          style={{ width: '80%', margin: '0 auto' }}
          configForm={registerForm({ form, editing: true })}
        />
      </Modal>
    </PageHeaderWrapper>
  );
};

// const columnsP = [
//   {
//     title: '姓名',
//     dataIndex: 'a',
//   },
//   {
//     title: '性别',
//     dataIndex: 'a',
//   },
//   {
//     title: '身份证号',
//     dataIndex: 'a',
//   },
//   {
//     title: '劳务公司',
//     dataIndex: 'a',
//   },
//   {
//     title: '劳务队伍',
//     dataIndex: 'a',
//   },
//   {
//     title: '劳务班组',
//     dataIndex: 'a',
//   },
//   {
//     title: '岗位',
//     dataIndex: 'a',
//   },
// ];
