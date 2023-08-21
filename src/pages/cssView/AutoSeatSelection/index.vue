
<template>
  <div class="wrapper">
    <canvas
      id="canvas"
      class="box"
      ref="canvasRef"
      width="500"
      height="300"
    ></canvas>
    <button @click="onSettle">结算</button>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
const canvasRef = ref<HTMLCanvasElement | null>();

const rows: number = 6;
const cols: number = 10;
const seatSize: number = 40;
const seatGap: number = 10;

const draw: () => void = ()=> {
  const canvas = canvasRef.value!;
  // const canvas: any = document.getElementById('canvas');
  // console.log('canvas1', canvas1)
  console.log('ctx1', canvas)
  const ctx = canvas.getContext('2d');
  ctx?.clearRect(0, 0, canvas.width || 0, canvas.height || 0)

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x: number = col * (seatSize + seatGap);
      const y: number = row * (seatSize + seatGap);
      ctx!.fillStyle = '#ccc';
      ctx?.fillRect(x, y, seatSize, seatSize);
  }
  }
}

const onSettle = () => {
  // console.log('event', event)
  // const canvas = canvasRef.value;
  // const rect = canvas?.getBoundingClientRect();
  // const scaleX = canvas.width / rect.width;
  // const scaleY = canvas.height / rect.height;

  // const x = (event.clientX - rect.left) * scaleX;
  // const y = (event.clientY - rect.right) * scaleX;

  // const col = Math.floor(x / (seatGap + seatSize))
  // const row = Math.floor(y / (seatGap + seatSize))

}
onMounted(
  () => {
    draw();
  }
)

</script>
<style lang="less" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    background: #ffc0cb;
    .box {
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }
  }
</style>
