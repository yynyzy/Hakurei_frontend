<template>
  <div class="wrapper">
    <div class="article">
      <div class="part title">
        <div class="mean">标题：</div>
        <div class="content">
          <el-input v-model="articleInfo.title" placeholder="Please input title" />
        </div>
      </div>
      <div class="part description">
        <div class="mean">摘要：</div>
        <el-input v-model="articleInfo.description" placeholder="Please input description" />
      </div>
      <div class="part content">
        <div class="mean">内容：</div>
        <v-md-editor v-model="articleInfo.content" height="1000px"></v-md-editor>
      </div>

      <div class="btn">
        <div class="submit">
          <el-button type="success" @click="onCreateArticle">提交</el-button>
        </div>
        <div class="back">
          <el-button type="primary" @click="onBack">返回</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Blog } from '@/views/engine';
import { ArticleCreate } from '@/views/types/blog';
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

interface Emits {
    (event: 'create'): void;
};
const emits = defineEmits<Emits>();
const articleInfo = ref<ArticleCreate>({
  title: "",
  description: "",
  content: "",
  status: 3,
});


const router = useRouter();

const onCreateArticle = async () => {
  if(!articleInfo.value.title) {
    ElMessage.error("请输入标题");
    return;
  }
  if(!articleInfo.value.description) {
    ElMessage.error("请输入摘要");
    return;
  }
  if(!articleInfo.value.content) {
    ElMessage.error("请输入内容");
    return;
  }
    const res = await Blog.createArticle(articleInfo.value);
  if (res.status === 200) {
    ElMessage.success("创建文章成功");
  } else {
    ElMessage.error("创建文章失败");
  }
  emits('create');
  router.back();
}

const onBack = () => {
  router.back();
}
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

      .mean {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
      }

      .content {
        width: 100%;
        font-size: 16px;
        line-height: 22px;
      }
    }

    .content {}

    .btn {
      width: 100%;
      margin-top: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .back {
        margin-left: 10px;
      }
    }
  }
}
</style>
