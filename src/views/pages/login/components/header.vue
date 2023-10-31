<template>
  <header>
    <div class="logo">YZYN</div>
    <div class="login-btn-group">
      <a class="navigation" @click="onClickNavigationBar('rain')">Code Rain</a>
      <a class="navigation" href="#">Introduce</a>
      <y-theme-controller class="theme-btn"/>
      <input type="button" class="login" @click="onClickLogin" value="Login"/>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { themeStore } from "@/stores";
const { theme } = themeStore();

interface Props {
  modelValue: Boolean
}
interface Emits {
  (event: 'update:modelValue', value: Boolean): void;
  (event: 'onClickNavigation', value: string): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const onClickLogin = () => {
  emits('update:modelValue', !props.modelValue)
};
const onClickNavigationBar = (value: string) => {
  emits('onClickNavigation', value);
}
</script>

<style lang="less" scoped>
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    color: v-bind('theme.bgColor');

    .logo {
      font-size: 2em;
      user-select: none;
    }
    .login-btn-group {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .navigation {
      position: relative;
      font-size: 1.1em;
      color: v-bind('theme.fontColor');
      font-weight: 500;
      margin: 0 20px;

      &::after {
        content: "";
        border: 1px solid v-bind('theme.borderColor');
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -6px;
        transform: scaleX(0);
        transition: transform .5s;
        transform-origin: right;
      }
      &:hover {
        &::after {
          transform-origin: left;
          transform: scaleX(1);
       }
      }

    }

    .login {
      width: 130px;
      height: 50px;
      margin-left: 20px;
      background: transparent;
      font-size: 1.1em;
      color: v-bind('theme.fontColor');
      border: 2px solid v-bind('theme.borderColor');
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: .5s;

      &:hover {
        background-color: v-bind('theme.bgColor');
        color: v-bind('theme.opposite_fontColor');
      }
    }

  }
</style>
