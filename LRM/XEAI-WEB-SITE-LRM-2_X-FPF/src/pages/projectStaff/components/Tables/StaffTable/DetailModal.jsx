import { ButtonModal, Modal } from 'lanlinker';
import { Collapse, Descriptions, Space, Row, Col, Button } from 'antd';
import profile from './profile.png';
import styles from './style.less';

const { Panel } = Collapse;

export default ({ staffModalInfo, setStaffModalInfo }) => {
  return (
    <Modal
      title="员工档案"
      visible={staffModalInfo.visible}
      onCancel={() => setStaffModalInfo({ visible: false })}
      footer={null}
      width={950}
    >
      <Row justify="end" gutter={[12, 12]} className={styles.detailModal}>
        <Col>
          <Button type="primary">查看二维码</Button>
        </Col>
        <Col>
          <Button type="primary">打印</Button>
        </Col>
        <Col span={24}>
          <Space direction="vertical" style={{ width: '100%' }} size="middle">
            {/* 员工基本信息 */}
            <Collapse defaultActiveKey={['1']} className={styles.collapse}>
              <Panel header="员工基本信息" key="1">
                <Row>
                  <Col flex="0 0 120px" style={{ padding: 5 }}>
                    <img src={profile} alt="" width={110} />
                  </Col>
                  <Col flex="1">
                    <Descriptions bordered>
                      <Descriptions.Item label="姓名">
                        Cloud Database
                      </Descriptions.Item>
                      <Descriptions.Item label="性别">
                        Prepaid
                      </Descriptions.Item>
                      <Descriptions.Item label="民族">YES</Descriptions.Item>
                      <Descriptions.Item label="年龄">
                        Cloud Database
                      </Descriptions.Item>
                      <Descriptions.Item label="籍贯" span={2}>
                        Prepaid
                      </Descriptions.Item>
                      <Descriptions.Item label="政治面貌">
                        Cloud Database
                      </Descriptions.Item>
                      <Descriptions.Item label="身份证号" span={2}>
                        Prepaid
                      </Descriptions.Item>
                      <Descriptions.Item label="文化程度">
                        Cloud Database
                      </Descriptions.Item>
                      <Descriptions.Item label="婚姻状况" span={2}>
                        Prepaid
                      </Descriptions.Item>
                      <Descriptions.Item label="特长">
                        Cloud Database
                      </Descriptions.Item>
                      <Descriptions.Item label="常用电话" span={2}>
                        Prepaid
                      </Descriptions.Item>
                      <Descriptions.Item label="联系地址" span={3}>
                        Prepaid
                      </Descriptions.Item>
                    </Descriptions>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
            {/* 员工扩展信息 */}
            <Collapse defaultActiveKey={['1']} className={styles.collapse}>
              <Panel header="员工扩展信息" key="1">
                <Descriptions bordered column={2}>
                  <Descriptions.Item label="开户行银行">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="银行分行名称">
                    Prepaid
                  </Descriptions.Item>
                  <Descriptions.Item label="银行账号">YES</Descriptions.Item>
                  <Descriptions.Item label="社保账号">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="紧急联系人">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="身份关系">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="联系人性别">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="联系人电话">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="购买意外险">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="有重大病史">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="证件照（正面）">
                    <PreviewDownLoad />
                  </Descriptions.Item>
                  <Descriptions.Item label="证件照（反面）">
                    <PreviewDownLoad />
                  </Descriptions.Item>
                </Descriptions>
              </Panel>
            </Collapse>
            {/* 员工工作信息 */}
            <Collapse defaultActiveKey={['1']} className={styles.collapse}>
              <Panel header="员工工作信息" key="1">
                <Descriptions bordered>
                  <Descriptions.Item label="是否加入工会">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="加入工会时间">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="开始从业时间">
                    Cloud Database
                  </Descriptions.Item>
                </Descriptions>
                {[1, 2, 3].map((v, i) => (
                  <Descriptions
                    bordered
                    column={2}
                    style={{ marginTop: 8 }}
                    key={i}
                  >
                    <Descriptions.Item label="在职项目" span={2}>
                      Cloud Database
                    </Descriptions.Item>
                    <Descriptions.Item label="劳务公司">
                      Cloud Database
                    </Descriptions.Item>
                    <Descriptions.Item label="劳务队伍">
                      Cloud Database
                    </Descriptions.Item>
                    <Descriptions.Item label="劳务班组">
                      Cloud Database
                    </Descriptions.Item>
                    <Descriptions.Item label="是否班组长">
                      Cloud Database
                    </Descriptions.Item>
                    <Descriptions.Item label="岗位">
                      Cloud Database
                    </Descriptions.Item>
                    <Descriptions.Item label="工号">
                      Cloud Database
                    </Descriptions.Item>
                    <Descriptions.Item label="进场时间">
                      Cloud Database
                    </Descriptions.Item>
                    <Descriptions.Item label="退场时间">
                      Cloud Database
                    </Descriptions.Item>
                  </Descriptions>
                ))}
              </Panel>
            </Collapse>
            {/* 资格证书信息 */}
            <Collapse defaultActiveKey={['1']} className={styles.collapse}>
              <Panel header="资格证书信息" key="1">
                <Descriptions bordered column={2}>
                  <Descriptions.Item label="证书种类">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="证书类型">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="资质等级">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="资质证书状态">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="证书有效期（至）">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="附件">
                    <PreviewDownLoad />
                  </Descriptions.Item>
                </Descriptions>
              </Panel>
            </Collapse>
            {/* 社会关系信息 */}
            <Collapse defaultActiveKey={['1']} className={styles.collapse}>
              <Panel header="社会关系信息" key="1">
                {[1, 2].map((v, i) => (
                  <Descriptions bordered column={2} key={i}>
                    <Descriptions.Item label="姓名">
                      Cloud Database
                    </Descriptions.Item>
                    <Descriptions.Item label="身份关系">
                      Cloud Database
                    </Descriptions.Item>
                    <Descriptions.Item label="性别">
                      Cloud Database
                    </Descriptions.Item>
                    <Descriptions.Item label="联系人电话">
                      Cloud Database
                    </Descriptions.Item>
                  </Descriptions>
                ))}
              </Panel>
            </Collapse>
            {/* 员工体检信息 */}
            <Collapse defaultActiveKey={['1']} className={styles.collapse}>
              <Panel header="员工体检信息" key="1">
                <Descriptions bordered column={2}>
                  <Descriptions.Item label="身高">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="体重">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="血型">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="血压">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="裸眼视力（左）">
                    Cloud Database
                  </Descriptions.Item>
                  <Descriptions.Item label="裸眼视力（右）">
                    Cloud Database
                  </Descriptions.Item>
                </Descriptions>
              </Panel>
            </Collapse>
          </Space>
        </Col>
      </Row>
    </Modal>
  );
};

const PreviewDownLoad = ({ imgSrc }) => {
  return (
    <Space>
      <ButtonModal
        title="预览"
        footer={null}
        buttonProps={{ text: '预览', type: 'primary', size: 'small' }}
      >
        <img src={imgSrc} alt="预览图片"></img>
      </ButtonModal>
      <Button type="primary" size="small">
        下载
      </Button>
    </Space>
  );
};
