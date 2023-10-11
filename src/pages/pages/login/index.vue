<template>
  <section
    :style="`background-image: url('${bgUrl}')`">
    <login-header @onClickNavigation="onClickNavigation" v-model="isShowForm" />
    <login-form v-model="form" :loading="isLoading" :show="isShowForm" @show="onShow" @login="onLogin" @sign="onSign" />
  </section>
  <code-rain v-if="isRainShow" />
  <Sakura />
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';
import LoginHeader from "./components/header.vue";
import LoginForm from "./components/form.vue";
import Sakura from "./components/Sakura/index.vue";
import codeRain from "./components/codeRain.vue";
import { LoginRequest } from '../../interface/User';
import { useRoute, useRouter } from 'vue-router';
import { tokenStore, themeStore } from "@@/stores";
import { User } from '../../engine';

const isLoading = ref(false);
const isShowForm = ref(false);
const router = useRouter();
const route = useRoute();
const tokenStore_ = tokenStore();

const form = ref<LoginRequest>({
  username: '',
  password: '',
});

// 登陆功能
const onShow = () => {
  isShowForm.value = false;
};

const onLogin = async () => {
  isLoading.value = true;
  try {
    const res = await User.login(form.value);
    if (res.code === 200) {
      tokenStore_.setAccessToken(res.data);
      router.push((route.query.redirect as string) || "/home");
    } else {
      console.log("登陆失败")
    }
    isLoading.value = false;
  } catch (error) {
    console.log("登陆失败")
    isLoading.value = false;
    throw error;
  }
};

const onSign = () => {
  console.log("sign")
};

// header 控制
const isRainShow = ref(false);
const onClickNavigation = (value: string) => {
  if (value === 'rain') {
    isRainShow.value = !isRainShow.value;
  }
};

// 主题切换
const ThemeBg = {
  THEME_LIGHT: new URL('../../images/login/loginBg2.jpg', import.meta.url).href,
  THEME_DARK: new URL('../../images/login/loginBg.jpg', import.meta.url).href,
};
const { themeType } = themeStore();

const bgUrl = computed(() => {
  if(themeType.value === 'THEME_DARK') {
    return ThemeBg.THEME_DARK;
  };
  return ThemeBg.THEME_LIGHT;
});
// 背景主题
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
../interface/User
