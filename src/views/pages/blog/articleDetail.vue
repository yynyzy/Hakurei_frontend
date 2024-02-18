<template>
  <div class="wrapper">
    <div class="article">
      <div class="part title">
        <div class="mean">标题：</div>
        <div class="content">{{ articleInfo?.title }}</div>
      </div>
      <div class="part title">
        <div class="mean">创建时间：</div>
        <div class="content">{{articleInfo?.created_at}}</div>
      </div>
      <div class="part description">
        <div class="mean">摘要：</div>
        <div class="content">{{ articleInfo?.description }}</div>
      </div>
      <div class="part content">
        <div class="mean">内容：</div>
        <div class="content">{{ articleInfo?.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Blog } from '@/views/engine';
import { Article } from '@/views/types/blog';
import { ElMessage } from 'element-plus';
import moment from 'moment';
import { ref } from 'vue'
import { useRoute } from "vue-router";

const route = useRoute();

const getArticleIdRouteParams = () => {
  const { id } = route.params;
  return Array.isArray(id) ? id[0] : id;
};

const articleInfo = ref<Article | null>(null);

const getArticleById = async() => {
  const res = await Blog.getArticleInfoByArticleId(Number(getArticleIdRouteParams()));
  if (res.status === 200) {
    const info = res.data[0];
    info.created_at = moment(articleInfo.value?.created_at).format('YYYY-MM-DD')
    articleInfo.value = info;
  } else {
    ElMessage.error("获取文章失败")
  }
}
getArticleById()
</script>
<style lang="less" scoped>

.wrapper {
  width: 1000px;
  padding-bottom: 100px;


  .article {
    width: 100%;
    min-height: 700px;
    padding: 20px;
    background-color: #fff;

    .part {
      // overflow: hidden;
      word-wrap:break-word;
      margin-top: 20px;

      .mean {
        font-size: 20px;
        font-weight: 600;
      }

      .content {
        margin-top: 20px;
        // background-color: var(--g_blog_bg);
        width: 100%;
        font-size: 16px;
        line-height: 22px;
      }
    }
    // .title {

    // }

    // .description {

    // }

    // .content {

    // }
  }
}
</style>
