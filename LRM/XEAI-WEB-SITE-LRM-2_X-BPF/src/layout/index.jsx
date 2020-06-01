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
    name: '系统设置',
    icon: '&#xe792;',

    children: [
      {
        path: '/projectAPI',
        name: '工程接口参数设置',
        icon: '&#xe792;',
        key: 'projectAPI',
      },
    ],
  },
];
