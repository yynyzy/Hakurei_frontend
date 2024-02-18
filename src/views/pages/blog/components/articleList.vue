<template>
  <div>
    <div class="list">
      <div class="article" v-for="(item, index) in articles" :key="index" >
        <div class="content">
          <div class="left">
            <div class="line">
              <div class="text">标题:</div>
              <div class="title" v-text="item.title"></div>
            </div>
            <div class="line">
              <div class="text">描述:</div>
              <div class="description" v-text="item.description"></div>
            </div>
          </div>

          <div class="right">
            <div class="btn" @click="onArticleView(item.id)">
              <i class="fa fa-book-reader read" />
              <text class="read-text">阅读</text>
            </div>
            <div class="btn" @click="onArticleDelete(item.id)">
              <i class="fa fa-trash-alt bin" />
              <text class="bin-text">删除</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';
import { Article } from '@/views/types/blog';
import router from '@/router';
import { Blog } from '@/views/engine';
import { ElMessage } from 'element-plus';
interface Props {
  articles: Article[],
};
defineProps<Props>();
interface Emits {
    (event: 'delete'): void;
};
const emits = defineEmits<Emits>();

const onArticleView = (articleId: number) => {
  router.push(`/blog/article/${articleId}`);
}

const onArticleDelete = async (articleId: number) => {
  const res = await Blog.deleteArticleByArticleId(articleId);
  if (res.status === 200) {
    emits('delete');
    ElMessage.success("删除文章成功")
  } else {
    ElMessage.error("删除文章失败")
  }
}

</script>
<style lang="less" scoped>
@import '../style/global.less';

.article {
  width: 1200px;
  padding: 12px 20px 0;

  .content {
    border-bottom: 1px solid @descriptionColor;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;


      .left {

        .line {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .text {
          font-size: 16px;
          line-height: 16px;
          width: 90px;
        }

        .title {
          font-weight: 600;
          font-size: 16px;
          line-height: 16px;
          width: 100%;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .description {
          display: -webkit-box;
          font-size: 13px;
          line-height: 16px;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          color: @descriptionColor;
        }
      }

      .right {
        display: flex;
        justify-content: center;
        align-items: center;

        .btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-right: 15px;

          .read {
            font-size: 16px;
            color: #808080;
          }

          .read-text {
            font-size: 12px;
            color: #808080;
          }

          .bin {
            font-size: 16px;
            color: #ff0000;
          }

          .bin-text {
            font-size: 12px;
            color: #ff0000;
          }
        }
      }
    }

}
</style>
