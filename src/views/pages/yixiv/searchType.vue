<template>
  <section class="wrapper">
    <div class="tags-box" v-if="type !== SearchType.AUTHOR">
      <div class="tag">
        <h2  v-text="key"></h2>
      </div>
    </div>
    <main>
      <authorList
          v-if="type === SearchType.AUTHOR"
          :author-list="searchAuthor"
        />
      <div class="content-tag" v-else>
          <div v-for="(item, index) in searchAuthor">
          {{ item }}+{{ index }}
        </div>
      </div>
    </main>
    <el-pagination
        style="justifyContent: center;"
        background
        layout="prev, pager, next"
        hide-on-single-page
        :current-page="currentPage"
        :total="total"
        :page-size="pageSize"
        @current-change="onCurrentPageChange"
    />
  </section>
</template>

<script setup lang='ts'>
import { Yixiv } from '@/views/engine';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { ISearchByTypeParams, SearchType } from '@/views/types/Yixiv';
import authorList from './components/authorList.vue';

const route = useRoute();
const { type: type_, key: key_ } = route.params;
const type = Array.isArray(type_) ? type_[0] : type_;
const key = Array.isArray(key_) ? key_[0] : key_;


const pageSize = 30;
const currentPage = ref<number>(1);
const total = ref<number>(0);

const searchAuthor = ref<any[]>([]);
const searchByType = async() => {
  const params: ISearchByTypeParams = {
    type,
    keyword: key,
    offset: 0,
    limit: pageSize,
  }
  const { count, rows } = await Yixiv.searchByType(params);
  total.value = count;
  searchAuthor.value = rows;
}

const init = () => {
  searchByType();
}

init()

const onCurrentPageChange = (value: number) => {
  currentPage.value = value;
  searchByType();
};


</script>
<style lang="less" scoped>

.wrapper {
    margin-top: 48px;
    .tags-box {
      margin: 0 auto 20px;
      width: 1224px;
      position: relative;
      display: flex;
      align-items: flex-start;
      background-color: red;

      .tag {
        display: flex;
        margin-bottom: 8px;

        h2 {
          margin: 0;
          color: rgba(0,0,0,.88);
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
}
</style>
