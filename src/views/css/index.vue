<script setup lang="ts">
import { ref } from 'vue';
import components from './componentController';

interface Menus {
  name: string,
  data: any,
}

const currentCompIndex = ref(0);
const introduce: {tipOne: string, tipTwo: string} = {
  tipOne: 'Hi, this is a',
  tipTwo: 'CSS effect page',
};
const menus: Array<Menus> = [
  {
    name: '使用CSS repeating-conic-gradient创建令人惊叹的边框动画效果',
    data: '',
  },
  {
    name: 'vue3+canvas实现选票功能',
    data: '',
  },
  {
    name: 'css动画 文字扫描加载（文字描边、伪元素、动画）',
    data: '',
  },
  {
    name: '立体翻页书',
    data: '',
  }
]

const onClickMenu = (val: any) => {
  if (currentCompIndex.value !== val) {
    currentCompIndex.value = val;
  }
}
</script>

<template>
  <div class="page">
    <Header/>
    <div class="container">
      <sidebar
        class="sidebar"
        :introduce="introduce"
        :menus="menus"
        @getMenuIndex="onClickMenu"
      />
        <component
        v-drag
        :key="currentCompIndex"
        :is="components[currentCompIndex]"
        />
    </div>
  </div>
</template>

<style lang="less" scoped>
.page {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  .container {
    position: relative;
    height: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: @bg-color2;
    perspective: 1200px;
    overflow: hidden;

    .sidebar {
        position: absolute;
        top: 10px;
        left: 10px;
    }
  }
}
</style>
