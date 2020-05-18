import React, { useState } from 'react';
import { List, Avatar, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Modal, ButtonModal } from 'lanlinker';
import classNames from 'classnames';
import styles from './style.less';

const SystemCard = ({ data, type = 'show', bordered = false, details = null }) => {
  const [modal, setModal] = useState(false);
  const grey = type === 'grey' ? styles.greyfilter : '';

  return (
    <List
      footer={
        <div className={classNames(styles.footer, bordered ? styles.borderTop : '')}>
          {type === 'show' && (
            <>
              <span>取消执照</span>
              <span>
                <a>进入</a>
              </span>
            </>
          )}
          {type === 'grey' && (
            <>
              <span>
                <ButtonModal
                  title="选择工程"
                  buttonProps={{
                    text: '申请',
                    type: 'link',
                  }}
                >
                  <Input.Search placeholder="请输入工程名称关键字"></Input.Search>
                  <div style={{ height: 400, overflow: 'auto', marginTop: 10 }}>
                    <div>适当更好SD卡国际化大声公开凉山大火该卡是多个大厦个</div>
                    <div>适当更好SD卡国际化大声公开凉山大火该卡是多个大厦个</div>
                    <div>适当更好SD卡国际化大声公开凉山大火该卡是多个大厦个</div>
                    <div>适当更好SD卡国际化大声公开凉山大火该卡是多个大厦个</div>
                  </div>
                </ButtonModal>
              </span>
            </>
          )}
        </div>
      }
      className={classNames(styles.systemCard, bordered ? styles.border : '')}
    >
      <List.Item className={styles.header}>
        <div className={styles.info}>
          <span
            onClick={() => {
              setModal(true);
            }}
          >
            <InfoCircleOutlined />
          </span>
          <Modal
            title="执照详情"
            visible={modal}
            footer={
              <Button
                type="primary"
                onClick={() => {
                  setModal(false);
                }}
              >
                确定
              </Button>
            }
            onCancel={() => {
              setModal(false);
            }}
          >
            <p>
              <span>用户执照编号：</span>
              <span>{data.number}</span>
            </p>
            <p>
              <span>用户执照名称</span>
              <span>{data.title}</span>
            </p>
            <p>
              <span>用户执照授权开始时间：</span>
              <span>{data.start}</span>
            </p>
            <p>
              <span>用户执照授权结束时间：</span>
              <span>{data.end}</span>
            </p>
          </Modal>
        </div>
        <List.Item.Meta
          avatar={<Avatar src={data.IconFontFont} size={48} className={grey} />}
          title={
            <>
              <div className={classNames(styles.title, grey)}>{data.title}</div>
              <div className={classNames(styles.subtitle, grey)}>{data.title}</div>
            </>
          }
          description={<div className={grey}>租户执照编号：{data.description}</div>}
        />
      </List.Item>
    </List>
  );
};

export default SystemCard;
