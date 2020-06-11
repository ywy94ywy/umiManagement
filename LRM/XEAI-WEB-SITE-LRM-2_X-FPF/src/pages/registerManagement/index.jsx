/**
 * @module 登记管理
 */
import { PageHeaderWrapper, ButtonModal, Form } from 'lanlinker';
import { Card, Row, Col } from 'antd';
import EnteredTree from './components/EnteredTree';
import EnteredTable from './components/EnteredTable';
import PendingTree from './components/PendingTree';
import PendingTable from './components/PendingTable';
import registerForm from './form/registerForm';

export default () => {
  return (
    <PageHeaderWrapper>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card title="待进场员工信息">
            <Row gutter={12}>
              <Col flex="250px" style={{ overflow: 'hidden' }}>
                <ButtonModal
                  title="手工登记员工信息"
                  width={1200}
                  centered
                  bodyStyle={{ maxHeight: 700, overflow: 'auto' }}
                  buttonProps={{
                    text: '手工登记',
                    type: 'primary',
                    block: true,
                  }}
                >
                  <Form
                    columns={2}
                    initialValues={{ 4: '1', 10: '1' }}
                    labelCol={{ flex: '130px' }}
                    style={{ width: '80%', margin: '0 auto' }}
                    configForm={registerForm()}
                  />
                </ButtonModal>
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
