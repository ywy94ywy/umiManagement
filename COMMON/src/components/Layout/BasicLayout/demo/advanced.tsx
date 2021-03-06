/**
 * compact: true
 * transform: true
 */
import React, { useState, useEffect } from 'react';
import {
  BasicLayout,
  BasicLayoutProps,
  PageHeaderWrapper,
  SwitchSystems,
  SystemsNav,
  TimeWeather,
  SwitchTheme,
  Notification,
  UserMenu, 
} from 'lanlinker';
import { Button, Card } from 'antd';

const Layout: React.FC<BasicLayoutProps> = () => {
  const [messages, setMessages] = useState(fakeMessages);
  const [prompts, setPrompts] = useState(fakePrompts);
  const [nav, setNav] = useState('weather');

  return (
    <BasicLayout
      headerLeft={
        <>
          <SwitchSystems
            list={fakeSystems}
            onSelect={e => {
              console.log(e);
            }}
            style={{ marginRight: 50 }}
          />
          {nav === 'weather' ? (
            <TimeWeather />
          ) : (
            <SystemsNav systemsNav={systemsNav} />
          )}
        </>
      }
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
              window.location.href = '/';
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
      {/* 正常用法 */}
      {/* {children} */}
      {/* 下面是假页面 */}
      <PageHeaderWrapper>
        <Card style={{ height: '100%' }}>
          <p>假页面</p>
          <Button
            onClick={() => {
              setNav(nav === 'weather' ? 'nav' : 'weather');
            }}
          >
            天气工具切换
          </Button>
        </Card>
      </PageHeaderWrapper>
    </BasicLayout>
  );
};

export default Layout;

const systemsNav = [
  {
    icon: '&#xe792;',
    title: '物料',
    url: '/',
  },
  {
    icon: '&#xe792;',
    title: '设备',
  },
  {
    icon: '&#xe792;',
    title: '质量',
  },
  {
    icon: '&#xe792;',
    title: '视频',
  },
  {
    icon: '&#xe792;',
    title: '综合',
  },
  {
    icon: '&#xe792;',
    title: '环境',
  },
];

const fakeMenu = [
  {
    name: '主页管理',
    icon: '&#xe7c6;',
    children: [
      {
        path: '/',
        name: '首页',
        icon: '&#xe7c6;',
        key: 'home',
      },
    ],
  },
  {
    path: '/businessManagement',
    name: '业务管理',
    icon: '&#xe792;',
    key: 'businessManagement',
    children: [
      {
        path: '/',
        name: '项目信息',
        icon: '&#xe792;',
        key: 'projectInfo',
      },
      {
        path: '/',
        name: '登记管理',
        icon: '&#xe792;',
        key: 'registerManagement',
      },
      {
        path: '/',
        name: '合同管理',
        icon: '&#xe792;',
        key: 'contractManagement',
      },
      {
        path: '/',
        name: '卡片管理',
        icon: '&#xe792;',
        key: 'cardManagement',
      },
      {
        path: '/',
        name: '宿舍管理',
        icon: '&#xe792;',
        key: 'dormManagement',
      },
      {
        path: '/',
        name: '培训管理',
        icon: '&#xe792;',
        key: 'trainingManagement',
      },
      {
        path: '/',
        name: '考勤管理',
        icon: '&#xe792;',
        key: 'checkinManagement',
      },
      {
        path: '/',
        name: '工资管理',
        icon: '&#xe792;',
        key: 'salaryManagement',
      },
      {
        path: '/',
        name: '评价管理',
        icon: '&#xe792;',
        key: 'evaluationManagement',
      },
      {
        path: '/',
        name: '体检管理',
        icon: '&#xe792;',
        key: 'healthManagement',
      },
    ],
  },
  {
    path: '/statisticAnalysis',
    name: '统计分析',
    icon: '&#xe792;',
    key: 'statisticAnalysis',
    children: [
      {
        path: '/basicStatistics',
        name: '基础统计',
        icon: '&#xe792;',
        key: 'basicStatistics',
        children: [
          {
            path: '/',
            name: '项目人员统计',
            icon: '&#xe792;',
            key: 'staffStatistics',
          },
          {
            path: '/',
            name: '项目刷卡统计',
            icon: '&#xe792;',
            key: 'cardStatistics',
          },
          {
            path: '/',
            name: '项目考勤统计',
            icon: '&#xe792;',
            key: 'checkinStatistics',
          },
          {
            path: '/',
            name: '项目岗位统计',
            icon: '&#xe792;',
            key: 'postStatistics',
          },
        ],
      },
      {
        path: '/advancedStatistic',
        name: '高级统计',
        icon: '&#xe792;',
        key: 'advancedStatistic',
        children: [
          {
            path: '/',
            name: '员工信息查询',
            icon: '&#xe792;',
            key: 'infoQuery',
          },
          {
            path: '/',
            name: '员工属性统计',
            icon: '&#xe792;',
            key: 'attributeStatistics',
          },
          {
            path: '/',
            name: '资料登记统计',
            icon: '&#xe792;',
            key: 'registerStatistics',
          },
          {
            path: '/',
            name: '出勤信息统计',
            icon: '&#xe792;',
            key: 'attendanceStatistics',
          },
          {
            path: '/',
            name: '进退场统计',
            icon: '&#xe792;',
            key: 'enterExitStatistics',
          },
          {
            path: '/',
            name: '风险因素统计',
            icon: '&#xe792;',
            key: 'riskStatistics',
          },
          {
            path: '/',
            name: '通勤违规统计',
            icon: '&#xe792;',
            key: 'violationStatistics',
          },
        ],
      },
    ],
  },
  {
    path: '/',
    name: '报表中心',
    icon: '&#xe792;',
    key: 'report',
  },
  {
    path: '/',
    name: '监控管理',
    icon: '&#xe792;',
    key: 'monitoring',
  },
  {
    path: '/businessSetting',
    name: '业务设置',
    icon: '&#xe792;',
    key: 'businessSetting',
    children: [
      {
        path: '/',
        name: '业务规则设置',
        icon: '&#xe792;',
        key: 'rules',
      },
    ],
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
