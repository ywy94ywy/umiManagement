import React, { useState } from 'react';
import { List, Avatar, Input, Button, Form } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Modal, ButtonModal } from 'lanlinker';
import classNames from 'classnames';
import styles from './style.less';

const SystemCard = ({ data, type = '', projectList = [] }) => {
  const [infoModal, setInfoModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const grey = type === 'unApplied' ? styles.greyfilter : '';

  return (
    <List
      className={styles.systemCard}
      footer={
        <div className={styles.footer}>
          {type === 'applied' && (
            <>
              <div className={styles.item}>
                <span
                  onClick={() => {
                    // todo 取消接口
                  }}
                >
                  取消执照
                </span>
              </div>
              <div className={styles.item}>
                <span
                  onClick={() => {
                    // todo 进入
                  }}
                >
                  <a>进入</a>
                </span>
              </div>
            </>
          )}
          {type === 'unApplied' && (
            <div className={styles.item}>
              <ButtonModal
                title="选择工程"
                buttonProps={{
                  text: '申请',
                  type: 'link',
                  onClick() {
                    setProjectModal(true);
                  },
                }}
                onCancel={() => setProjectModal(false)}
                visible={projectModal}
                footer={null}
                className={styles.projectModal}
              >
                <Input.Search placeholder="请输入工程名称关键字"></Input.Search>
                <List
                  dataSource={projectList}
                  renderItem={item => (
                    <List.Item
                      onClick={() => {
                        // 接口
                        console.log(item);
                        setProjectModal(false);
                      }}
                    >
                      <List.Item.Meta title={item.title} />
                    </List.Item>
                  )}
                  style={{ height: 350, overflow: 'auto', marginTop: 16 }}
                />
              </ButtonModal>
            </div>
          )}
        </div>
      }
    >
      <List.Item className={styles.header}>
        <div className={styles.info}>
          <span
            onClick={() => {
              setInfoModal(true);
            }}
          >
            <InfoCircleOutlined />
          </span>
          <Modal
            title="执照详情"
            visible={infoModal}
            footer={
              <Button type="primary" onClick={() => setInfoModal(false)}>
                确定
              </Button>
            }
            onCancel={() => setInfoModal(false)}
          >
            <Form>
              <Form.Item label="用户执照编号">{data.number}</Form.Item>
              <Form.Item label="用户执照名称">{data.title}</Form.Item>
              <Form.Item label="用户执照授权开始时间">{data.start}</Form.Item>
              <Form.Item label="用户执照授权结束时间">{data.end}</Form.Item>
            </Form>
          </Modal>
        </div>
        <List.Item.Meta
          avatar={<Avatar src={data.icon} size={48} className={grey} />}
          title={
            <>
              <div className={classNames(styles.title, grey)} title={data.title}>
                {data.title}
              </div>
              <div className={classNames(styles.subtitle, grey)} title={data.subtitle}>
                {data.subtitle}
              </div>
            </>
          }
          description={
            <div className={classNames(styles.license, grey)} title={data.description}>
              租户执照编号：{data.description}
            </div>
          }
        />
      </List.Item>
    </List>
  );
};

export default SystemCard;
