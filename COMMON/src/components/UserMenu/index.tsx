/**
 * @module 用户菜单
 */
import React from 'react';
import { Avatar, Menu, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './style.less';

export interface UserMenuProps {
  userName?: string;
  profile?: string;
  logout?: () => void;
  menu?: {
    title: string;
    url?: string;
  }[];
}

const UserMenu: React.FC<UserMenuProps> = ({
  userName,
  profile,
  logout = null,
  menu = [],
}) => {
  return (
    <Popover
      overlayClassName={styles.userMenuPanel}
      content={
        <div>
          <Menu>
            {menu.map((v, i) => {
              return (
                <Menu.Item
                  key={i}
                  onClick={() => {
                    window.location.href = v.url || '/';
                  }}
                >
                  {v.title}
                </Menu.Item>
              );
            })}
            {logout && (
              <Menu.Item
                onClick={() => {
                  logout();
                }}
              >
                退出系统
              </Menu.Item>
            )}
          </Menu>
        </div>
      }
      placement="bottomRight"
      trigger="click"
    >
      <div className={styles.userMenu}>
        {profile && (
          <Avatar size={25} src={profile} icon={<UserOutlined />}></Avatar>
        )}
        {userName && <span className={styles.user}>{userName}</span>}
      </div>
    </Popover>
  );
};
export default UserMenu;
