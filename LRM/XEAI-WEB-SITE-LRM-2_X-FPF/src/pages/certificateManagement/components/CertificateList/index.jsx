import { useState } from 'react';
import { ButtonModal, IconFont, Modal } from 'lanlinker';
import {
  Space,
  Card,
  Row,
  Col,
  Button,
  Input,
  Form,
  DatePicker,
  Upload,
} from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import EditTable from './EditTable';
import styles from './style.less';

export default () => {
  const [modal, setModal] = useState(false);

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Card size="small">
        <Row>
          <Col flex="74px">
            <IconFont type="&#xe683;" className={styles.icon} />
          </Col>
          <Col flex="1">
            <h4 className={styles.title}>塔吊指挥（特殊工种）资格证书</h4>
            <div className={styles.detail}>证书编号：</div>
            <div className={styles.detail}>有效日期：</div>
            <div className={styles.detail}>失效日期：</div>
            <Space style={{ marginTop: 8 }}>
              <ButtonModal
                title="证书流水"
                buttonProps={{
                  text: '证书流水',
                  type: 'primary',
                }}
              >
                <EditTable />
              </ButtonModal>
              <Button danger>删除</Button>
            </Space>
          </Col>
        </Row>
      </Card>
      <Card
        size="small"
        className={styles.create}
        onClick={() => setModal(true)}
      >
        <PlusOutlined />
      </Card>
      <Modal
        visible={modal}
        title="新增资格证书"
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        <Form style={{ width: '75%', margin: '0 auto' }} labelCol={{ span: 6 }}>
          <Form.Item label="证书编号">
            <Input placeholder="请输入证书编号" />
          </Form.Item>
          <Form.Item name="a" label="证书名称" rules={[{ required: true }]}>
            <Input placeholder="请输入证书名称" />
          </Form.Item>
          <Form.Item name="b" label="有效日期" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item name="c" label="失效日期" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="附件"
            extra="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
          >
            <Upload>
              <Button>
                <UploadOutlined />
                上传文件
              </Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
};
