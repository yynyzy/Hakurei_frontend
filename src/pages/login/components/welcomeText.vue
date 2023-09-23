<template>
  <div class="wrapper">
    <text class="text" v-html="text"></text>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted} from 'vue';
const welcomeText = "welcome to my website, this is for my favorite 东方 Project";
const len = welcomeText.length;
const text = ref<string>('');
let flag = 0;

const line = '<span ref="lineRef" class="line" ></span>'
const animationFunc = () => {
  if (flag < len) {
    text.value = welcomeText.slice(0, flag++) + line;
    setTimeout(()=> {
      animationFunc();
    }, 100);
  } else {
    text.value = welcomeText + line;
  }
};

onMounted(() => {
  animationFunc();
});

</script>
<style lang="less" scoped>
// vue 中 v-html 会认为是一个组件使用 scoped 导致 v-html 中的元素样式不生效
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 5%;

  .text {
    font-size: 36px;
    padding: 20px;
    color: #fff;

    :deep(.line) {
      animation: blink .5s infinite step-end alternate; border-right: 3px solid;
    }
  }

}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
