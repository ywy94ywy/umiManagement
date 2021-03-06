/**
 * @module 蓝瓴后台管理统一布局
 * @description 主题切换、全局配置
 */
import React, { useMemo, useState } from 'react';
import ProLayout, {
  BasicLayoutProps as ProLayoutProps,
  PageHeaderWrapper,
  MenuDataItem,
} from '@ant-design/pro-layout';
import { ConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import IconFont from '../../IconFont';
import classNames from 'classnames';
import { Link } from 'umi';
import zhCN from 'antd/es/locale/zh_CN';
import styles from './style.less';
import { ThemeContext } from '../../Context/theme';
import { THEME_CONFIG } from '../../../config';

// 面包屑处理（由菜单生成）
const breadcrumb: any = {};
const MenuBreadcrumb = (
  menu: MenuDataItem[],
  arr: { breadcrumbName?: string }[] = [],
) => {
  menu.forEach(v => {
    const breadcrumbList = [...arr, { breadcrumbName: v.name }];
    if (v.children) {
      MenuBreadcrumb(v.children, breadcrumbList);
    } else {
      if (v.path) breadcrumb[v.path] = breadcrumbList;
    }
  });
  return breadcrumb;
};

// 菜单栏的IconFont设置
const loopMenuItem = (menus: MenuDataItem[], icFs: string): MenuDataItem[] =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && (
      <IconFont
        style={{ marginRight: 5, fontSize: icFs, transition: 'all 0.2s' }}
        type={icon as string}
      />
    ),
    children: children && loopMenuItem(children, icFs),
  }));

export interface BasicLayoutProps extends ProLayoutProps {
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  menuData?: MenuDataItem[];
  configProviderProps?: ConfigProviderProps;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({
  children,
  headerLeft,
  headerRight,
  className,
  menuData = [],
  configProviderProps,
  ...props
}) => {
  const [fs, setFs] = useState(THEME_CONFIG.fontSize[0].value);
  const [bg, setBg] = useState(THEME_CONFIG.background.pure.value[0]);
  const icFs = parseInt(fs) + 2 + 'px';

  useMemo(() => MenuBreadcrumb(menuData), [menuData]);

  return (
    <ThemeContext.Provider value={{ fs, icFs, bg, setFs, setBg }}>
      <ConfigProvider locale={zhCN} {...configProviderProps}>
        <div className={styles.themeWrapper}>
          {useMemo(
            () => (
              <div className={styles.bgwrapper}>
                <div
                  style={{
                    background: bg + ' center/cover',
                    height: 'inherit',
                    transition: 'all 0.3s',
                  }}
                ></div>
              </div>
            ),
            [bg],
          )}
          <ProLayout
            className={classNames(styles.basicLayout, className)}
            collapsed={false}
            onCollapse={() => {}}
            // 侧边栏宽度
            siderWidth={230}
            // 头部渲染简化
            headerRender={() => {
              return (
                <div className={styles.headerContent} style={{ fontSize: fs }}>
                  <div className={styles.left}>{headerLeft}</div>
                  <div className={styles.right}>{headerRight}</div>
                </div>
              );
            }}
            // 菜单数据
            menuDataRender={() => loopMenuItem(menuData, icFs)}
            // 面包屑数据
            breadcrumbRender={(routers = []) => {
              if (routers[0]) {
                const path = breadcrumb[routers[0].path] || [];
                return [...path];
              }
              return [];
            }}
            // 面包屑渲染
            itemRender={route => <span>{route.breadcrumbName}</span>}
            // 菜单渲染
            subMenuItemRender={(_, defaultDom) => {
              return (
                <div style={{ fontSize: fs, transition: 'font-size 0.2s' }}>
                  {defaultDom}
                </div>
              );
            }}
            menuItemRender={(menuItemProps, defaultDom) =>
              menuItemProps.isUrl ? (
                { defaultDom }
              ) : (
                <Link
                  to={menuItemProps.path || '/'}
                  style={{ fontSize: fs, transition: 'font-size 0.2s' }}
                >
                  {defaultDom}
                </Link>
              )
            }
            // 默认展开所有
            menu={{ defaultOpenAll: true }}
            disableMobile
            {...props}
          >
            {children}
          </ProLayout>
        </div>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default BasicLayout;

export { PageHeaderWrapper };
