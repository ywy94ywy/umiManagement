/**
 * @module 消息中心
 * @todo 消息详情
 * @todo 多行省略
 */
import React from 'react';
import { Badge, Popover, Tabs, List, Avatar } from 'antd';
import { BellOutlined } from "@ant-design/icons";
import classNames from 'classnames';
import clear from './clear.svg';
import styles from './style.less';

export interface IMessage {
  id: number;
  avatar: string;
  title: string;
  name: string;
  event: string;
  time: string;
  readed: Boolean;
}
export interface IPrompts {
  id: number;
  description: string;
  time: string;
  readed: Boolean;
}
export interface NotificationProps {
  messages?: Array<IMessage>;
  prompts?: Array<IPrompts>;
  readMessage?: (messageItem: IMessage) => void;
  readPrompt?: (promptsItem: IPrompts) => void;
  clearMessages?: () => void;
  clearPrompts?: () => void;
}

const Notification: React.FC<NotificationProps> = ({ ...props }) => {
  const { messages = [], prompts = [] } = props;

  const UnreadedMessage = messages.filter(v => !v.readed).length;
  const UnreadedPrompts = prompts.filter(v => !v.readed).length;

  return (
    <Popover
      overlayClassName={styles.notificationPanel}
      content={
        <Content
          {...props}
          UnreadedMessage={UnreadedMessage}
          UnreadedPrompts={UnreadedPrompts}
        ></Content>
      }
      placement="bottomRight"
      trigger="click"
    >
      <div className={styles.notification}>
        <Badge count={UnreadedMessage + UnreadedPrompts}>
          <BellOutlined />
        </Badge>
      </div>
    </Popover>
  );
};

export interface ContentProps extends NotificationProps {
  UnreadedMessage?: number;
  UnreadedPrompts?: number;
}
const Content: React.FC<ContentProps> = ({
  messages,
  prompts,
  readMessage,
  readPrompt,
  clearMessages,
  clearPrompts,
  UnreadedMessage,
  UnreadedPrompts,
}) => {
  return (
    <Tabs>
      <Tabs.TabPane tab={`通知 (${UnreadedMessage})`} key="通知">
        <List
          className={styles.list}
          dataSource={messages}
          locale={{
            emptyText: <Empty></Empty>,
          }}
          size="small"
          renderItem={item => (
            <List.Item
              className={classNames(styles.listItem, item.readed && styles.itemReaded)}
              onClick={() => {
                readMessage && readMessage(item);
              }}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.title}
                description={
                  <>
                    <div>姓名：{item.name}</div>
                    <div>事件：{item.event}</div>
                    <div>{item.time}</div>
                  </>
                }
              />
            </List.Item>
          )}
        />
        {messages && messages.length > 0 && (
          <div
            className={styles.clear}
            onClick={() => {
              clearMessages && clearMessages();
            }}
          >
            清空消息
          </div>
        )}
      </Tabs.TabPane>
      <Tabs.TabPane tab={`提醒 (${UnreadedPrompts})`} key="提醒">
        <List
          className={styles.list}
          dataSource={prompts}
          locale={{
            emptyText: <Empty></Empty>,
          }}
          renderItem={item => (
            <List.Item
              className={classNames(styles.listItem, item.readed && styles.itemReaded)}
              onClick={() => {
                readPrompt && readPrompt(item);
              }}
            >
              <List.Item.Meta title={item.description} description={item.time} />
            </List.Item>
          )}
        />
        {prompts && prompts.length > 0 && (
          <div
            className={styles.clear}
            onClick={() => {
              clearPrompts && clearPrompts();
            }}
          >
            清空消息
          </div>
        )}
      </Tabs.TabPane>
    </Tabs>
  );
};

// 空消息
const Empty = () => (
  <div style={{ padding: '73px 0 88px' }}>
    <img src={clear} alt="您已读完所有消息" />
    <div>您已读完所有消息</div>
  </div>
);

export default Notification;
