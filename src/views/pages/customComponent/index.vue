<script setup lang="ts">
import { ref } from 'vue';
import components from './componentController';

interface menuType {
  name: string,
  data: any,
};
const currentCompIndex = ref(0);
const introduce: {tipOne: string, tipTwo: string} = {
  tipOne: 'Hi, this is a',
  tipTwo: 'Custom Components page',
};
const menus: Array<menuType> = [
  {
    name: '瀑布流组件',
    data: '',
  },
  {
    name: '代码风暴',
    data: '',
  },
];
const onClickMenu = (val: any) => {
  if (currentCompIndex.value !== val) {
    currentCompIndex.value = val;
  }
};
</script>

<template>
  <section class="page">
    <y-header/>
    <div class="container">
      <y-sidebar
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
  </section>
  <y-support/>
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
        top: 80px;
        left: 10px;
    }
  }
}
</style>
