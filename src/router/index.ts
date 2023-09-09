import { createRouter, createWebHashHistory,
 } from 'vue-router';
import { routes } from './routes';
import { tokenStore } from '@/stores';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.matched.some((r) => r.meta?.isAuth)) {
    const store = tokenStore();
    if (!store.ACCESS_TOKEN.token) {
      next({ path: "login", query: { redirect: to.fullPath }});
      return;
    }
  }
  next();
})

export default router;
