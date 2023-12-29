<template>
  <section class="blog">
    <!-- <y-header /> -->
    <div>
      <blog-header />
    </div>
    <main class="container">

    </main>
  </section>
</template>

<script setup lang='ts'>
import { ref, reactive,toRefs,onBeforeMount,onMounted} from 'vue';
import blogHeader from './components/blogHeader.vue';
</script>
<style lang="less" scoped>
@import './style/global.less';

.blog {
  background-color: @backgroundColor1;
  min-height: 100vh;
}

.container {
  background-color: red;
}
</style>
