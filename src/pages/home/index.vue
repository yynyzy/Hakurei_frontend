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
import Header from '@/components/Header.vue';
import WaveButton from './components/WaveButton.vue'
import { useRouter } from 'vue-router';


interface Tab {
  name: string,
  route: string,
}
const tabMap: Array<Tab> = [
  {
    name: 'CSS 特效页面',
    route: 'css',
  },
  {
    name: 'JS 页面',
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
