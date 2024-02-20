<template>
  <div class="wrapper">
    <div class="article">
      <div class="part title">
        <div class="mean">标题：</div>
        <div class="content">{{ articleInfo?.title }}</div>
      </div>
      <div class="part author">
        <div class="mean">作者：</div>
        <div class="content">{{ articleInfo?.user_name }}</div>
      </div>
      <div class="part title">
        <div class="mean">创建时间：</div>
        <div class="content">{{ articleInfo?.created_at }}</div>
      </div>
      <div class="part description">
        <div class="mean">摘要：</div>
        <div class="content">{{ articleInfo?.description }}</div>
      </div>
      <div class="part-without-border content">
        <div class="mean">内容：</div>
        <div class="articleInfo-content">
          <v-md-editor v-model="articleInfo.content" mode="preview" />
        </div>
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

const articleInfo = ref<Article>({
  id: 0,
  user_id: '',
  user_name: '',
  title: '',
  description: '',
  content: '',
  status: 0,
  created_at: undefined,
  updated_at: undefined
});

const getArticleById = async () => {
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
      word-wrap: break-word;
      margin-top: 20px;
      border-bottom: 1px solid #808080;
    }

    .part-without-border {
      word-wrap: break-word;
      margin-top: 20px;
      border: none;
    }

    .mean {
      font-size: 20px;
      font-weight: 600;
    }

    .content {
      margin-top: 20px;
      width: 100%;
      font-size: 16px;
      line-height: 22px;
    }

    .articleInfo-content {
      border: 1px solid #808080;
    }
  }
}
</style>
