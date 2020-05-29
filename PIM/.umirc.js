import { defineConfig } from 'umi';

export default defineConfig({
  devServer: {
    port: 8005,
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
          redirect: '/project',
        },
        {
          path: '/project',
          component: '@/pages/project',
        },
        {
          path: '/cooperative',
          component: '@/pages/cooperative',
        },

        {
          path: '/position',
          component: '@/pages/position',
        },
      ],
    },
  ],
});
