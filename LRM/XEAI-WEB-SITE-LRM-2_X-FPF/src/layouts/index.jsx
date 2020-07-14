import { useState } from 'react';
import {
  BasicLayout,
  SwitchSystems,
  SystemsNav,
  TimeWeather,
  SwitchTheme,
  Notification,
  UserMenu,
  IconFont,
} from 'lanlinker';
import { ConfigProvider } from 'antd';
import { history } from 'umi';
import zhCN from 'antd/es/locale/zh_CN';

const Layout = ({ children }) => {
  const [messages, setMessages] = useState(fakeMessages);
  const [prompts, setPrompts] = useState(fakePrompts);

  return (
    <ConfigProvider locale={zhCN}>
      <BasicLayout
        logo={<IconFont type="&#xe65b;" />}
        title="劳务实名管理系统"
        headerLeft={
          <>
            <SwitchSystems
              list={list}
              height={400}
              onSelect={value => {
                console.log(value);
              }}
            />
            {/* <SystemsNav systemsNav={systemsNav} /> */}
            <TimeWeather style={{ marginLeft: 50 }} />
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
    </ConfigProvider>
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
const companys = [
  {
    value: '南通二建集团有限公司',
  },
  {
    value: 'XXXXXX有限公司',
  },
];
const fakeMenu = [
  {
    name: '主页管理',
    path: '/主页管理',
    icon: '&#xe792;',
    children: [
      {
        path: '/home',
        name: '首页',
        icon: '&#xe792;',
      },
      {
        path: '/manual',
        name: '操作手册',
        icon: '&#xe792;',
      },
    ],
  },
  {
    name: '业务管理',
    path: '/业务管理',
    icon: '&#xe792;',
    children: [
      {
        path: '/projectInfo',
        name: '工程信息',
        icon: '&#xe792;',
      },
      {
        path: '/registerManagement',
        name: '登记管理',
        icon: '&#xe792;',
      },
      {
        path: '/contractManagement',
        name: '合同管理',
        icon: '&#xe792;',
      },
      {
        path: '/cardManagement',
        name: '卡片管理',
        icon: '&#xe792;',
      },
      // {
      //   path: '/dormManagement',
      //   name: '宿舍管理',
      //   icon: '&#xe792;',
      //   key: 'dormManagement',
      // },
      {
        path: '/trainingManagement',
        name: '培训管理',
        icon: '&#xe792;',
      },
      // {
      //   path: '/checkinManagement',
      //   name: '通勤管理',
      //   icon: '&#xe792;',
      //   key: 'checkinManagement',
      // },
      {
        path: '/salaryManagement',
        name: '工资管理',
        icon: '&#xe792;',
      },
      {
        path: '/evaluationManagement',
        name: '评价管理',
        icon: '&#xe792;',
      },
      {
        path: '/medicalManagement',
        name: '体检管理',
        icon: '&#xe792;',
      },
      {
        path: '/certificateManagement',
        name: '证书管理',
        icon: '&#xe792;',
      },
    ],
  },
  {
    name: '业务查询',
    path: '/业务查询',
    icon: '&#xe792;',
    children: [
      {
        path: '/commutingRecords',
        name: '通勤流水查询',
        icon: '&#xe792;',
        key: 'commutingRecords',
      },
    ],
  },
  {
    name: '统计分析',
    path: '/统计分析',
    icon: '&#xe792;',
    children: [
      {
        name: '基础统计',
        path: '/基础统计',
        icon: '&#xe792;',
        children: [
          {
            path: '/projectStaff',
            name: '工程人员统计',
            icon: '&#xe792;',
          },
          // {
          //   path: '/cardStatistics',
          //   name: '工程刷卡统计',
          //   icon: '&#xe792;',
          //   key: 'cardStatistics',
          // },
          {
            path: '/projectAttendance',
            name: '工程考勤统计',
            icon: '&#xe792;',
          },
          // {
          //   path: '/postStatistics',
          //   name: '工程岗位统计',
          //   icon: '&#xe792;',
          //   key: 'postStatistics',
          // },
          // {
          //   path: '/epidemicSearch',
          //   name: '项目疫情查询',
          //   icon: '&#xe792;',
          //   key: 'epidemicSearch',
          // },
        ],
      },
      {
        name: '高级统计',
        icon: '&#xe792;',
        children: [
          {
            path: '/infoQuery',
            name: '员工信息查询',
            icon: '&#xe792;',
          },
          // {
          //   path: '/attributeStatistics',
          //   name: '员工属性统计',
          //   icon: '&#xe792;',
          //   key: 'attributeStatistics',
          // },
          // {
          //   path: '/registerStatistics',
          //   name: '资料登记统计',
          //   icon: '&#xe792;',
          //   key: 'registerStatistics',
          // },
          {
            path: '/attendanceInfo',
            name: '考勤信息统计',
            icon: '&#xe792;',
          },
          // {
          //   path: '/enterExitStatistics',
          //   name: '进退场统计',
          //   icon: '&#xe792;',
          //   key: 'enterExitStatistics',
          // },
          // {
          //   path: '/riskStatistics',
          //   name: '风险因素统计',
          //   icon: '&#xe792;',
          //   key: 'riskStatistics',
          // },
          // {
          //   path: '/violationStatistics',
          //   name: '通勤违规统计',
          //   icon: '&#xe792;',
          //   key: 'violationStatistics',
          // },
        ],
      },
    ],
  },
  // {
  //   path: '/monitoring',
  //   name: '监控管理',
  //   icon: '&#xe792;',
  //   key: 'monitoring',
  // },
  // {
  //   path: '/reportCenter',
  //   name: '报表中心',
  //   icon: '&#xe792;',
  //   key: 'reportCenter',
  // },
  // {
  //   path: '/businessSetting',
  //   name: '业务设置',
  //   icon: '&#xe792;',
  //   key: 'businessSetting',
  //   children: [
  //     {
  //       path: '/businessRules',
  //       name: '业务规则设置',
  //       icon: '&#xe792;',
  //       key: 'businessRules',
  //     },
  //   ],
  // },
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

const treeData = [
  {
    id: 1,
    a: '名字1',
    b: '键1',
    c: '图标',
    pId: 0,
  },
  {
    id: 2,
    a: '名字2',
    b: '键2',
    c: '图标',
    pId: 0,
  },
  {
    id: 3,
    a: '名字3',
    b: '键3',
    c: '图标',
    pId: 1,
  },
  {
    id: 7,
    a: '名字4',
    b: '键7',
    c: '图标',
    pId: 1,
  },
  {
    id: 8,
    a: '名字',
    b: '键8',
    c: '图标',
    pId: 1,
  },
  {
    id: 5,
    a: '名字',
    b: '键5',
    c: '图标',
    pId: 2,
  },
  {
    id: 4,
    a: '名字',
    b: '键4',
    c: '图标',
    pId: 3,
  },
  {
    id: 6,
    a: '名字',
    b: '键6',
    c: '图标',
    pId: 3,
  },
  {
    id: 9,
    a: '名字9',
    b: '键9',
    c: '图标',
    pId: 7,
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

const list = [
  {
    title: '通行证管理系统',
  },
  {
    title: '项目综合管理系统',
  },
  {
    title: '劳务实名制管理系统',
  },
  {
    title: '视频监控管理系统',
  },
  {
    title: '物料管理系统',
  },
  {
    title: '质量安全监管系统',
  },
  {
    title: '设备管理系统',
  },
  {
    title: '项目进度管理系统',
  },
  {
    title: '环境管理系统',
  },
];
