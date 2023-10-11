<template>
  <div :class="['wrapper', { wrapperDark: !themeType }]">
    <div
      :class="['icon', { dark: !themeType }]"
      @click="onClickIcon"
    >
    <i v-if="themeType" class="far fa-sun" />
    <i v-else class="far fa-moon" />
  </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { themeStore } from "@/stores";

const router = useRouter();
const { setLightTheme, setDarkTheme} = themeStore();

// true 为白天模式， false 为夜晚模式
const themeType = ref<Boolean>(true);

const onClickIcon = () => {
  console.log('themeType.value', themeType.value);
  if(themeType.value) {
    setDarkTheme();
  } else {
    setLightTheme();
  };
  themeType.value = !themeType.value;
};

</script>
<style lang="less" scoped>
.wrapper {
  width: 80px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.2s ease;
  background: #fdd6df;

  &Dark {
    background: #464646;
  }
  .icon {
    position: absolute;
    width: 30px;
    height: 30px;
    background: #ffc0cb;
    border-radius: 15px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    i {
      font-size: 10px;
    }
  }

  .dark {
    left: 50px;
    background: #323232;
  }
 }
</style>
