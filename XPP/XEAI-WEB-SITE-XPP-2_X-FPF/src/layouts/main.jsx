import { useState, useEffect } from 'react';
// import {
//   BasicLayout,
//   SwitchSystems,
//   TimeWeather,
//   SwitchTheme,
//   UserMenu,
// } from 'lanlinker';
// import { useRequest } from 'umi';
// import {
//   removeTokenAndUser,
//   getToken,
//   getBreifUserInfo,
//   gotoLogin,
// } from '@/utils';
import { message, Spin, ConfigProvider, Space, Input, Form } from 'antd';
// import { fetchMenus } from './servers';
// import avatar from '@/assets/img/protrait.svg';
// import logo from './logo.png';
// import zhCN from 'antd/es/locale/zh_CN';
// import { useForm } from 'antd/lib/form/Form';

// const Layout = ({ children, location }) => {
//   const fetchMenusRequest = useRequest(fetchMenus);
//   const breifUserInfo = getBreifUserInfo();

//   useEffect(() => {
//     window.screenTop = 0;
//   }, [location]);

//   // if (!token) {
//   //   window.location.href =
//   //     XPP_FPF_URL +
//   //     '/login?redirect=' +
//   //     encodeURIComponent(window.location.href);

//   //   return (
//   //     <div style={{ textAlign: 'center', paddingTop: 200 }}>
//   //       <Spin size="large" />
//   //     </div>
//   //   );
//   // }

//   if (fetchMenusRequest.loading) {
//     return (
//       <div style={{ textAlign: 'center', paddingTop: 200 }}>
//         <Spin size="large" />
//       </div>
//     );
//   }

//   return (
//     <ConfigProvider locale={zhCN}>
//       <BasicLayout
//         logo={() => (
//           <div style={{ margin: '0 auto' }}>
//             <img src={logo} alt="logo" />
//           </div>
//         )}
//         title=""
//         headerLeft={
//           <>
//             <SwitchSystems
//               list={fakeSystems}
//               height={400}
//               onSelect={v => {
//                 console.log(v);
//               }}
//               style={{ marginRight: 50 }}
//             />
//             <TimeWeather />
//           </>
//         }
//         headerRight={
//           <>
//             <SwitchTheme />
//             <UserMenu
//               userName={breifUserInfo.userNickname}
//               profile={breifUserInfo.avatar || avatar}
//               logout={() => {
//                 removeTokenAndUser();
//                 gotoLogin();
//               }}
//               // menu={[
//               //   {
//               //     title: 'XXXXXXXXXX系统',
//               //     url: '/',
//               //   },
//               // ]}
//             />
//           </>
//         }
//         menuData={fetchMenusRequest.data}
//       >
//         {children}
//       </BasicLayout>
//     </ConfigProvider>
//   );
// };

export default Layout;

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
