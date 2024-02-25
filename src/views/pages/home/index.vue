<template>
  <div class="home">
    <main class="content">



    </main>
  </div>

      <!-- <img src="../../images/home/map.png" /> -->
      <!-- <role-list /> -->
    <!-- <parallax-scroll/> -->
    <!-- <roleModal class="role-model"/> -->
</template>

<script setup lang="ts">
// import * as wasm from "hakureireimu-webassembly";
// wasm.greet();

// import roleModal from './components/roleModel.vue';
// import parallaxScroll from './components/parallaxScroll.vue';
// import RoleList from './components/roleList.vue';

import { Member } from '@/utils';
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
  display: flex;
  justify-content: center;
  padding: 20px 0;

  .content {
    width: 1000px;
    background: rgba(183, 173, 173, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    padding: 0  1rem 1.5rem;

    .title {
      font-size: 48px;
      justify-content: center;
      text-align: center;
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
