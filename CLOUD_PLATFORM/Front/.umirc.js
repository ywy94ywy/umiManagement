import { defineConfig } from 'umi';
import path from 'path';

export default defineConfig({
  chainWebpack(memo) {
    memo.resolve.alias.set('static', path.join(__dirname, '../../static'));
    // memo
    //   .plugin('IgnorePlugin')
    //   .use(webpack.IgnorePlugin, [/\.\/locale/, /moment/]);
  },
  request: {
    dataField: 'resultDataContent',
  },
  devServer: {
    port: 8001,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      component: '@/pages/login',
    },
    {
      path: '/user',
      component: '@/layouts/user',
      routes: [
        {
          path: '/user/initialize',
          component: '@/pages/initialize',
        },
        {
          path: '/user/register',
          component: '@/pages/register',
        },
        {
          path: '/user/password',
          component: '@/pages/password',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/main',
      routes: [
        { path: '/home', component: '@/pages/home' },
        { path: '/manual', component: '@/pages/manual' },
        { path: '/userInfo', component: '@/pages/userInfo' },
        { path: '/userUnion', component: '@/pages/userUnion' },
        { path: '/userBank', component: '@/pages/userBank' },
        { path: '/userSecurity', component: '@/pages/userSecurity' },
        { path: '/userAuth', component: '@/pages/userAuth' },
        { path: '/userLicense', component: '@/pages/userLicense' },
      ],
    },
  ],
});
