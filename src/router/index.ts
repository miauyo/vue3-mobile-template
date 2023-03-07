import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';

const env = import.meta.env.MODE || 'development';

// 其他固定路由
const defaultRouterList: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/login',
  },
];

export const allRoutes = [...defaultRouterList];

const router = createRouter({
  history: createWebHistory(env === 'site' ? '/' : import.meta.env.VITE_BASE_URL),
  routes: allRoutes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
