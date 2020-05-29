/**
 * @module 用户安全管理
 */
import React, { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Menu, Layout, Card } from 'antd';
import UserPassword from './components/UserPassword';
import UserSecurity from './components/UserSecurity';
import styles from './style.less';

const MENU_LIST = ['用户密码管理', '用户密保管理'];

export default () => {
  const [selectKey, setSelectKey] = useState(MENU_LIST[0]);

  return (
    <PageHeaderWrapper className={styles.userSecurity}>
      <Card bodyStyle={{ padding: '16px 0', minHeight: 600 }}>
        <Layout>
          <Layout.Sider theme="light" width={225} className={styles.leftMenu}>
            <Menu
              mode="inline"
              selectedKeys={[selectKey]}
              onClick={({ key }) => {
                setSelectKey(key);
              }}
            >
              {getMenu(MENU_LIST)}
            </Menu>
          </Layout.Sider>
          <Layout.Content>
            <div className={styles.right}>
              <div className={styles.title}>{selectKey}</div>
              {renderChildren(selectKey, MENU_LIST)}
            </div>
          </Layout.Content>
        </Layout>
      </Card>
    </PageHeaderWrapper>
  );
};

// 左侧菜单
const getMenu = menuList => menuList.map(item => <Menu.Item key={item}>{item}</Menu.Item>);

// 右侧内容
const renderChildren = (selectKey, menuList) => {
  switch (selectKey) {
    case menuList[0]:
      return <UserPassword />;
    case menuList[1]:
      return <UserSecurity />;
    default:
      return null;
  }
};
