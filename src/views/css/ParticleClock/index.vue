<template>
  <canvas ref="canvasRef" />
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Particle } from './ParticleClass';
const canvasRef = ref<HTMLCanvasElement | null>();
let ctx: CanvasRenderingContext2D;
let text: string = '';
const particles: Array<Particle> = [];

onMounted(() => {
  const canvas = canvasRef.value!;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d', {
    willReadFrequently: true,
  })!;

  for (let i = 0; i < 300; i++) {
    const p = new Particle(canvas);
    particles.push(p);
  }
  draw();
});

onBeforeUnmount(() => {
  clear();
});

const draw = () => {
  if(particles.length === 0 ) return;
  clear();
  update();
  particles.forEach(p => p.draw());
  requestAnimationFrame(draw);
};

const update = () => {
  const newText = getTimeString();
  if (newText === text) {
    return;
  }
  text = newText;
  const canvas = canvasRef.value!;
  const { width, height } = canvas!;
  ctx!.fillStyle = "#000";
  ctx!.textBaseline = "middle";
  ctx!.font = "140px 'DS-Digital', 'sans-serif'";
  ctx!.fillText(text, (width - ctx!.measureText(text).width) / 2, height / 2 );
  const points = getPoints();
  clear(); // 清除时间文字
  for (let i = 0; i < points.length; i++) {
    let p = particles[i];
    if(!p) {
      p = new Particle(canvas!);
      particles.push(p)
    }
    const [x, y] = points[i];
    p.moveTo(x, y);
  }
  if(particles.length < points.length ) {
      particles.splice(points.length);
  }
};
const getPoints = () => {
  const canvas = canvasRef.value!;
  const gap = 6
  const points = [];
  const { width, height, data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < width; i+=gap) {
    for(let j = 0; j < height; j+=gap) {
      const idx = (i + j * width) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];
      if (r === 0 && g === 0 && b === 0 && a === 255) {
        points.push([i, j])
      }
    }
  }
  return points;
};
const getTimeString = () => {
  return new Date().toTimeString().substring(0, 8);
};
const clear = () => {
  ctx.clearRect(0, 0, canvasRef.value!.width, canvasRef.value!.height);
};
</script>


<style lang="less" scoped>
canvas {
  background: radial-gradient(#fff, #8c738c);
}
</style>
