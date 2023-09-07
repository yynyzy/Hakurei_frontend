import { createRouter, createWebHashHistory,
 } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.matched.some((r) => r.meta?.isAuth)) {
    next({ path: "login", query: { redirect: to.fullPath }});
  } else {
    next();
  }
})

export default router;
