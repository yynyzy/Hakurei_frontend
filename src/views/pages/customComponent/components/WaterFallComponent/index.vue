<template>
  <div class="page">
    <div class="wrapper">
      <water-fall :gap="20" :column="6" :page-size="20" :request="requestData">
        <template #item="{ item }">
          <img :src="item.url" alt="图片" class="img" >
        </template>
      </water-fall>
    </div>
  </div>
</template>

<script setup lang='ts'>
import WaterFall from './components/WaterFall.vue';
import { getCurrentInstance, ComponentInternalInstance } from 'vue';
import { ImageItem } from './type';

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const requestData = async (page: number, pageSize:number): Promise<ImageItem[]> => {
  const res = await proxy?.$http.get(`https://blogback.fasyncsy.com.cn/vilipix/ranking?pageSize=${pageSize}&page=${page}`);
  const imageList: ImageItem[] = res?.data.rows.map((i: any) => ({
    id: i.picture_id,
    url: i.original_url,
    height: i.height,
    width: i.width,
  }));
  return imageList;
};

</script>
<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    width: 80%;
    height: 70%;
    .img {
      width: 100%;
      height: 100%;
      object-fit:cover;
    }
  }
}
</style>
