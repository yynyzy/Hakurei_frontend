<template>
  <section
    :style="`background-image: url('${bgUrl}')`">
    <login-header v-model="isShowForm" />
    <login-form v-model="form" :loading="isLoading" :show="isShowForm" @show="onShow" @login="onLogin" @sign="onSign" />
  </section>
  <Sakura />
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';
import LoginHeader from "./components/header.vue";
import LoginForm from "./components/form.vue";
import Sakura from "./components/Sakura/index.vue";
import { LoginRequest } from '../../types/User';
import { useRoute, useRouter } from 'vue-router';
import { tokenStore, themeStore } from "@/stores";
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
const onShow = (): void => {
  isShowForm.value = false;
};

const onLogin = async (): Promise<void> => {
  if(!form.value.username || !form.value.password) return;
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


// 主题切换
const ThemeBg = {
  THEME_LIGHT: new URL('../../images/login/loginBg2.jpg', import.meta.url).href,
  THEME_DARK: new URL('../../images/login/loginBg.jpg', import.meta.url).href,
};
const { THEME_TYPES, themeType } = themeStore();

const bgUrl = computed(() => {
  return themeType.value === THEME_TYPES.THEME_LIGHT
    ?
    ThemeBg.THEME_LIGHT
    :
    ThemeBg.THEME_DARK;
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
