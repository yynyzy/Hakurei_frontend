<template>
  <div class="card" ref="cardRef">创建多个窗口拖动方块，将在三个页面的移动</div>
</template>
<script setup lang='ts'>
import { ref, onMounted, onUnmounted } from 'vue';
function barHeight(): number {
  return window.outerHeight - window.innerHeight;
}
const clientToScreen = (x: string, y: string): [number, number] => {
  const screenX = x + window.screenX;
  const screenY = y + window.screenY + barHeight();
  return [screenX, screenY];
};
function screenToClient(x: number, y: number): [number, number] {

  const clientX = x - window.screenX;
  const clientY = y - window.screenY - barHeight();

  return [clientX, clientY];
};

const cardRef = ref<HTMLElement | null>(null);
const channel = new BroadcastChannel('card');
onMounted(() => {
  const card = cardRef.value!;
  card.onmousedown = (e) => {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;

    window.onmousemove = (e) => {
      const cx = e.pageX - x;
      const cy = e.pageY - y;
      card.style.left = cx + 'px';
      card.style.top = cy + 'px';
      const screenPoints = clientToScreen(cx, cy);
      channel.postMessage(screenPoints);
    }

  }
  window.onmouseup = () => {
    window.onmousemove = null;
    window.onmouseup = null;
  }


  channel.onmessage = (e) => {
    const clientPoints = screenToClient(...e.data);
    card.style.left = clientPoints[0] + 'px';
    card.style.top = clientPoints[1] + 'px';
  };
})

onUnmounted(() => {
  window.onmousemove = null;
  window.onmouseup = null;
})
</script>
<style lang="less" scoped>
.card {
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: #ff0000;
  line-height: 300px;
}
</style>
