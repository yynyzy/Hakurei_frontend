<template>
  <section class="wrapper">
    <yixiv-header class="nav" @change-menu="onChangeMenu" @search="onSearch"/>
    <recommend-tags :tags="tags"/>
    <div class="container">
      zhaop
    </div>
  </section>
</template>
<script setup lang='ts'>
import YixivHeader from './components/header.vue';
import recommendTags from './components/recommendTags.vue';
import { Yixiv } from '@/views/engine';
import { ref, reactive,toRefs,onBeforeMount,onMounted} from 'vue'

const onChangeMenu = (value: any) => {
  console.log(value);
};

const onSearch = (value: any) => {
  console.log(value);
};


const tags = ref([]);
const getRecommendTags  = async () => {
  const { rows } = await Yixiv.getTags();
  tags.value = rows.slice(0, 20);
}
getRecommendTags();

</script>
<style lang="less" scoped>
.wrapper {
  min-height: 100vh;
}

.container {
  background: yellow
}
</style>
