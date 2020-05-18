import React, { useState } from 'react';
import { Modal } from 'lanlinker';
import styles from './style.less';
import classNames from 'classnames';
import { Input } from 'antd';

export default ({
  active = false,
  activeContent = '已绑定',
  inactiveContent = '未绑定',
  showModal = false,
  activeModal,
  activeModalProps,
  inactiveModal,
  inactiveModalProps,
  ...props
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={classNames(styles.authInput, active ? styles.active : styles.inactive)}>
      <Input
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
                : null
            }
          >
            {active ? activeContent : inactiveContent}
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
      {(showModal && active) || (
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
