<template>
  <div>
    <recommend-tags :tags="tags"/>
    <div class="container">
      <section class="recommend-container wrapper">
        <h2 v-text="i18n.recommendTitle"></h2>
        <ul class="illust-box">
          <li class="illust" v-for="(item, index) in recommendPictures" :key="index">
            <picture-box :item="item" />
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import recommendTags from './components/recommendTags.vue';
import pictureBox from './components/pictureBox.vue';
import Yixiv from '@/views/engine/Yixiv';
import { yixivStore } from "@/stores";

const { setHeaderActiveIndex } = yixivStore();
setHeaderActiveIndex(0)
const i18n = {
  recommendTitle: '推荐作品',
};

const tags = ref([]);
const getRecommendTags  = async () => {
  const { rows } = await Yixiv.getTags();
  tags.value = rows.slice(0, 20);
};

const recommendPictures = ref([]);
const getRecommendPicture  = async () => {
  const { rows } = await Yixiv.getRecommendPicture({ limit: 18, offset: 90 });
  recommendPictures.value = rows;
};

getRecommendTags();
getRecommendPicture();
</script>
<style lang="less" scoped>

.container {
  padding: 0 220px;

  .wrapper {
    padding-bottom: 64px;

    h2 {
      font-size: 20px;
      line-height: 28px;
      color: #000000a3;
      font-weight: 700;
      margin: 0 0 12px;
    }
    .illust-box {
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;

      .illust {
        margin: 12px;
      }
    }
  }
}

</style>
