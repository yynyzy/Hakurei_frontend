<template>
<section>
  <login-header v-model="isShowForm"/>
  <login-form
    v-model="form"
    :loading="isLoading"
    :show="isShowForm"
    @show="onShow"
    @login="onLogin"
    @sign="onSign"
  />
  </section>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import LoginHeader from "./components/header.vue";
import LoginForm from "./components/form.vue";
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
const onShow = () => {
  isShowForm.value = false;
}
const onLogin = async() => {
  isLoading.value= true;
  try {
    const res = await User.login(form.value);
    if (res.code === 200) {
      store.setAccessToken(res.data);
      router.push((route.query.redirect as string) || "/home");
    } else {
      console.log("登陆失败")
    }
    isLoading.value= false;
  } catch (error) {
    console.log("登陆失败")
    isLoading.value= false;
    throw error;
  }
};

const onSign = () => {
  console.log("sign")
};


</script>
<style lang="less" scoped>
section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../images/loginBg.jpg') no-repeat;
  background-size: cover;
  background-position: centers;
}
</style>
