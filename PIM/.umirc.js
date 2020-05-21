import { defineConfig } from 'umi';

export default defineConfig({
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
          path: '/cooperative',
          component: '@/pages/cooperative',
        },
        {
          path: '/project',
          component: '@/pages/project',
        },
      ],
    },
  ],
});
