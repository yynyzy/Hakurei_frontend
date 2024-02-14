<template>
  <div class="home">
    <y-header />
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
// import { tokenStore } from "@/stores";
// import roleModal from './components/roleModel.vue';
// import parallaxScroll from './components/parallaxScroll.vue';
// import RoleList from './components/roleList.vue';

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
