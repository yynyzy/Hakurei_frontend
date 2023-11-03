<template>
  <div class="home">
    <y-header />
    <parallax-scroll/>
      <!-- <div @click="getUserInfo">getUserInfo</div>
      <roleModal class="role-model"/> -->
  </div>
</template>

<script setup lang="ts">
// import { tokenStore } from "@/stores";
// import roleModal from './components/roleModel.vue';
import parallaxScroll from './components/parallaxScroll.vue';

// import { User } from '../../engine';
// const store = tokenStore();
// const getUserInfo = async () => {
//   // const res = await User.getUserInfo({
//   //   token: store.ACCESS_TOKEN.token
//   // });
// }
</script>

<style lang="less" scoped>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;

  .home-header {
    position: absolute;
    top: 0;
    z-index: 99;
  }
}
</style>
