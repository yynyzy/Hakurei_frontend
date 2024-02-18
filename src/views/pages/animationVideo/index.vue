<template>
  <div>
    <customHeader>
      <template #header-bg>
          <autumn-bg />
      </template>
    </customHeader>

    <main class="wrapper">
      资金不足，演员待定，设计未完，等待开发...
    </main>
  </div>
</template>

<script setup lang='ts'>
import customHeader from './components/customHeader.vue';
import AutumnBg from './components/autumnBg.vue';

</script>
<style lang="less" scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
}

</style>
