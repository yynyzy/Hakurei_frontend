<template>
  <section class="home">
    <article-list :articles="articles"></article-list>
  </section>
</template>

<script setup lang='ts'>
import type { Article } from '@/views/types/blog';
import articleList from './components/articleList.vue';
import Blog from '@/views/engine/Blog';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';

const articles  = ref<Article[]>([]);

const getArticles = async () => {
  const res = await Blog.getArticles();
  if (res.status === 200) {
    articles.value = res.data;
  } else {
    ElMessage.error("获取文章列表失败")
  }
}

getArticles();
</script>
<style lang="less" scoped>
.home {
  margin-top: -50px;
  width: 1200px;
  min-height: 1000px;
  background-color: #fff;
}
</style>
