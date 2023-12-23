<template>
  <div class="home">
    <y-header />
    <main class="container">
      <feature-banner />
    </main>
    <!-- <parallax-scroll/> -->
      <!-- <div @click="getUserInfo">getUserInfo</div>
      <roleModal class="role-model"/> -->
  </div>
</template>

<script setup lang="ts">
// import { tokenStore } from "@/stores";
// import roleModal from './components/roleModel.vue';
// import parallaxScroll from './components/parallaxScroll.vue';
import FeatureBanner from './components/featureBanner.vue';

// import { User } from '../../engine';
// const store = tokenStore();
// const getUserInfo = async () => {
//   // const res = await User.getUserInfo({
//   //   token: store.ACCESS_TOKEN.token
//   // });
// }
</script>

<style lang="less" scoped>
@import './style.less';

.home {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: @background;
  opacity: 0.91;
  overflow: hidden;

  .home-header {
    position: absolute;
    top: 0;
    z-index: 99;
  }

  .container {
    margin: 0 auto;
    max-width: 1536px;
    padding: 2rem 1rem;
  }
}
</style>
