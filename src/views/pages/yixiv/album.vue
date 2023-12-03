<template>
  <div class="album-wrapper">
    <div v-for="(item, index) in albumList" class="album-item" :key="index">
      <div class="card">
        <div class="thumbnail">
          <el-image class="img" :src="item.cover" fit="cover" lazy @click="onClickImage" />
        </div>
        <div class="title-wrapper">
          <router-link  :to="`/album/${item.album_id}`">
            <h2 class="link-title" v-text="item.title"></h2>
          </router-link>
        </div>
        <div class="footer"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Yixiv } from '@/views/engine';
import { IGetAlbumList } from '@/views/types/Yixiv';
import { ref } from 'vue';

const albumList = ref<any[]>([]);
const getAlbumList = async () => {
  const params: IGetAlbumList = {
    offset: 0,
    limit: 15,
  };
  const { rows } = await Yixiv.getAlbumList(params);
  albumList.value = rows;
};

const onClickImage = () => {

};

getAlbumList();
</script>
<style lang="less" scoped>
.album-wrapper {
  padding: 7px;

  .album-item {
    float: left;
    box-sizing: border-box;
    width: 33.3%;
    padding-left: 7.5px;
    padding-right: 7.5px;

    .card {
      min-height: 380px;
      background: #fff;
      margin-bottom: 15px;
      box-shadow: 1px 2px 2px 2px #eaeaea;
      border-radius: 5px;
      overflow: hidden;
      border-width: 0;

      .thumbnail {
        height: 238px;
        overflow: hidden;

        .img {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: top;
        }
      }

      .title-wrapper {
        .link-title {
          font-weight: 700;
          font-size: 16px;
          letter-spacing: 0;
          line-height: 26px;
          margin: 15px;
        }
      }
    }
  }
}
</style>
