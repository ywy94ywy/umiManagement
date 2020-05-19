import { BasicLayout, TimeWeather, SwitchTheme, UserMenu } from 'lanlinker';

export default ({ children }) => {
  return (
    <BasicLayout
      headerLeft={<TimeWeather />}
      headerRight={
        <>
          <SwitchTheme />
          <UserMenu
            userName={'测试名'}
            // profile={user.profile}
            logout={() => {
              // Cookies.remove('token');
              // Cookies.remove('type');
              // window.location.href = 'http://localhost:8000/login';
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

const fakeMenu = [
  {
    name: '行业业务管理',
    icon: 'icon-appstore',
    children: [
      {
        name: '建筑行业管理',
        icon: 'icon-appstore',
        children: [
          {
            path: '/project',
            name: '项目信息管理',
            icon: 'icon-appstore',
            key: 'project',
          },
          {
            path: '/cooperative',
            name: '合作组织管理',
            icon: 'icon-appstore',
            key: 'cooperative',
          },
        ],
      },
    ],
  },
];
