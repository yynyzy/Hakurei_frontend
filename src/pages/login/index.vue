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
import { ref } from 'vue';
import LoginHeader from "./components/header.vue";
import LoginForm from "./components/form.vue";
import Sakura from "./components/Sakura/index.vue";
import codeRain from "./components/codeRain.vue";
import { LoginRequest } from '../types/User';
import { useRoute, useRouter } from 'vue-router';
import { tokenStore } from "@/stores";
import { User } from '../engine';

const isLoading = ref(false);
const isShowForm = ref(false);
const router = useRouter();
const route = useRoute();
const store = tokenStore();
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
      store.setAccessToken(res.data);
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

  if (value === 'theme') {
    onThemeChange();
  }
};

console.log(')', new URL('../assets/loginBg.jpg', import.meta.url));

// 背景切换
const ThemeBg = [
new URL('../images/loginBg.jpg', import.meta.url).href,
new URL('../images/loginBg2.jpg', import.meta.url).href,
];
let Theme_Index = 0;
const bgUrl = ref(ThemeBg[Theme_Index]);
const onThemeChange = () => {
  Theme_Index = Theme_Index < ThemeBg.length - 1 ? Theme_Index + 1 : 0;
  bgUrl.value = ThemeBg[Theme_Index];
}
</script>

<style lang="less" scoped>
section {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: centers;
  transition: background-image 1s;
}
</style>
