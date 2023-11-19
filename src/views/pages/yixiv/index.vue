<template>
  <div class="page">
    <yixiv-header class="nav" @change-menu="onChangeMenu" @search="onSearch"/>
    <router-view />
  </div>
</template>
<script setup lang='ts'>
import { useRouter } from 'vue-router';
import YixivHeader from './components/header.vue';

const router = useRouter();

const onChangeMenu = (value: string) => {
  let path = '';
  switch(value) {
    case 'home':
      path = '/yixiv';
      break;
    case 'new':
      path = '/yixiv/new';
      break;
    case 'ranking':
      path = '/yixiv/ranking';
      break;
    default:
      break
  }
  router.push(path);
};

const onSearch = (value: any) => {
  const type = 'tag'
  console.log(value);
  router.push(`/yixiv/search/${type}/${value}`);
};

</script>
<style lang="less" scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
