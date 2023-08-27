<script setup lang="ts">
type RouteMap =  {
  name: string,
  link: string,
}
const title: string = '目录';
const routeMap: Array<RouteMap> = [
  {
    name: '瀑布流组件',
    link: '/component/waterFallComponent',
  },
]
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <div class="title">{{ title }}</div>
      <div v-for="(route, index) in routeMap" :key="index" class="router-link">
        <router-link  :to="route.link" >
          <text class="directory">
            {{ index + 1 }}.
          </text>
          {{ route.name }}
        </router-link>
      </div>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import 'common/css/common.css';
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
  .router-link {
    margin-bottom: 10px;
  }
  .directory{
    color: #000;
  }
}

.router-view {
  height: 100%;
  width: 80%;
  background: var(--css-bg-color);
}

</style>
