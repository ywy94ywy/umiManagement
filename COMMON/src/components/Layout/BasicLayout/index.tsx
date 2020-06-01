/**
 * @module 蓝瓴后台管理统一布局
 * @description 主题切换、全局配置
 */
import React, { useMemo } from 'react';
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
const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && <IconFont style={{ marginRight: 5 }} type={icon as string} />,
    children: children && loopMenuItem(children),
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
  useMemo(() => MenuBreadcrumb(menuData), [menuData]);

  return (
    <ConfigProvider locale={zhCN} {...configProviderProps}>
      <div className={styles.themeWrapper}>
        <div className={styles.bgwrapper}>
          <div className={styles.bg}></div>
        </div>
        <ProLayout
          className={classNames(styles.basicLayout, className)}
          collapsed={false}
          onCollapse={() => {}}
          // 侧边栏宽度
          siderWidth={230}
          // 头部渲染简化
          headerRender={() => {
            return (
              <div className={styles.headerContent}>
                <div className={styles.left}>{headerLeft}</div>
                <div className={styles.right}>{headerRight}</div>
              </div>
            );
          }}
          // 菜单数据
          menuDataRender={() => loopMenuItem(menuData)}
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
          menuItemRender={(menuItemProps, defaultDom) =>
            menuItemProps.isUrl ? (
              defaultDom
            ) : (
              <Link to={menuItemProps.path || '/'}>{defaultDom}</Link>
            )
          }
          // 默认展开所有
          menu={{ defaultOpenAll: true }}
          disableMobile
          disableContentMargin
          {...props}
        >
          {children}
        </ProLayout>
      </div>
    </ConfigProvider>
  );
};

export default BasicLayout;

export { PageHeaderWrapper };
