<template>
  <header class="header">
    <div class="header-left">
      <div class="title">{{ WebName }}</div>
      <y-theme-controller />
      <nav class="navigation-bar">
        <ul>
          <li v-for="(tab, index) in routerMapLeft" :key="index" @click="onToPage(tab)" :text="tab.name">{{ tab.name }}
          </li>
        </ul>
      </nav>
    </div>
    <div class="header-right">
      <nav class="navigation-bar">
        <ul>
          <li>
            <y-avatar/>
          </li>
          <li v-for="(tab, index) in routerMapRight" :key="index" @click="onToPage(tab)" :text="tab.name">
            {{ tab.name }}</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Tab {
  name: string,
  route: string,
}
const WebName: string = 'YzYn';
const routerMapLeft: Array<Tab> = [
  {
    name: '首页',
    route: '/home',
  },
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
const routerMapRight: Array<Tab> = [
  {
    name: 'blog',
    route: '/blog',
  },
  {
    name: 'blog',
    route: '/blog',
  },
  {
    name: 'blog',
    route: '/blog',
  },
];

const router = useRouter();
const onToPage: (val: Tab) => void = (val) => {
  router.push(val.route);
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  height: 60px;
  padding: 10px 20px;
  z-index: 9999;

  .header-left {
    display: flex;
    justify-content:
      center;
    align-items: center;

    .title {
      color: #f83cd2;
      font-weight: bold;
      font-size: 30px;
      margin-right: 10px;
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


  .header-right {
    display: flex;
    align-items: center;
    justify-content: center;

    .navigation-bar {
      height: 100%;

      ul {
        display: flex;
        align-items: center;
        height: 100%;

        li {
          height: 100%;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
