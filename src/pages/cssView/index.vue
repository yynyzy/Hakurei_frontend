<script setup lang="ts">
type RouteMap = {
  name: string,
  link: string,
}
const title: string = '目录';
const routeMap: Array<RouteMap> = [
  {
    name: '使用CSS repeating-conic-gradient创建令人惊叹的边框动画效果',
    link: '/css/borderCssAnimation',
  }
]
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <div class="title">{{ title }}</div>
      <router-link v-for="(route, index) in routeMap" :to="route.link" :key="index">
        <text class="directory">
          {{ index + 1 }}.
        </text>
        {{ route.name }}
      </router-link>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrapper {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

.left {
  box-sizing: border-box;
  height: 100%;
  width: 20%;
  background: rgb(231, 252, 201);
  border: 1px solid;
  .title {
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    background: #fff;
  }
  .directory{
    color: #000;
  }
}

.router-view {
  height: 100%;
  width: 80%;
}

</style>
