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
          path: '/dashboard', component: '@/pages/dashboard', wrappers: [
            '@/wrappers/auth',
          ],
        },
        {
          path: '/home', component: '@/pages/dashboard', wrappers: [
            '@/wrappers/auth',
          ],
        },
      ],
    },
  ],
  proxy: {
    '/api': {
      'target': 'http://127.0.0.1:7001/',
    },
  },
  fastRefresh: {},
  mfsu: {}
});
