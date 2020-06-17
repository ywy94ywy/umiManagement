/**
 * @module IC卡操作
 */
import { useState } from 'react';
import { Modal, ButtonModal, Form, IconFont } from 'lanlinker';
import { message, Button, Space, Typography, Radio, DatePicker } from 'antd';
import PositionCards from '../../PositionSelect/PositionCards';

export default ({ status }) => {
  return (
    <Space>
      {status === '1' && <CreateCard />}
      {status === '2' && (
        <>
          <CancelCard />
          <UpdateCard />
        </>
      )}
    </Space>
  );
};

// 制卡
const CreateCard = () => {
  const [cardModal, setCardModal] = useState(false);
  // const [positionModal, setPositionModal] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [form] = Form.useForm();
  // const positonRef = useRef();

  return (
    <>
      <Button type="primary" size="small" onClick={() => setCardModal(true)}>
        制卡
      </Button>
      <Modal
        title="确认卡片信息"
        width={700}
        visible={cardModal}
        onOk={() => {
          // setPositionModal(true);
          setCardModal(false);
          message.success('IC卡授权成功!');
        }}
        onCancel={() => setCardModal(false)}
      >
        <Form
          form={form}
          labelCol={{ flex: '100px' }}
          wrapperCol={{ span: 18 }}
          columns={2}
        >
          <Form.Item label="卡号">名字</Form.Item>
          <Form.Item>
            <a href="#" onClick={e => e.preventDefault()}>
              <IconFont
                type="&#xe819;"
                style={{
                  position: 'absolute',
                  top: -20,
                  right: 0,
                  fontSize: 85,
                }}
              />
            </a>
          </Form.Item>
          <Form.Item label="卡片种类">卡号</Form.Item>
          <Form.Item colSpan={2} noStyle>
            <h3>
              <Typography.Text type="warning" style={{ paddingLeft: 30 }}>
                是否将上卡与下方该员工绑定？
              </Typography.Text>
            </h3>
          </Form.Item>
          <Form.Item label="员工姓名">名字</Form.Item>
          <Form.Item label="身份证号">卡号</Form.Item>
          <Form.Item
            name="1"
            label="卡片期限"
            rules={[{ required: true }]}
            colSpan={2}
          >
            <Radio.Group
              onChange={e => {
                e.target.value === '3' ? setShowTime(true) : setShowTime(false);
              }}
            >
              <Radio value="1">劳动合同期限</Radio>
              <Radio value="2">永久期限</Radio>
              <Radio value="3">自定义</Radio>
            </Radio.Group>
          </Form.Item>
          {showTime && (
            <Form.Item name="2" label="启用时间" rules={[{ required: true }]}>
              <DatePicker />
            </Form.Item>
          )}
          {showTime && (
            <Form.Item
              name="3"
              label="失效时间"
              rules={[{ required: true }]}
              labelCol={{ pull: 4 }}
              wrapperCol={{ pull: 4 }}
            >
              <DatePicker />
            </Form.Item>
          )}
          <Form.Item
            name="4"
            label="授权位置"
            rules={[{ required: true }]}
            colSpan={2}
          >
            <PositionCards />
          </Form.Item>
        </Form>
      </Modal>
      {/* <Modal
        title="授权位置权限"
        width={600}
        visible={positionModal}
        onOk={() => {
          console.log(positonRef.current);
          setCardModal(false);
          setPositionModal(false);
          message.success('IC卡授权成功!');
        }}
        onCancel={() => {
          setCardModal(false);
          setPositionModal(false);
        }}
      >
        <PositionCards ref={positonRef} />
      </Modal> */}
    </>
  );
};

// 退卡
const CancelCard = () => {
  return (
    <ButtonModal
      title="退卡"
      width={600}
      buttonProps={{
        text: '退卡',
        type: 'primary',
        danger: true,
        size: 'small',
      }}
      onOk={(_, close) => {
        close();
        message.success('IC卡退卡成功！');
      }}
    >
      <h3 style={{ textAlign: 'center', margin: '30px 0' }}>
        <Typography.Text type="danger">
          即将清除卡片授权信息，退卡后将失去出入门区权限！
        </Typography.Text>
      </h3>
    </ButtonModal>
  );
};

// 修改授权
const UpdateCard = () => {
  const [form] = Form.useForm();
  const [showTime, setShowTime] = useState(false);

  return (
    <ButtonModal
      title="修改授权"
      width={700}
      buttonProps={{ text: '修改', type: 'primary', size: 'small' }}
      onOk={(_, close) => {
        console.log(form.getFieldsValue());
        close();
        message.success('IC卡修改授权成功！');
      }}
    >
      <Form
        form={form}
        labelCol={{ flex: '100px' }}
        wrapperCol={{ span: 18 }}
        columns={2}
      >
        <Form.Item
          name="1"
          label="卡片期限"
          rules={[{ required: true }]}
          colSpan={2}
        >
          <Radio.Group
            onChange={e => {
              e.target.value === '3' ? setShowTime(true) : setShowTime(false);
            }}
          >
            <Radio value="1">劳动合同期限</Radio>
            <Radio value="2">永久期限</Radio>
            <Radio value="3">自定义</Radio>
          </Radio.Group>
        </Form.Item>
        {showTime && (
          <Form.Item name="2" label="启用时间" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
        )}
        {showTime && (
          <Form.Item
            name="3"
            label="失效时间"
            rules={[{ required: true }]}
            labelCol={{ pull: 4 }}
            wrapperCol={{ pull: 4 }}
          >
            <DatePicker />
          </Form.Item>
        )}
        <Form.Item
          name="4"
          label="授权位置"
          rules={[{ required: true }]}
          colSpan={2}
        >
          <PositionCards />
        </Form.Item>
      </Form>
    </ButtonModal>
  );
};
