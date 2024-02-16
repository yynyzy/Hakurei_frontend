<template>
  <div class="wrapper">
    <div class="article">
      <div class="part title">
        <div class="mean">标题：</div>
        <div class="content">{{ articleDetail?.title }}</div>
      </div>
      <div class="part title">
        <div class="mean">创建时间：</div>
        <div class="content">{{ articleDetail?.createdAt }}</div>
      </div>
      <div class="part description">
        <div class="mean">摘要：</div>
        <div class="content">{{ articleDetail?.description }}</div>
      </div>
      <div class="part content">
        <div class="mean">内容：</div>
        <div class="content">{{ articleDetail?.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Article } from '@/views/types/blog';
import { ref } from 'vue'
import { useRoute } from "vue-router";

const route = useRoute();
const articleId = route.params.id
console.log(articleId);


const articleDetail = ref<Article>();
const getArticleById = async() => {
  // articleId
  articleDetail.value = {
    id: 21,
    user_id: "dadnan",
    title: "22",
    description: "adhjakbdadadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsn",
    content: "dadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsndadaksndkasndlkandknalsn",
    status: 2,
    createdAt: 2018,
    updatedAt: 2019,
  }
}
getArticleById()
</script>
<style lang="less" scoped>

.wrapper {
  // background-color: #fff;
  margin-top: 100px;
  width: 1200px;


  .article {
    width: 100%;

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
        background-color: #fff;
        width: 100%;
        font-size: 16px;
        line-height: 22px;
      }
    }
    .title {

    }

    .description {

    }

    .content {

    }
  }
}
</style>
