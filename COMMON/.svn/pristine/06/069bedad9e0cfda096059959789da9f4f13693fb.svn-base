import React from 'react';
import { Modal as AntdModal, Button } from 'antd';
import { ModalProps as AntdModalProps } from 'antd/es/Modal';

export interface ModalProps extends AntdModalProps {}

const Modal: React.FC<ModalProps> = ({
  okText,
  onOk,
  cancelText,
  onCancel,
  children,
  ...props
}) => {
  return (
    <AntdModal
      footer={
        <>
          <Button
            type="primary"
            onClick={e => {
              onOk && onOk(e);
            }}
          >
            {okText ? okText : '确定'}
          </Button>
          <Button
            onClick={e => {
              onCancel && onCancel(e);
            }}
          >
            {cancelText ? cancelText : '取消'}
          </Button>
        </>
      }
      onOk={e => {
        onOk && onOk(e);
      }}
      onCancel={e => {
        onCancel && onCancel(e);
      }}
      {...props}
    >
      {children}
    </AntdModal>
  );
};

export default Modal;
