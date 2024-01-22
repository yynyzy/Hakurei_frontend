<template>
  <section class="page">
    <blog-header class="header"/>
    <nav-banner class="banner"/>

    <main class="container">
      <router-view />
    </main>
  </section>
</template>

<script setup lang='ts'>
// import { ref, reactive,toRefs,onBeforeMount,onMounted} from 'vue';
import blogHeader from './components/blogHeader.vue';
import navBanner from './components/navBanner.vue';
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
    background-color: transparent;
  }

  .container {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}


</style>
