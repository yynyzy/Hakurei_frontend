<template>
  <section
    :style="`background-image: url('${bgUrl}')`">
    <login-header v-model="isShowForm" />
    <login-form
    :model="form"
    :loading="isLoading"
    :show="isShowForm"
    @show="onShow"
    @login="onLogin"
    @sign="onSign"
    />
  </section>
  <Sakura />
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';
import LoginHeader from "./components/header.vue";
import LoginForm from "./components/form.vue";
import Sakura from "./components/Sakura/index.vue";
import { AuthRequest } from '../../types/User';
import { useRoute, useRouter } from 'vue-router';
import { useTheme } from '@/utils';
import { tokenStore } from "@/stores";
import { User } from '../../engine';
import { ElMessage } from "element-plus";

const isLoading = ref(false);
const isShowForm = ref(true);
const router = useRouter();
const route = useRoute();
const tokenStore_ = tokenStore();

const form = ref<AuthRequest>({
  username: '',
  password: '',
  // phone: '',
});

// 登陆功能
const onShow = () => {
  isShowForm.value = false;
  form.value.username = "";
  form.value.password = "";
};

const onLogin = async (): Promise<void> => {
  if(!form.value.username || !form.value.password) return;
  isLoading.value = true;
  try {
    const res = await User.login(form.value);
    if (res.status === 200) {
      tokenStore_.setAccessToken(res.data);
      router.push((route.query.redirect as string) || "/home");
    } else {
      ElMessage.error('登陆失败');
    }
  } catch (error) {
    console.error("登陆失败", error);
  } finally {
    isLoading.value = false;
  }
};

const onSign = async () => {
  console.log("onSign", form.value);
  if(!form.value.username || !form.value.password) return;
  isLoading.value = true;
  try {
    const res = await User.register(form.value);
    if (res.status === 200) {
      tokenStore_.setAccessToken(res.data);
      router.push((route.query.redirect as string) || "/home");
    } else {
      ElMessage.error('注册失败');
    }
  } catch (error) {
    console.error("注册失败", error);
  } finally {
    isLoading.value = false;
  }
};


// 主题切换
const ThemeBg = {
  THEME_LIGHT: new URL('../../images/login/loginBg2.jpg', import.meta.url).href,
  THEME_DARK: new URL('../../images/login/loginBg.jpg', import.meta.url).href,
};
const { theme } = useTheme();
const bgUrl = computed(() => theme.value === 'light' ? ThemeBg.THEME_LIGHT : ThemeBg.THEME_DARK);


</script>

<style lang="less" scoped>
section {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: centers;
  transition: background-image 1s;
}
</style>
