<template>
  <div>
    <recommend-tags :tags="tags"/>
    <div class="container">
      <section class="recommend-container wrapper">
        <h2 v-text="i18n.recommendTitle"></h2>
        <ul class="illust-box">
          <li v-for="(item, index) in recommendPictures" :key="index">
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

const { setNavigationBarActiveIndex } = yixivStore();
setNavigationBarActiveIndex(0)
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
  margin: 0 auto;

  .wrapper {
    padding-bottom: 64px;
    margin: 0 auto;
    width: 1224px;

    h2 {
      font-size: 20px;
      line-height: 28px;
      color: #000000a3;
      font-weight: 700;
      margin: 0 0 12px;
    }
  }

  .recommend-container {
    .illust-box {
      background-color: #ffffff;
      display: flex;
      flex-wrap: wrap;
      margin: -12px;
    }
  }
}

</style>
