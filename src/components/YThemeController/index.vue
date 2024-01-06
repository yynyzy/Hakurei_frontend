<template>
  <div :class="['wrapper', { wrapperDark: !isThemeLight  }]">
    <div
      :class="['icon', { dark: !isThemeLight }]"
      @click="onClickIcon"
    >
    <i v-if="!isThemeLight" class="far fa-moon" />
    <i v-else class="far fa-sun" />
  </div>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { useTheme } from '@/utils';

const { theme } =  useTheme();
const isThemeLight = computed(() => theme.value === 'light');
const onClickIcon = (): void => {
  theme.value = isThemeLight.value ? 'dark' : 'light';
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
  background: #ddd;

  &Dark {
    background: #464646;
  }
  .icon {
    position: absolute;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 15px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    i {
      font-size: 14px;
    }
    .fa-sun {
      color: #ffa500;
    }
    .fa-moon {
      color: #3ce4f0;
    }
  }

  .dark {
    left: 50px;
    background: #323232;
  }
 }
</style>
