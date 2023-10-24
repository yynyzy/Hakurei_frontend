<template>
  <div class="home">
    <custom-header class="home-header">
      <template #header-bg>
        <autumn-bg />
      </template>
    </custom-header>
    <div class="container">
      <div @click="getUserInfo">getUserInfo</div>
      <roleModal class="role-model"/>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { tokenStore } from "@/stores";
import customHeader from './components/customHeader.vue';
import roleModal from './components/roleModel.vue';
import autumnBg from './components/autumnBg.vue';

// import { User } from '../../engine';
// const store = tokenStore();

const getUserInfo = async () => {
  // const res = await User.getUserInfo({
  //   token: store.ACCESS_TOKEN.token
  // });
}
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
  .container {
    height: 100%;
    padding: 0 100px;
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    overflow:hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .role-model {
        z-index:1;
        margin: 100px auto;
    }
  }
}
</style>
