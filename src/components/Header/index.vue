<script setup lang="ts">
import WaveButton from './waveButton.vue'
const title: string = 'YYN STUDY';
import { useRouter } from 'vue-router';

interface Tab {
  name: string,
  route: string,
}
const tabMap: Array<Tab> = [
  {
    name: '自定义组件',
    route: '/component',
  },
  {
    name: 'CSS 特效',
    route: '/css',
  },
  {
    name: 'JS 妙用',
    route: '/js',
  },
];
const router = useRouter();
const onToPage: (val: Tab) => void = (val) => {
  router.push(val.route);
};
</script>

<template>
  <div class="header">
    <div class="title">{{ title }}</div>
    <div class="tab-wrapper">
      <wave-button  v-for="(tab, index) in tabMap" :key="index" @click="onToPage(tab)" :text="tab.name"/>
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
    height: 100%;
    align-items: center;
    justify-content: center;
  }
}
</style>
