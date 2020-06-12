/**
 * @module 系统切换
 */
import React, { useContext } from 'react';
import { Popover } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import SystemsList, { IListItem } from '../SystemsList';
import { ThemeContext } from '../Context/theme';
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
  const { icFs } = useContext(ThemeContext);

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
        <AppstoreOutlined style={{ fontSize: icFs, transition: 'all 0.2s' }} />
      </div>
    </Popover>
  );
};

export default SwitchSystems;
