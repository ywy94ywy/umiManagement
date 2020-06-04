import { useState } from 'react';
import { Form, Input, Space, Row, Col, Button } from 'antd';
import StaffCard from '@/components/StaffCard';

export default ({ list }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <StaffCard
      title="证书列表"
      buttonProps={{
        text: '编辑',
        type: 'primary',
        disabled: !disabled,
        onClick() {
          setDisabled(false);
        },
      }}
    >
      {list && (
        <>
          <Form labelCol={{ span: 9 }} wrapperCol={{ span: 12 }}>
            <Form.Item name="a" label="身高" rules={[{ required: true }]}>
              <Space>
                <Input disabled={disabled}></Input>
                <span>cm</span>
              </Space>
            </Form.Item>
            <Form.Item name="b" label="体重" rules={[{ required: true }]}>
              <Space>
                <Input disabled={disabled}></Input>
                <span>kg</span>
              </Space>
            </Form.Item>
            <Form.Item name="c" label="血型" rules={[{ required: true }]}>
              <Space>
                <Input disabled={disabled}></Input>
                <span>型</span>
              </Space>
            </Form.Item>
            <Form.Item label="体检报告附件"></Form.Item>
          </Form>
          {!disabled && (
            <Row justify="center" gutter={[12, 12]}>
              <Col>
                <Space>
                  <Button type="primary">本地上传</Button>
                  <Button type="primary">高拍仪上传</Button>
                </Space>
              </Col>
              <Col>
                <Space>
                  <Button type="primary">清空</Button>
                  <Button type="primary">保存</Button>
                  <Button onClick={() => setDisabled(true)}>取消</Button>
                </Space>
              </Col>
            </Row>
          )}
        </>
      )}
    </StaffCard>
  );
};
