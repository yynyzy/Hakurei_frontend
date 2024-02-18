<template>
  <section class="wrapper">
    <article-list :articles="articles" @delete="onClickArticleDelete"></article-list>
  </section>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { Blog } from '@/views/engine';
import { ElMessage } from 'element-plus';
import articleList from './components/articleList.vue';
import { Article } from '@/views/types/blog';

const articles  = ref<Article[]>([]);

const getArticlesByUserId = async () => {
  const res = await Blog.getArticlesByMySelf();
  if (res.status === 200) {
    articles.value = res.data;
  } else {
    ElMessage.error("获取文章列表失败")
  }
}

const onClickArticleDelete = () => {
  getArticlesByUserId();
};

getArticlesByUserId();

</script>
<style lang="less" scoped>

.wrapper {
  background-color: #fff;
  min-height: 1000px;
}
</style>
