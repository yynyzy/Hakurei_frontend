<template>
  <section class="page">
    <blog-header class="header" />
    <nav-banner class="banner" />

    <main class="container">
      <router-view />
    </main>
  </section>
</template>

<script setup lang='ts'>
import { onMounted} from 'vue';
import blogHeader from './components/blogHeader.vue';
import navBanner from './components/navBanner.vue';

const ob = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    const dom = document.querySelector('.header')!as HTMLElement;
    if (entry.isIntersecting) {
      dom.style.backgroundColor = 'transparent';
    } else {
      dom.style.backgroundColor = 'var(--g_banner_bg)';
    }
  },
  {
    threshold: 0.01,
  }
);
onMounted(() => {
  ob.observe(document.querySelector('.banner')!);
})
</script>
<style lang="less" scoped>
@import './style/global.less';

.page {
  background-color: var(--g_blog_bg);
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;

  .header {
    position: fixed;
    top: 0;
  }

  .container {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}


</style>
