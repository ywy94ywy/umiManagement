/**
 * @module 系统菜单栏
 */
import React, { useContext } from 'react';
import IconFont from '../IconFont';
import { ThemeContext } from '../Context/theme';
import styles from './style.less';

export interface SystemsNavProps {
  systemsNav: { icon?: string; title?: string; url?: string }[];
}
const SystemsNav: React.FC<SystemsNavProps> = ({ systemsNav = [] }) => {
  const { icFs } = useContext(ThemeContext);

  return (
    <div className={styles.systemsNav}>
      {systemsNav.map((v, i) => (
        <span
          key={i}
          onClick={() => {
            window.location.href = v.url || '/';
          }}
        >
          {v.icon && (
            <IconFont
              type={v.icon}
              style={{ fontSize: icFs, transition: 'all 0.2s' }}
            ></IconFont>
          )}
          {v.title && v.title}
        </span>
      ))}
    </div>
  );
};

export default SystemsNav;
