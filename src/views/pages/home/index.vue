<template>
  <div class="home">
    <y-header />
    <main class="container">
      <feature-banner />
        <div style="height: 300px; width: 1600px; background: red;"></div>
        <!-- <parallax-scroll/> -->
          <!-- <div @click="getUserInfo">getUserInfo</div>
          <roleModal class="role-model"/> -->
      </main>
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
  width: 100%;
  min-height: 100%;
  background: var(--g_home_bg);
  opacity: 0.91;
  overflow-x: scroll;

  .home-header {
    position: absolute;
    top: 0;
    z-index: 99;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
}
</style>
