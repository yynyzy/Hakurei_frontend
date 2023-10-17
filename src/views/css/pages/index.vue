<script setup lang="ts">
import { ref } from 'vue';
import components from '../componentController';

const currentCompIndex = ref(0);
const introduce: {tipOne: string, tipTwo: string} = {
  tipOne: 'Hi, this is a',
  tipTwo: 'CSS effect page',
};

const onClickMenu = (val: any) => {
  if (currentCompIndex.value !== val) {
    currentCompIndex.value = val;
  }
}
</script>

<template>
  <section class="page">
    <y-header/>
      <y-sidebar
        class="sidebar"
        :introduce="introduce"
        :menus="components"
        @getMenuIndex="onClickMenu"
      />
      <component
        v-drag
        :key="currentCompIndex"
        :is="components[currentCompIndex].component"
      />
    </section>
    <y-support/>
</template>

<style lang="less" scoped>
.page {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  perspective: 1200px;
  overflow: hidden;
  background: @bg-color2;

  .sidebar {
      position: absolute;
      top: 80px;
      left: 10px;
  }
}
</style>
