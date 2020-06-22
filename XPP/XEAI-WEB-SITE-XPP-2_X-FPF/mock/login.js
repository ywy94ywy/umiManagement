export default {
  'POST /api/login'(req, res) {
    let user = req.body;
    console.log(req.body);
    if (user.user === 'admin' && user.password === '123456') {
      setTimeout(() => {
        res.json({
          resultSuccess: true,
          resultStatusId: 200,
          resultStatusContent: '操作成功',
          resultDataContent: [],
        });
      }, 1000);
    } else {
      res.json({
        resultSuccess: false,
        resultStatusId: 10086,
        resultStatusContent: '用户名或密码错误!',
        resultDataContent: [],
      });
    }
  },
  'POST /api/user'(req, res) {
    setTimeout(() => {
      res.json({
        resultSuccess: true,
        resultStatusId: 200,
        resultStatusContent: '操作成功',
        resultDataContent: {
          user: {
            userName: '贾亚军',
            profile:
              'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          },
          menu: [
            {
              path: '/homeManagement',
              name: '主页管理',
              icon: '&#xe792;',
              key: 'homeManagement',
              children: [
                {
                  path: '/home',
                  name: '首页',
                  icon: '&#xe792;',
                  key: 'home',
                },
                {
                  path: '/manual',
                  name: '操作手册',
                  icon: '&#xe792;',
                  key: 'manual',
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
                  path: '/userInfo',
                  name: '用户信息管理',
                  icon: '&#xe792;',
                  key: 'userInfo',
                },
                {
                  path: '/userUnion',
                  name: '用户联合登录管理',
                  icon: '&#xe792;',
                  key: 'userUnion',
                },
                {
                  path: '/userBank',
                  name: '用户银行信息管理',
                  icon: '&#xe792;',
                  key: 'userBank',
                },
                {
                  path: '/userSecurity',
                  name: '用户安全管理',
                  icon: '&#xe792;',
                  key: 'userSecurity',
                },
                {
                  path: '/userAuth',
                  name: '用户认证管理',
                  icon: '&#xe792;',
                  key: 'userAuth',
                },
                {
                  path: '/userLicense',
                  name: '用户执照管理',
                  icon: '&#xe792;',
                  key: 'userLicense',
                },
              ],
            },
          ],
          systems: {},
        },
      });
    }, 1000);
  },
};
