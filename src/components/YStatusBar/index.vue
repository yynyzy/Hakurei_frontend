 <template>
  <aside :class="['status-bar', { 'hide-bar': isHideBar  }]">
    <el-menu
      class="menu"
      :default-active="defaultRouteIndex"
      :collapse="isCollapse"
    >
    <div class="change-btn" v-if="!isHideBar">
      <div v-if="isCollapse" class="btn" @click="onCollapse"> > </div>
      <div v-else class="btn" @click="onCollapse">&lt;</div>
    </div>
    <div class="head">
      <div class="img">
        <img :src="userInfo?.avatar ? userInfo?.avatar : '/src/assets/images/head.jpeg'" alt="*" />
        <!-- <y-avatar :info="userInfo" class="avatar"/> -->
      </div>
    </div>
    <el-menu-item class="router" index="1" @click="onToPage(0)">
      <el-icon ><HomeFilled /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item class="router" index="2" @click="onToPage(1)">
      <el-icon><PictureFilled /></el-icon>
      <template #title>yixiv</template>
    </el-menu-item>
    <el-menu-item class="router" index="3" @click="onToPage(2)">
      <el-icon><Operation /></el-icon>
      <template #title>component</template>
    </el-menu-item>
    <el-menu-item class="router" index="4" @click="onToPage(3)">
      <el-icon><Star /></el-icon>
      <template #title>css</template>
    </el-menu-item>
    <el-menu-item class="router" index="5" @click="onToPage(4)">
      <el-icon><VideoCamera /></el-icon>
      <template #title>webRtc</template>
    </el-menu-item>
    <el-menu-item class="router" index="6" @click="onToPage(5)">
      <el-icon><DataBoard /></el-icon>
      <template #title>blog</template>
    </el-menu-item>
    <el-menu-item class="router" index="7" @click="onToPage(6)">
      <el-icon><Setting /></el-icon>
      <template #title>setting</template>
    </el-menu-item>

    <el-menu-item class="theme" index="7">
      <y-theme-controller />
    </el-menu-item>
    </el-menu>
    <div class="hide" @click="hideBar">
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import {
  HomeFilled,
  PictureFilled,
  Operation,
  VideoCamera,
  DataBoard,
  Star,
  Setting,
} from '@element-plus/icons-vue'
import { UserInfo } from '@/views/types/User';
import { Member } from '@/utils';
import { StatusBarRoute } from '@/router/routes';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isCollapse = ref<boolean>(true);
const onCollapse = () => {
  isCollapse.value = !isCollapse.value;
}

const onToPage = (index: number): void => {
  const currentRoute = StatusBarRoute[index];
  switch (currentRoute.route) {
    // case '/blog':
    //   const  { href } = router.resolve({ path: currentRoute.route,query: {} });
    //   window.open(href, '_blank');
    //   break;
    default:
      router.push(currentRoute.route);
      break;
  }

};

const defaultRouteIndex = ref<string>('1');

watchEffect(() => {
  const { path } = route;
  const index = StatusBarRoute.findIndex(({ route }) => path.startsWith(route));
  defaultRouteIndex.value = index < 1 ? '1' : index.toString();
})

const isHideBar = ref<boolean>(false);
const hideBar = () => {
  isHideBar.value = !isHideBar.value;
}

// 获取用户信息
const userInfo = ref<UserInfo | null>(null);
const getUserInfo = async () => {
  const user = await Member.getUserInfo();
  userInfo.value = user;
};
getUserInfo();
</script>

<style lang="less" scoped>
.status-bar {
  z-index: 999;
  box-shadow: #64646f33 0px 7px 29px 0px;
  height: 100vh;
}

.hide-bar {
  transform: translateX(-100%);
}

.hide {
  position: absolute;
  top: 50%;
  right: -10px;
  width: 10px;
  height: 50%;
  transform: translateY(-50%);
  border-radius: 0 20px 20px 0;
  background-color: rgb(110, 108, 108);
  display: flex;
  align-items: center;
  justify-content: center;
}

.change-btn {
    z-index: 9;
    position: absolute;
    top: 10px 0px;
    right: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #c94cef;

  .btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
  }
}

.menu {
  box-sizing: border-box;
  position: relative;
  height: 100vh;
  width: 100px;
  padding: 20px 10px;
  border-radius: 0 20px 20px 0;
  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  overflow-x: scroll;

  .el-menu-item:hover{
    outline: 0 !important;
    color: var(--g-status-bar-color) !important;
    background-color: var(--g-status-bar-hover);

  }

  &:not(.el-menu--collapse) {
    width: 200px;
  }

  .router {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
}


.head {
    display: flex;
    align-items: center;
    justify-content: center;

    .img {
      border-radius: 5px;
      display: flex;
      align-items: center;

      img {
        width: 50px;
        height: 50px;

      }
    }

    .avatar {
      z-index: 1000;
    }
  }

.theme {
  padding: 0;
}
</style>
