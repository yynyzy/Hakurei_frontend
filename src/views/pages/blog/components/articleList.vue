<template>
  <div>
    <div class="list">
      <div class="article" v-for="(item, index) in articles" :key="index" @click="onClickArticle(item.id)">
        <div class="content">
          <div class="title" v-text="item.title"></div>
          <div class="description">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';
import { Article } from '@/views/types/blog';
import router from '@/router';
interface Props {
  articles: Article[],
};

defineProps<Props>();

const onClickArticle = (articleId: number) => {
  router.push(`/blog/article/${articleId}`);
}
</script>
<style lang="less" scoped>
@import '../style/global.less';

.article {
  width: 1200px;
  padding: 12px 20px 0;

  .content {
    border-bottom: 1px solid @descriptionColor;

    .title {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      width: 100%;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .description {
      display: -webkit-box;
      font-size: 13px;
      line-height: 22px;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: @descriptionColor;
      margin-bottom: 20px;
    }
  }
}
</style>
