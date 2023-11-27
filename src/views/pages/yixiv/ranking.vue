<template>
  <section class="wrapper">
    <div class="actions">
      <div class="modes-content">
        <router-link
        :class="['mode-btn', { active: modeActiveIndex === 0 }]"
        :to="{ name: '', query: { date: 20231125, mode: 'daily' }}"
        >
          {{ i18n.daily }}
        </router-link>
        <router-link
        :class="['mode-btn', { active: modeActiveIndex === 1 }]"
        :to="{ name: '', query: { date: 20231125, mode: 'weekly' }}"
        >
          {{ i18n.weekly }}
        </router-link>
        <router-link
        :class="['mode-btn', { active: modeActiveIndex === 2 }]"
        :to="{ name: '', query: { date: 20231125, mode: 'monthly' }}"
        >
          {{ i18n.monthly }}
        </router-link>
      </div>
      <div class="filters">
        <div class="current">{{ Date.now() }}</div>
        <div class="prev" style="margin-right: 15px;">{{ i18n.lastDay }}</div>
      </div>
    </div>
    <div class="illust-box" v-loading="loading">
      <h2 class="title" v-text="i18n.title"></h2>
      <ul class="illust-content">
        <li class="illust" v-for="(item, index) in rankingPictures" :key="index">
          <picture-box :item="item" :picture-height="258" :picture-width="225" />
        </li>
      </ul>
    </div>
    <div class="pagination">
      <el-pagination style="justifyContent: center;" background layout="prev, pager, next" :current-page="currentPage"
        :total="total" :page-size="pageSize" @current-change="onCurrentPageChange" />
    </div>
  </section>
</template>

<script setup lang='ts'>
import { reactive, ref, watch } from 'vue'
import { Yixiv } from '@/views/engine';
import pictureBox from './components/pictureBox.vue';
import { IGetRankingListsParams } from '@/views/types/Yixiv';
import { yixivStore } from "@/stores";
import { useRoute } from 'vue-router';

const route = useRoute();

const { setHeaderActiveIndex } = yixivStore();
setHeaderActiveIndex(2);

const i18n = {
  title: '#排行榜',
  lastDay: '上一日',
  daily: '今日',
  weekly: '本周',
  monthly: '本月',
};


const loading = ref<boolean>(false);

watch(() => route.query,() => {
  console.log('route.query', route.query)
  const { date, mode } = route.query;
  setModeActiveIndex(mode as string);
  setRankingListsParams(date as string, mode as string);
  getRankingList();
},{ deep: true })

const modeActiveIndex = ref<number>(0);
const setModeActiveIndex = (mode: string) => {
  if (mode === 'daily') {
    modeActiveIndex.value = 0;
  } else if(mode=== 'weekly') {
    modeActiveIndex.value = 1;
  } else {
    modeActiveIndex.value = 2;
  }
};


const rankingListsParams = reactive<IGetRankingListsParams>({
  type: '0',
  ranking_date: '20231125',
  offset: 0,
  limit: 30,
});
const setRankingListsParams = (date: string, mode: string) => {
  rankingListsParams.ranking_date = date;
  let temp = 0
  if (mode=== 'weekly') {
    temp = 1;
  }
  if (mode=== 'monthly') {
    temp = 2;
  }
  rankingListsParams.type = String(temp);
};

const rankingPictures = ref<any[]>([]);
const getRankingList = async () => {
  loading.value = true;
  try {
    const { count, rows } = await Yixiv.getRankingList(rankingListsParams);
    rankingPictures.value = rows.map((item: any) => {
      item.regular_url = item.regular_url + '?x-oss-process=image/resize,w_450';
      return item;
    });
    total.value = count;
    loading.value = false;
  } catch (error) {
    /** */
  }
};

const pageSize = 30;
const currentPage = ref<number>(1);
const total = ref<number>(0);

const onCurrentPageChange = (value: number) => {
  currentPage.value = value;
  getRankingList();
};

getRankingList();

</script>
<style lang="less" scoped>
.wrapper {
  margin: 0 auto;
  width: 1224px;

  .actions {
    display: flex;
    margin: 45px 0;
    background-color: rgb(255, 174, 0);

    .modes-content {
      display: flex;

      .mode-btn {
        background: #f9f9f9;
        color: #258fb8;
        width: 120px;
        height: 40px;
        border: 0;
        line-height: 40px;
        text-align: center;
        border-radius: 4px;
        margin-right: 15px;
      }

      .active {
        background: #0096fa !important;
        color: #fff;
      }
    }

    .filters {
      display: flex;
      width: 100%;
      flex-flow: row-reverse;

      .current {
        color: #333;
        line-height: 40px;
        font-weight: 700;
        font-size: 18px;
      }

      .prev {
        color: #258fb8;
        line-height: 40px;
        text-decoration: none;
        font-size: 14px;
        margin-left: 15px;
      }
    }
  }

  .illust-box {
    margin-top: 45px;
    min-height: 200px;

    .title {
      font-size: 20px;
      line-height: 28px;
      color: rgba(0, 0, 0, .64);
      font-weight: 700;
      margin: 0 0 12px;
    }

    .illust-content {
      display: flex;
      padding: 0;
      flex-wrap: wrap;
      margin: -12px;
      list-style: none;

      .illust {
        width: 225px;
        margin: 12px;
      }
    }
  }

  .pagination {
    padding: 60px 0 20px;
  }
}
</style>
