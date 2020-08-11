/**
 * @module 系统切换
 */
import React, { useContext } from 'react';
import { Popover, Row } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import SystemsList from '../SystemsList';
import { ThemeContext } from '../Context/theme';
import styles from './style.less';

export interface SwitchSystemsProps {
  list: any[];
  onSelect: (item: any) => void;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  extra?: React.ReactNode;
  titleKey?: string;
  iconKey?: string;
  iconBgKey?: string;
}

const SwitchSystems: React.FC<SwitchSystemsProps> = ({
  list = [],
  onSelect,
  className,
  height,
  style,
  extra,
  titleKey,
  iconKey,
  iconBgKey,
  ...props
}) => {
  const { icFs } = useContext(ThemeContext);

  return (
    <Popover
      content={
        <SystemsList
          height={height}
          list={list}
          onSelect={onSelect}
          titleKey={titleKey}
          iconKey={iconKey}
          iconBgKey={iconBgKey}
        />
      }
      title={
        <Row justify="space-between" style={{ alignItems: 'center' }}>
          <header className={styles.title}>应用中心</header>
          {extra}
        </Row>
      }
      trigger="click"
      placement="bottomLeft"
      overlayClassName={styles.systemPanel}
      {...props}
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
