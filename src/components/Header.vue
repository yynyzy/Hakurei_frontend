<script setup lang="ts">
import { useRouter } from 'vue-router';

const title: string = 'YYN STUDY';

type Tab = {
  name: string,
  route: string,
}
const tabMap: Array<Tab> = [
  {
    name: 'CSS 特效页面',
    route: 'css',
  },
  {
    name: 'JS 页面',
    route: 'js',
  },
];
const router = useRouter();
const onToPage: (val: Tab) => void = (val) => {
  router.push(val.route);
};
// const onToPage: ()=> void = () => {

// }
</script>

<template>
  <div class="header">
    <div class="title">{{ title }}</div>
    <div class="tab-wrapper">
      <div v-for="(tab, index) in tabMap" :key="index" class="tab" @click="onToPage(tab)">
        {{ tab.name }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 50px;
  background: rgb(201, 252, 192);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  .title {
    color: #f83cd2;
    font-weight: bold;
    font-size: 30px;
  }

  .tab-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;

  .tab {
    margin-right: 10px;
    background: #f00;
  }
}
}
</style>
