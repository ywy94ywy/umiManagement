/**
 * title: 模态框
 * desc: 定制化footer，确定在左，取消在右
 */
import React, { useState } from 'react';
import { Modal } from 'lanlinker';
import { Button } from 'antd';

export default () => {
  const [modal, showModal] = useState(false);

  return (
    <>
      <Button onClick={() => showModal(true)}>模态框</Button>
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
    </>
  );
};
