/**
 * @module 系统菜单栏
 */
import React from 'react';
import IconFont from '../IconFont';
import styles from './style.less';

export interface SystemsNavProps {
  systemsNav: { icon?: string; title?: string; url?: string }[];
}
const SystemsNav: React.FC<SystemsNavProps> = ({ systemsNav = [] }) => {
  return (
    <div className={styles.systemsNav}>
      {systemsNav.map((v, i) => (
        <span
          key={i}
          onClick={() => {
            window.location.href = v.url || '/';
          }}
        >
          {v.icon && <IconFont type={v.icon}></IconFont>}
          {v.title && v.title}
        </span>
      ))}
    </div>
  );
};

export default SystemsNav;
