
<template>
  <nav class="header">
    <div class="logo">
      BLOG
    </div>
    <div class="left">
      <ul class="left-navigation-wrapper">
        <li class="btn navigation" v-for="(item, index) in navigationContent" :key="index">
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="right">
      <y-theme-controller />
      <el-dropdown @command="handleCommand" class="btn admin">
        <span class="title">
          ADMIN
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(item ,index) in adminMenu" :key="index" :command="item.key">
            {{ item.title }}
           </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="btn back" @click="onBack">BACK</div>
    </div>
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


const adminMenu = [
  {
    key: 'message',
    title: '我的消息',
  },
  {
    key: 'logout',
    title: '退出',
  }
]
const handleCommand = (command: string | number | object) => {
  console.log(`click on item ${command}`)
};

const onBack = () => {
  router.push('/home');
};
</script>
<style lang="less" scoped>
.header {
  width: 100vw;
  height: 60px;
  background-color: var(--g_banner_bg);
  box-shadow: 1px 1px 5px#0003;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--g_login_font_color);
  z-index: 10;

  .logo {
    color: #0000ff;
    font-size: 26px;
    font-weight: 600px;
    margin-right: 60px;
  }

  .btn {
    margin: 0 10px;
  }
  .left {
    min-width: 600px;
    margin-right: 60px;

    .left-navigation-wrapper {
      display: flex;
      align-items: center;

      .navigation {
        font-size: 18px;
        border-bottom: 2px solid #ffc0cb;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .admin {
      color: blue;

      .title {
        font-size: 22px;
        border: 1px solid red;
      }
    }
  }
}
</style>
