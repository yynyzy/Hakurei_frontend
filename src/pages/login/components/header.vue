<template>
  <header>
    <div class="logo">YZYN</div>
    <div>
      <a class="navigation rain" @click="onClickNavigationBar('rain')">Code Rain</a>
      <a class="navigation" href="#">Introduce</a>
      <input type="button" class="btn" @click="onClickLogin" value="Login"/>
    </div>
  </header>
</template>

<script lang="ts" setup>
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

    .logo {
      font-size: 2em;
      color: #fff;
      user-select: none;
    }

    .navigation {
      position: relative;
      font-size: 1.1em;
      color: #fff;
      font-weight: 500;
      margin-right: 40px;

      &::after {
        content: "";
        border: 1px solid #fff;
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

    .btn {
      width: 130px;
      height: 50px;
      background: transparent;
      font-size: 1.1em;
      color: #fff;
      border: 2px solid #fff;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: .5s;

      &:hover {
        background-color: #fff;
        color: #000;
      }
    }

  }
</style>
