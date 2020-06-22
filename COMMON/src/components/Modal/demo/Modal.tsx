/**
 * title: 模态框
 * desc: 定制化footer，确定在左，取消在右
 */
import React, { useState } from 'react';
import { Modal } from 'lanlinker';
import { Button, Space } from 'antd';

export default () => {
  const [modal, showModal] = useState(false);

  return (
    <Space>
      <Button onClick={() => showModal(true)}>模态框</Button>
      <Button
        onClick={() => {
          Modal.confirm({
            title: '测试',
            onOk: () => {
              console.log('确定');
            },
            oncancel: () => {
              console.log('取消');
            },
          });
        }}
      >
        确认框
      </Button>
      <Button
        onClick={() => {
          Modal.error({
            title: '123',
          });
        }}
      >
        错误确认框
      </Button>
      <Modal
        title="标题"
        visible={modal}
        onOk={() => {
          showModal(false);
        }}
        onCancel={() => showModal(false)}
      >
        内容
      </Modal>
    </Space>
  );
};
