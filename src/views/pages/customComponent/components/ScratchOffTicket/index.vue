<template>
    <canvas id="canvas" ref="canvasRef" width="300" height="150"></canvas>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';

const canvasRef = ref(null);
const img = new Image();
img.src = "https://statics.unileverfoodsolutions.com.cn/577c98c4905e88311f8b474a/ufsonpack/y23q2/scan-code-entrance/scan-code-entrance-layer.png";

let flag = false;
let show = false; // 判断清除全部涂层的布尔值
let clearPoints = []; // 记录清除坐标的数组
const size = 8;
const r = 2 * size;
const scale = 0.75;
const totalArea = 300 * 150;

onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext('2d');

  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  canvas.onmousedown = (e) => {
    e.preventDefault();
    flag = true;
    eraser(e, true);
  }

  canvas.onmousemove = (e) => {
    if (flag) {
      eraser(e);
    }
  }

  document.onmouseup = (e) => {
    e.preventDefault();
    flag = false;
    if (show) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "red";
      ctx.fillRect(0,0, canvas.width, canvas.height);
    }
  }

  const eraser = (e, bool) => {
    const len = clearPoints.length;
    let count = 0;
    const x = e.pageX - canvas.offsetLeft;
    const y = e.pageY - canvas.offsetTop;
    const x1 = x - size;
    const y1 = y - size;

    if (bool) {
      clearPoints.push({
        x1: x1,
        y1: y1,
        x2: x1 + r,
        y2: y1 + r
      });
    }

    for (const val of clearPoints) {
      if (val.x1 > x || val.y1 > y || val.x2 < x || val.y2 < y) {
        count++;
      } else {
        break;
      }
    }

    if (len === count) {
      clearPoints.push({
        x1: x1,
        y1: y1,
        x2: x1 + r,
        y2: y1 + r
      });
    }

    if (clearPoints.length && r * r * clearPoints.length > scale * totalArea) {
      show = true;
    }

    function clearArc(x, y, radius) {
      console.log('clearArc');

      const calcWidth = radius - stepClear;
      const calcHeight = Math.sqrt(radius * radius - calcWidth * calcWidth);

      const posX = x - calcWidth;
      const posY = y - calcHeight;
      const widthX = 2 * calcWidth;
      const heightY = 2 * calcHeight;

      if (stepClear <= radius) {
        ctx.clearRect(posX, posY, widthX, heightY);
        stepClear += 1;
        clearArc(x, y, radius);
      }
    }

    let stepClear = 1;
    clearArc(x1, y1, 12);
  }
});
</script>

<style lang="less" scoped>
</style>
