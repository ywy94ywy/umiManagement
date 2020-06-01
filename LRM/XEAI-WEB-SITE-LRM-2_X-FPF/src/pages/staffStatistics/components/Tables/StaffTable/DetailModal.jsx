import { Collapse, Descriptions, Space, Row, Col, Button } from 'antd';
import styles from './style.less';

const { Panel } = Collapse;

export default () => {
  return (
    <>
      <Row justify="end" gutter={[12, 12]}>
        <Col>
          <Button type="primary">查看二维码</Button>
        </Col>
        <Col>
          <Button type="primary">打印</Button>
        </Col>
        <Col span={24}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <LCollapse defaultActiveKey={['1']}>
              <Panel header="This is panel header 1" key="1">
                <Row>
                  <Col flex="0 0 120px">tupian</Col>
                  <Col flex="1">
                    <Descriptions bordered>
                      <Descriptions.Item label="Product">
                        Cloud Database
                      </Descriptions.Item>
                      <Descriptions.Item label="Billing Mode">
                        Prepaid
                      </Descriptions.Item>
                      <Descriptions.Item label="Automatic Renewal">
                        YES
                      </Descriptions.Item>
                      <Descriptions.Item label="Product">
                        Cloud Database
                      </Descriptions.Item>
                      <Descriptions.Item label="Billing Mode" span={2}>
                        Prepaid
                      </Descriptions.Item>
                      <Descriptions.Item label="Product">
                        Cloud Database
                      </Descriptions.Item>
                      <Descriptions.Item label="Billing Mode" span={2}>
                        Prepaid
                      </Descriptions.Item>
                      <Descriptions.Item label="Product">
                        Cloud Database
                      </Descriptions.Item>
                      <Descriptions.Item label="Billing Mode" span={2}>
                        Prepaid
                      </Descriptions.Item>
                      <Descriptions.Item label="Product">
                        Cloud Database
                      </Descriptions.Item>
                      <Descriptions.Item label="Billing Mode" span={2}>
                        Prepaid
                      </Descriptions.Item>
                      <Descriptions.Item label="Billing Mode" span={3}>
                        Prepaid
                      </Descriptions.Item>
                    </Descriptions>
                  </Col>
                </Row>
              </Panel>
            </LCollapse>
            <LCollapse defaultActiveKey={['1']}>
              <Panel header="This is panel header 1" key="1">
                <div>{12}</div>
              </Panel>
            </LCollapse>
          </Space>
        </Col>
      </Row>
    </>
  );
};

const LCollapse = ({ children, ...props }) => (
  <Collapse className={styles.collapse} {...props}>
    {children}
  </Collapse>
);
