<template>
  <section class="page">
    <blog-header />
    <main class="container">
      <router-view />
    </main>
  </section>
</template>

<script setup lang='ts'>
// import { ref, reactive,toRefs,onBeforeMount,onMounted} from 'vue';
import blogHeader from './components/blogHeader.vue';
</script>
<style lang="less" scoped>
@import './style/global.less';

.page {
  background-color: @backgroundColor1;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;

  .container {
    width: 1200px;
    background-color: #f26363;
    min-height: 80vh;
    margin-top: 10px;
  }
}


</style>
