import React from 'react';
import { Modal as AntdModal, Button } from 'antd';
import { ModalProps as AntdModalProps, ModalFuncProps } from 'antd/es/Modal';

export interface ModalProps extends AntdModalProps {}
export interface IModal extends React.FC<ModalProps> {
  info: any;
  success: any;
  error: any;
  warn: any;
  warning: any;
  confirm: any;
  destroyAll: any;
}

const Modal: IModal = ({
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

Modal.info = AntdModal.info;
Modal.success = AntdModal.success;
Modal.error = AntdModal.error;
Modal.warn = AntdModal.warn;
Modal.warning = AntdModal.warning;
Modal.destroyAll = AntdModal.destroyAll;

Modal.confirm = ({ onCancel, onOk, ...props }: ModalFuncProps = {}) =>
  AntdModal.confirm({
    okText: '取消',
    cancelText: '确定',
    okButtonProps: {
      type: 'default',
    },
    cancelButtonProps: {
      type: 'primary',
    },
    ...props,
    onOk() {
      onCancel && onCancel();
    },
    onCancel() {
      onOk && onOk();
    },
  });

export default Modal;
