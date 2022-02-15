import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: '@/pages/login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/myOrder', component: '@/pages/login', wrappers: [
            '@/wrappers/auth',
          ],
        },
        {
          path: '/dashboard', component: '@/pages/dashboard'
        },
        // {
        //   path: '/dashboard', component: '@/pages/dashboard', wrappers: [
        //     '@/wrappers/auth',
        //   ],
        // },
      ],
    },
  ],
  fastRefresh: {},
  mfsu: {}
});
