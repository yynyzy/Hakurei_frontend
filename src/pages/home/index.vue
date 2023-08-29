<template>
  <div class="home">
    <Header>
      <template #button>
          <wave-button  v-for="(tab, index) in tabMap" :key="index" @click="onToPage(tab)" :text="tab.name"/>
      </template>
    </Header>
    <div class="title">Home</div>
  </div>
</template>

<script setup lang="ts">
import WaveButton from './components/WaveButton.vue'
import { useRouter } from 'vue-router';


interface Tab {
  name: string,
  route: string,
}
const tabMap: Array<Tab> = [
  {
    name: '自定义组件',
    route: 'component',
  },
  {
    name: 'CSS 特效',
    route: 'css',
  },
  {
    name: 'JS 妙用',
    route: 'js',
  },
];

const router = useRouter();
const onToPage: (val: Tab) => void = (val) => {
  router.push(val.route);
};
</script>

<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;
}
</style>
