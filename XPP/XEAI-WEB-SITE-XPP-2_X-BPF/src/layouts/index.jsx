import React, { useState } from 'react';
import {
  BasicLayout,
  SwitchSystems,
  TimeWeather,
  SwitchTheme,
  Notification,
  UserMenu,
} from 'lanlinker';
import { history } from 'umi';

const Layout = ({ children }) => {
  const [messages, setMessages] = useState(fakeMessages);
  const [prompts, setPrompts] = useState(fakePrompts);

  return (
    <BasicLayout
      headerLeft={<TimeWeather />}
      headerRight={
        <>
          <SwitchTheme />
          <Notification
            messages={messages}
            prompts={prompts}
            readMessage={item => {
              setMessages(
                messages.map(v => {
                  if (v.id !== item.id) {
                    return v;
                  } else {
                    v.readed = true;
                    return v;
                  }
                }),
              );
            }}
            readPrompt={item => {
              setPrompts(
                prompts.map(v => {
                  if (v.id !== item.id) {
                    return v;
                  } else {
                    v.readed = true;
                    return v;
                  }
                }),
              );
            }}
            clearMessages={() => {
              setMessages([]);
            }}
            clearPrompts={() => {
              setPrompts([]);
            }}
          ></Notification>
          <UserMenu
            userName="贾亚军"
            profile="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            logout={() => {
              history.push('/');
            }}
            menu={[
              {
                title: 'XXXXXXXXXX系统',
                url: '/',
              },
            ]}
          />
        </>
      }
      menuData={fakeMenu}
    >
      {children}
    </BasicLayout>
  );
};

export default Layout;

const fakeMenu = [
  {
    path: '/homeManagement',
    name: '主页管理',
    icon: 'icon-poweroff',
    key: 'homeManagement',
    children: [
      {
        path: '/home',
        name: '首页',
        icon: 'icon-poweroff',
        key: 'home',
      },
      {
        path: '/manual',
        name: '操作手册',
        icon: 'icon-poweroff',
        key: 'manual',
      },
    ],
  },
  {
    path: '/AuthManagement',
    name: '权限管理',
    icon: 'icon-poweroff',
    key: 'AuthManagement',
    children: [
      {
        path: '/authUser',
        name: '用户综合管理',
        icon: 'icon-poweroff',
        key: 'authUser',
      },
      {
        path: '/authModule',
        name: '模块综合管理',
        icon: 'icon-poweroff',
        key: 'authModule',
      },
      {
        path: '/authAllocation',
        name: '权限分配管理',
        icon: 'icon-poweroff',
        key: 'authAllocation',
      },
    ],
  },
  {
    path: '/platformManagement',
    name: '平台管理',
    icon: 'icon-poweroff',
    key: 'platformManagement',
    children: [
      {
        path: '/platformPlatform',
        name: '平台执照管理',
        icon: 'icon-poweroff',
        key: 'platformPlatform',
      },
      {
        path: '/platformTenant',
        name: '租户执照管理',
        icon: 'icon-poweroff',
        key: 'platformTenant',
      },
      {
        path: '/platformUser',
        name: '用户执照管理',
        icon: 'icon-poweroff',
        key: 'platformUser',
      },
      {
        path: '/platformModule',
        name: '接口模板设置',
        icon: 'icon-poweroff',
        key: 'platformModule',
      },
    ],
  },
  {
    path: '/tanantManagement',
    name: '租户管理',
    icon: 'icon-poweroff',
    key: 'tanantManagement',
    children: [
      {
        path: '/tanantTanant',
        name: '租户执照管理',
        icon: 'icon-poweroff',
        key: 'tanantTanant',
      },
      {
        path: '/tanantUser',
        name: '用户执照管理',
        icon: 'icon-poweroff',
        key: 'tanantUser',
      },
    ],
  },
];

const fakeMessages = [
  {
    id: 1,
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: false,
  },
  {
    id: 2,
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: false,
  },
  {
    id: 3,
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: true,
  },
  {
    id: 4,
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event:
      '多次违反工地规定，拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改拒不悔改',
    time: '5 分钟前',
    readed: true,
  },
];
const fakePrompts = [
  {
    id: 1,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    id: 2,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    id: 3,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    id: 4,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    id: 5,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: false,
  },
  {
    id: 6,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: true,
  },
  {
    id: 7,
    description: '张然  的合同已经到期，请及时处理',
    time: '10分钟前',
    readed: true,
  },
];
