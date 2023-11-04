import { createRouter, createWebHashHistory,
 } from 'vue-router';
import { routes } from './routes';
import { tokenStore } from '@/stores';
import { message } from 'ant-design-vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.matched.some((r) => r.meta?.isAuth)) {
    const store = tokenStore();
    // if (!store.ACCESS_TOKEN.token) {
    //   message.info('您没有权限，请重新登陆');
    //   next({ path: "login", query: { redirect: to.fullPath }});
    //   return;
    // }
  }
  next();
})

export default router;
