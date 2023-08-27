<template>
  <div class="wrapper">
    <water-fall :gap="10" :column="6" :page-size="20" :request="requestData">
      <template #item="{ item }">
        <img :src="item.url" alt="图片" class="img" >
      </template>
    </water-fall>
  </div>
</template>

<script setup lang='ts'>
import WaterFall from '../components/WaterFall.vue';
import { ImageItem } from '../WaterFallComponent/type';

const requestData = (page: number, pageSize:number): Promise<ImageItem[]> => {
  return new Promise<ImageItem[]>((resolve) => {
    fetch(`https://blogback.fasyncsy.com.cn/vilipix/ranking?pageSize=${pageSize}&page=${page}`).then(async (res) => {
      console.log(res);
      const result = await res.json();
      const imageList: ImageItem[] = result.data.rows.map((i: any) => ({
        id: i.picture_id,
        url: i.origin_url,
        height: i.height,
        width: i.width,
      }));
      console.log('img', imageList)
      resolve(imageList)
    })
  })
};

</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;

  .image {
    width: 100%;
    height: 100%;
    object-fit:cover
  }
}
</style>
