<template>
  <div class="header-bg" ref="bgRef">
    <div class="img-wrapper" v-for="(item, index) in bg" :key="index">
      <img ref="ImgRef" :src="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const bgRef = ref<HTMLElement | null>(null);
const ImgRef = ref<HTMLElement[] | null>(null);
let eyeTimer: NodeJS.Timeout | null = null;
const GIRL_EYE: Array<string> = [
  new URL('@/views/images/animationVideo/bilibili-autumn-open.png', import.meta.url).href,
  new URL('@/views/images/animationVideo/bilibili-autumn-half.png', import.meta.url).href,
  new URL('@/views/images/animationVideo/bilibili-autumn-close.png', import.meta.url).href,
];

const bg = ref<Array<string>>([
  new URL('@/views/images/animationVideo/bilibili-autumn-1.png', import.meta.url).href,
  GIRL_EYE[0],
  new URL('@/views/images/animationVideo/bilibili-autumn-3.png', import.meta.url).href,
  new URL('@/views/images/animationVideo/bilibili-autumn-4.png', import.meta.url).href,
  new URL('@/views/images/animationVideo/bilibili-autumn-5.png', import.meta.url).href,
  new URL('@/views/images/animationVideo/bilibili-autumn-6.png', import.meta.url).href,
]);

onMounted(() => {
  const bgContainer = bgRef.value!;

  // 鼠标移入清除动画效果防止问题
  bgContainer.addEventListener('mouseenter', handleMouseEnter);

  bgContainer.addEventListener('mousemove', handleMouseMove);

  // 鼠标移出恢复初始的动画效果
  bgContainer.addEventListener('mouseleave', handleMouseLeave);

  // 眨眼睛效果
  eyeTimer = setInterval(() => {
    setTimeout(() => {
      bg.value[1] = GIRL_EYE[1];
    });

    setTimeout(() => {
      bg.value[1] = GIRL_EYE[2];
    }, 100);

    setTimeout(() => {
      bg.value[1] = GIRL_EYE[1];
    }, 200);

    setTimeout(() => {
      bg.value[1] = GIRL_EYE[0];
    }, 300);
  }, 5000)

});

onBeforeUnmount(() => {
  const bgContainer = bgRef.value!;
  bgContainer.removeEventListener('mouseenter', handleMouseEnter);
  bgContainer.removeEventListener('mousemove', handleMouseMove);
  bgContainer.removeEventListener('mouseleave', handleMouseLeave);

  if(eyeTimer) {
    clearInterval(eyeTimer as NodeJS.Timeout);
  }
});

function handleMouseEnter() {
  const images = ImgRef.value!;
  images.forEach((item) => {
    item.style.transition = 'none';
  });
}

function handleMouseMove(e: MouseEvent) {
  const images = ImgRef.value!;
  const percentage = e.clientX / window.outerWidth;
  const blur = 20;

  for (const [index, image] of images.entries()) {
    const offset = 10 * percentage * 1.3;
    const blurValue = (Math.pow((index / images.length - percentage), 2) * blur);

    image.style.setProperty('--offset', `${offset}px`);
    image.style.setProperty('--blur', `${blurValue}px`);
  }
}

function handleMouseLeave() {
  const images = ImgRef.value!;
  images.forEach((img) => {
    img.style.setProperty('--offset', 'px');
    img.style.setProperty('--blur', '2px');
    img.style.transition = 'all 0.5s';
  });
}
</script>

<style lang="less" scoped>
.header-bg {
  width: 100%;
  min-height: 155px;
  height: 9.375vw;
  max-height: 240px;
  position: relative;

  overflow: hidden;

  .img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    --offset: 0px;
    --blur: 2px;

    img {
      display: block;
      width: 110%;
      height: 100%;
      object-fit: cover;

      transform: translatex(var(--offset));
      filter: blur(var(--blur));
    }
  }
}
</style>
