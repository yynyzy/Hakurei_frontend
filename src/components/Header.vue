<script setup lang="ts">
const title: string = 'YYN STUDY';
</script>

<template>
  <div class="header">
    <div class="title">{{ title }}</div>
    <div class="tab-wrapper">
      <slot name="button"></slot>
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
