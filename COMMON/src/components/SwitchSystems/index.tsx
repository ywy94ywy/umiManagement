/**
 * @module 系统切换
 */
import React from 'react';
import { Popover } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import SystemsList, { IListItem } from '../SystemsList';
import styles from './style.less';

export interface SwitchSystemsProps {
  list: IListItem[];
  onSelect: (item: IListItem) => void;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SwitchSystems: React.FC<SwitchSystemsProps> = ({
  list = [],
  onSelect,
  className,
  height,
  style,
}) => {
  return (
    <Popover
      content={<SystemsList height={height} list={list} onSelect={onSelect} />}
      title={<header className={styles.title}>应用中心</header>}
      trigger="click"
      placement="bottomLeft"
      overlayClassName={styles.systemPanel}
    >
      <div
        className={classNames(styles.switchSystems, className)}
        style={style}
      >
        <AppstoreOutlined />
      </div>
    </Popover>
  );
};

export default SwitchSystems;
