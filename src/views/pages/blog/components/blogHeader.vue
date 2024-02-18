
<template>
  <nav class="header">
    <div class="logo">
      BLOG
    </div>
    <div class="left">
      <ul class="left-navigation-wrapper">
        <li
          class="btn navigation"
          :class="['btn', 'navigation', { active: index === active}]"
          v-for="(item, index) in navigationContent"
          :key="index"
          @click="onChangeRoute(item.router, index)"
        >
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
            <el-dropdown-item
            v-for="(item ,index) in adminMenu"
            :key="index"
             :command="item.key"
             >
            {{ item.title }}
           </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="btn back" @click="onBack">BACK HOME</div>
    </div>
  </nav>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface INavigationContent {
  router: string,
  label: string,
};

const navigationContent = ref<INavigationContent[]>([
  {
    router: '',
    label: '首页',
  },
  {
    router: 'like',
    label: '我的收藏',
  },
  {
    router: 'myArticle',
    label: '我的文章',
  },
  // {
  //   router: 'chatroom',
  //   label: '聊天室',
  // }
]);

const active = ref(0);
const onChangeRoute = (value: string, index: number) => {
  active.value = index;
  router.push(`/blog/${value}`);
}

const adminMenu = [
  {
    key: 'myArticle',
    title: '我的文章',
  },
  {
    key: 'message',
    title: '我的消息',
  },
]
const handleCommand = (command: string | number | object) => {
  console.log(`click on item ${command}`)
  switch (command) {
    case "myArticle":
      router.push('/blog/myArticle');
      break;
  }
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
      }

      .active {
          color: #0000ff;
        }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .admin {
      color: #0000ff;

      .title {
        font-size: 22px;
      }
    }

    .back {
      font-size: 18px;
      border: 1px solid #000;
    }
  }
}
</style>
