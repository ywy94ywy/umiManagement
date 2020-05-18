/**
 * @module 绑定输入框
 * @todo 依赖于antd-Form
 */
import React, { useState } from 'react';
import { Modal } from '../Modal';
import styles from './style.less';
import classNames from 'classnames';
import { Input } from 'antd';
import { InputProps } from 'antd/es/input';
import { ModalProps } from 'antd/es/modal';

interface BindInputProps extends InputProps {
  active: Boolean;
  activeTitle: string;
  inactiveTitle: string;
  showModal: Boolean;
  activeModal: React.ReactNode;
  activeModalProps: ModalProps;
  inactiveModal: React.ReactNode;
  inactiveModalProps: ModalProps;
}
const BindInput: React.FC<BindInputProps> = ({
  active = false,
  activeTitle = '已绑定',
  inactiveTitle = '未绑定',
  showModal = false,
  activeModal,
  activeModalProps,
  inactiveModal,
  inactiveModalProps,
  value,
  onChange,
  ...props
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={classNames(
        styles.authInput,
        active ? styles.active : styles.inactive,
      )}
    >
      <Input
        value={value}
        onChange={e => {
          onChange && onChange(e);
        }}
        addonAfter={
          <div
            onClick={() => {
              setShow(true);
            }}
            style={
              showModal
                ? {
                    cursor: 'pointer',
                  }
                : {}
            }
          >
            {active ? activeTitle : inactiveTitle}
          </div>
        }
        {...props}
      />
      {showModal && active && (
        <Modal
          visible={show}
          onCancel={() => {
            setShow(false);
          }}
          {...activeModalProps}
        >
          {activeModal}
        </Modal>
      )}
      {showModal && !active && (
        <Modal
          visible={show}
          onCancel={() => {
            setShow(false);
          }}
          {...inactiveModalProps}
        >
          {inactiveModal}
        </Modal>
      )}
    </div>
  );
};

export default BindInput;
