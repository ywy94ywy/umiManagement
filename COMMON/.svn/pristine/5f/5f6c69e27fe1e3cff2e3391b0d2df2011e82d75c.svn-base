import React, { useState } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';
import Modal, { ModalProps } from './Modal';

interface IButtonProps extends ButtonProps {
  text?: React.ReactNode;
}
export interface ButtonModalProps extends Omit<ModalProps, 'onOk'> {
  buttonProps?: IButtonProps;
  onOk?: (e: React.MouseEvent<HTMLElement>, close: () => void) => void; // 为确定按钮添加关闭模态框回调
}

const ButtonModal: React.FC<ButtonModalProps> = ({
  buttonProps: { text = '按钮', onClick, ...buttonRest } = {},
  children,
  onOk,
  onCancel,
  ...modalRest
}) => {
  const [modal, showModal] = useState(false);

  return (
    <>
      <Button
        onClick={e => {
          onClick && onClick(e);
          showModal(true);
        }}
        {...buttonRest}
      >
        {text}
      </Button>
      <Modal
        visible={modal}
        onOk={e => {
          onOk && onOk(e, () => showModal(false));
        }}
        onCancel={e => {
          onCancel && onCancel(e);
          showModal(false);
        }}
        {...modalRest}
      >
        {children}
      </Modal>
    </>
  );
};
export default ButtonModal;
