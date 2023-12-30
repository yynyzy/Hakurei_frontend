
<template>
  <nav class="header">
    <div class="logo">
      BLOG
    </div>
    <div class="left">
      <ul class="left-navigation-wrapper">
        <li class="navigation" v-for="(item, index) in navigationContent" :key="index">
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="right" @click="onBack">BACK</div>
  </nav>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface INavigationContent {
  key: string,
  label: string,
};

const navigationContent = ref<INavigationContent[]>([
  {
    key: 'home',
    label: '首页',
  },
  {
    key: 'chatroom',
    label: '聊天室',
  }
]);

const onBack = () => {
  router.push('/home');
}
</script>
<style lang="less" scoped>
.header {
  width: 100vw;
  height: 60px;
  background-color: #fff;
  box-shadow:1px 1px 5px#0003;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  .logo {
    color: blue;
    margin-right: 60px;
  }

  .left {
    min-width: 600px;
    background-color: red;
    margin-right: 60px;

    .left-navigation-wrapper {
      display: flex;
      align-items: center;

      .navigation {
        margin: 0 10px;
        background-color: green;
      }
    }
  }

  .right {

  }
}
</style>
