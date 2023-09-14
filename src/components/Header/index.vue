<script setup lang="ts">
import WaveButton from './waveButton.vue'
import { useRouter } from 'vue-router';

interface Tab {
  name: string,
  route: string,
}
const WebName: string = 'YzYn';
const functionMap: Array<Tab> = [
  {
    name: 'blog',
    route: '/blog',
  },
];
const navigationBarMap: Array<Tab> = [
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
  <header class="header">
    <div class="header-right">
      <div class="title">{{ WebName }}</div>
      <nav class="navigation-bar">
          <ul>
            <li  v-for="(tab, index) in navigationBarMap" :key="index" @click="onToPage(tab)" :text="tab.name">{{ tab.name }}</li>
          </ul>
      </nav>
    </div>
    <div class="tab-wrapper">
      <wave-button  v-for="(tab, index) in functionMap" :key="index" @click="onToPage(tab)" :text="tab.name"/>
    </div>
  </header>
</template>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 50px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  .header-right {
    display: flex;
    justify-content:
    center;align-items: center;
    .title {
      color: #f83cd2;
      font-weight: bold;
      font-size: 30px;
      margin-right: 20px;
    }
    .navigation-bar {
    height: 100%;
    ul {
      display: flex;
      align-items: center;
      height: 100%;
      li {
        height: 100%;
        line-height: 50px;
        padding: 0 10px;
        flex: 1;
        font: 100 15px;
        white-space: nowrap;
        color: #4664b4;
        position: relative;
        &::after {
        content: "";
        border: 1px solid #d380e7;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 6px;
        transform: scaleX(0);
        transition: transform .5s;
        transform-origin: right;
      }
      &:hover {
        &::after {
          transform-origin: left;
          transform: scaleX(1);
       }
      }
      }
    }
  }
  }


  .tab-wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }


}
</style>
