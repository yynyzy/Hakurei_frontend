<template>
  <div class="page">
    <yixiv-header
      class="nav"
      :navigationContent="navigationContent"
      :active-index="navigationBarActiveIndex"
      @change-menu="onChangeMenu"
      />
    <router-view />
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import YixivHeader from './components/header.vue';
import { yixivStore } from '@/stores';

const router = useRouter();
const store = yixivStore();
const { navigationBarActiveIndex } = store;

interface INavigationContent {
  key: string,
  label: string,
};
const navigationContent = ref<INavigationContent[]>([
  {
    key: 'home',
    label: '首页',
  },
  {
    key: 'new',
    label: '新作',
  },
  {
    key: 'ranking',
    label: '排行榜',
  },
  {
    key: 'periodical',
    label: '特辑',
  }
]);
const onChangeMenu = (index: string) => {
  const value = navigationContent.value[Number(index)].key;
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
    case 'periodical':
      path = '/yixiv/periodical';
      break;
    default:
      break
  }
  router.push(path);
};

</script>
<style lang="less" scoped>
.page {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
