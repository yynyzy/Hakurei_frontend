<template>
  <div class="home">
    <y-header/>
    <main class="content">
      <h1 class="title">东方幻想乡地图</h1>
      <div class="map">
        <img src="../../images/home/map.png" />
      </div>
      <!-- <div class="list">
        <role-list />
      </div> -->
      <!-- <parallax-scroll/> -->
  <!-- <div @click="getUserInfo">getUserInfo</div>
  <roleModal class="role-model"/> -->

    </main>
  </div>
</template>

<script setup lang="ts">
// import * as wasm from "hakureireimu-webassembly";
// wasm.greet();

// import roleModal from './components/roleModel.vue';
// import parallaxScroll from './components/parallaxScroll.vue';
// import RoleList from './components/roleList.vue';

import Member from '@/utils/member';
import { UserInfo } from '@/views/types/User';
import { ref } from 'vue';

const userInfo = ref<UserInfo>({
  username: '',
  id: '',
  role: 0,
  status: 0
});
const getUserInfo = async () => {
  const user = await Member.getUserInfo();
  console.log("res", user);
  userInfo.value = {
    ...userInfo.value,
    ...user,
  };
}

getUserInfo();
</script>

<style lang="less" scoped>
@import './style.less';

.home {
  position: relative;
  width: 100%;
  min-height: 100%;
  background: var(--g_home_bg);

  .home-header {
    position: absolute;
    top: 0;
    z-index: 99;
  }

  .content {
    width: 100%;
    padding: 1.5rem 1rem 0;

    .title {
      font-size: 48px;
      justify-content: center;
      text-align: center;
      margin: 20px 0;
    }

    .map {
      display: flex;
      justify-content: center;

      img {
        width: 100%;
        overflow-clip-margin: content-box;
        overflow: clip;
      }
    }
  }
}


.list {
  background-color: aqua;
}
</style>
