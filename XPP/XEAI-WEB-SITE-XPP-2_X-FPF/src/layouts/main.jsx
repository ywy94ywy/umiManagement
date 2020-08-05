import React, { useState, useEffect } from 'react';
import {
  BasicLayout,
  SwitchSystems,
  TimeWeather,
  SwitchTheme,
  Notification,
  UserMenu,
} from 'lanlinker';

import Cookies from 'js-cookie';
// import { useRequest } from 'umi';
// import { fetchUser } from './servers';
import { XPP_FPF_URL } from '@/config/host';
import { message, Spin, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const Layout = ({ children, location }) => {
  const [messages, setMessages] = useState(fakeMessages);
  const [prompts, setPrompts] = useState(fakePrompts);
  // const { data = {}, error, loading } = useRequest(fetchUser);
  const { user = {}, menu = [], systems = [] } = {};

  const token = Cookies.get('TOKEN');

  useEffect(() => {
    window.screenTop = 0;
  }, [location]);

  // if (!token) {
  //   window.location.href =
  //     XPP_FPF_URL +
  //     '/login?redirect=' +
  //     encodeURIComponent(window.location.href);

  //   return (
  //     <div style={{ textAlign: 'center', paddingTop: 200 }}>
  //       <Spin size="large" />
  //     </div>
  //   );
  // }

  // useEffect(() => {
  //   const isLog = Cookies.get('isLog');
  //   if (isLog) {
  //     Cookies.remove('isLog');
  //     message.success('登录成功！');
  //   }
  // }, []);

  // if (loading) {
  //   return (
  //     <div style={{ textAlign: 'center', paddingTop: 200 }}>
  //       <Spin size="large" />
  //     </div>
  //   );
  // }

  return (
    <ConfigProvider locale={zhCN}>
      <BasicLayout
        headerLeft={
          <>
            <SwitchSystems
              list={fakeSystems}
              height={400}
              onSelect={v => {
                console.log(v);
              }}
              style={{ marginRight: 50 }}
            />
            <TimeWeather />
          </>
        }
        headerRight={
          <>
            <SwitchTheme />
            <UserMenu
              userName={user.userName}
              profile={user.profile}
              logout={() => {
                Cookies.remove('TOKEN');
                Cookies.remove('u_inf');
                window.location.href = XPP_FPF_URL + '/login';
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
        menuData={menu}
      >
        {children}
      </BasicLayout>
    </ConfigProvider>
  );
};

export default Layout;

const companys = [
  {
    value: '南通二建集团有限公司',
  },
  {
    value: 'XXXXXX有限公司',
  },
];

const fakeSystems = [
  {
    icon: '&#xe792;',
    background:
      'linear-gradient(180deg,rgba(113,187,255,1) 0%,rgba(24,144,255,1) 100%)',
    title: '项目综合管理系统',
  },
  {
    icon: '&#xe792;',
    background:
      'linear-gradient(180deg,rgba(255,188,190,1) 0%,rgba(247,121,125,1) 100%)',
    title: '通行证管理系统',
  },
  {
    icon: '&#xe792;',
    background:
      'linear-gradient(180deg,rgba(95,226,255,1) 0%,rgba(18,194,233,1) 100%)',
    title: '视频监控管理系统',
  },
  {
    icon: '&#xe792;',
    background:
      'linear-gradient(180deg,rgba(181,181,255,1) 0%,rgba(127,127,213,1) 100%)',
    title: '质量安全监管系统',
  },
  {
    icon: '&#xe792;',
    background:
      'linear-gradient(180deg,rgba(255,224,153,1) 0%,rgba(254,182,20,1) 100%)',
    title: '物料管理系统',
  },
  {
    icon: '&#xe792;',
    background:
      'linear-gradient(180deg,rgba(148,148,148,1) 0%,rgba(51,51,51,1) 100%)',
    title: '设备管理系统',
  },
  {
    icon: '&#xe792;',
    background:
      'linear-gradient(180deg,rgba(61,243,87,1) 0%,rgba(39,198,62,1) 100%)',
    title: '环境管理系统',
  },
  {
    icon: '&#xe792;',
    background:
      'linear-gradient(180deg,rgba(180,255,250,1) 0%,rgba(111,216,209,1) 100%)',
    title: '项目进度管理系统',
  },
];

const fakeMessages = [
  {
    id: 1,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: false,
  },
  {
    id: 2,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: false,
  },
  {
    id: 3,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    title: '您提交的评价已通过审核',
    name: '赵某人',
    event: '多次违反工地规定，并拒不悔改…',
    time: '5 分钟前',
    readed: true,
  },
  {
    id: 4,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
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
