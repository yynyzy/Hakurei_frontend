<template>
  <nav class="nav">
    <div class="left-header">
      <div class="logo">{{ i18n.logo }}</div>
      <a-menu :selectedKeys="current" mode="horizontal" :items="items" @click="onclickMenu"/>
    </div>
    <div class="right-header">
      <el-input
      class="search"
      v-model="searchValue"
      :placeholder="i18n.searchIllustration"
      :prefix-icon="Search"
      @change="onSearch"
      />
    <div class="tag">tag</div>
    </div>
    <a class="back" href="/#">back</a>
  </nav>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
import { MenuProps } from 'ant-design-vue';

interface Emits {
  (event: 'changeMenu', value: string): void;
  (event: 'search', value: string): void;
}
const emits = defineEmits<Emits>();

const i18n = {
  logo: 'yixiv',
  searchIllustration: '搜索插画'
}
const current = ref<string[]>(['home']);
const items = ref<MenuProps['items']>([
  {
    key: 'home',
    label: '首页',
    title: 'home',
  },
  {
    key: 'rank',
    label: '排行榜',
    title: 'rank',
}])
const onclickMenu = (e: any) => {
  const { key, item } = e;
  current.value = [key];
  emits('changeMenu', item.title);
}

const searchValue = ref<string>('');
const onSearch = () => {
  current.value = [];
  emits('search', searchValue.value);
};

</script>
<style lang="less" scoped>
.nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 64px;

  .left-header {
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      min-width: 80px;
      text-align: center;
      color: #00ffff;
      font: 28px bold;
    }
  }

  .right-header {
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;


    .search {
      height: 40px;
      background: #0000000a;

      /deep/ .el-input__wrapper{
        background-color: #0000000a;
      }

      /deep/ .el-input__inner{
        &::placeholder {
          color: rgba(0,0,0,.64);
        }
      }
    }

    .tag {
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: 0;
      padding: 0 15px;
      margin-left: 10px;
    }
  }

  .back {
      font: 20px bold sans-serif;
      border-bottom: 1px solid #000;
    }

}
</style>
