<template>
  <main class="wrapper">
    <div class="cover">
      <!-- <el-image class="img" :src="item.cover" fit="cover" lazy /> -->
    </div>
    <div class="info"></div>
  </main>
</template>

<script setup lang='ts'>
// import { ref, reactive,toRefs,onBeforeMount,onMounted} from 'vue';
import { yixivStore } from '@/stores';
import { useRoute } from 'vue-router';
const { setNavigationBarActiveIndex } = yixivStore();
setNavigationBarActiveIndex(3);

const route = useRoute();

const getRouteParams = () => {
  const { albumId } = route.params;
  return Array.isArray(albumId) ? albumId[0] : albumId;
}

getRouteParams();

</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;

  .cover {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
}
</style>
