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
