import { defineConfig } from 'umi';

export default defineConfig({
  devServer: {
    port: 8004,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layout',
      routes: [
        {
          path: '/',
          redirect: '/projectAPI',
        },
        {
          path: '/projectAPI',
          component: '@/pages/projectAPI',
        },
      ],
    },
  ],
});
