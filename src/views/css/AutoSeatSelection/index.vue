<template>
  <div class="wrapper">
    <div v-drag class="box">
      <canvas id="canvas" @click="handleClick" ref="canvasRef" width="500" height="500" />
    </div>
    <div class="show-wrapper">
      <div class="button">
        <button @click="onSettle">结算</button>
        <button @click="onReset">重置</button>
      </div>
      <div v-for="(item, index) in checkedStatus" :key="index">
        你已选择第{{ item.row }}排第{{ item.col }}列的座位
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const canvasRef = ref<HTMLCanvasElement | null>();

const rows: number = 10;
const cols: number = 10;
const seatSize: number = 40;
const seatGap: number = 10;
const defaultSeatStatus = new Array(rows).fill(null).map(() => new Array(cols).fill(false))
const seatsStatus = ref(defaultSeatStatus.map((arr) => [...arr])); // 不能直接 ref 数组，否则会改变原数组，导致 onReset 失败

interface checkedStatusOptions {
  row: number,
  col: number,
}
const checkedStatus = ref<checkedStatusOptions[]>([]);
const onSettle = () => {
  checkedStatus.value = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (seatsStatus.value[row][col]) {
        checkedStatus.value.push({
          row: row + 1,
          col: col + 1,
        });
      }
    }
  }
};

const onReset = () => {
  seatsStatus.value = defaultSeatStatus;
  checkedStatus.value = [];
  draw();
};

const draw: () => void = () => {
  const canvas = canvasRef.value;
  const ctx = canvas!.getContext('2d');
  ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x: number = col * (seatSize + seatGap);
      const y: number = row * (seatSize + seatGap);
      ctx!.fillStyle = seatsStatus.value[row][col] ? '#f00' : '#ccc';
      ctx!.fillRect(x, y, seatSize, seatSize);
    }
  }
};

const handleClick: (event: MouseEvent) => void = (event) => {
  const canvas = canvasRef.value;
  const rect = canvas!.getBoundingClientRect();
  const scaleX = canvas!.width / rect.width;
  const scaleY = canvas!.height / rect.height;

  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;

  const col = Math.floor(x / (seatGap + seatSize));
  const row = Math.floor(y / (seatGap + seatSize));

  seatsStatus.value[row][col] = !seatsStatus.value[row][col];
  draw();
};

onMounted(() => {
  draw();
});
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .box {
    position: absolute;
    box-shadow: #9ef87126 0px 48px 100px 0px;
    background: rgba(255, 255, 255, 0.3);
  }
  .show-wrapper {
    position: absolute;
    bottom: 0;
    width: 250px;
    height: 200px;
    border: 1px solid;
    text-align: center;
    overflow-y: scroll;
  }

  .button {
    position: absolute;
    bottom: 0;
    // margin: 20px 0;
    display: flex;
    justify-content: space-between;
    width: 250px;
  }

  ::-webkit-scrollbar{
    display:none
}
}
</style>
