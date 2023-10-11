<template>
    <canvas id="canvas" ref="CanvasRef" />
</template>

<script setup lang='ts'>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Sakura from './Sakura';

const CanvasRef = ref<HTMLCanvasElement | null>();

onMounted(() => {
  const canvas = CanvasRef.value!;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d')!;
  //  花瓣数量
  const SAKURA_SUM = 60;
  const SAKURA_Array: Sakura[] = [];
  // 加载图片
  const SakuraImg = new Image();
  SakuraImg.src =  new URL('../../../../images/login/sakura.png', import.meta.url).href;

  const render = () => {
    // 清除矩形内的内容
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    SAKURA_Array.forEach((s) => s.animate(mouseX));
    // 浏览器重绘函数
    window.requestAnimationFrame(render);
  };

  SakuraImg.addEventListener('load', () => {
    for (let i = 0; i < SAKURA_SUM; i++) {
      SAKURA_Array.push(new Sakura(canvas, ctx, SakuraImg));
    }
    render();
  });
});

let mouseX = 0; // 鼠标移动速度
const targetHandler = (e: Event) => {
  // 客户端区域水平坐标
  if (e instanceof MouseEvent) {
    mouseX = e.clientX / window.innerWidth;
  } else if (e instanceof TouchEvent) {
    mouseX = e.touches[0].clientX / window.innerWidth;
  }
};

// 鼠标移动事件
window.addEventListener('mousemove', targetHandler);
// 触点事件
window.addEventListener('touchmove', targetHandler);

onBeforeUnmount(() => {
  const canvas = CanvasRef.value!;
  const ctx = canvas.getContext('2d')!;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
</script>

<style lang="less" scoped>
#canvas {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}
</style>
