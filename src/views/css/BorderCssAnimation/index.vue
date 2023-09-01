<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <div v-drag class="box">
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrapper {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.box {
  position: relative;
  width: 400px;
  height: 400px;
  background: repeating-conic-gradient(from var(--a),#ff2770 0%, #ff2770 5%, transparent 5%,transparent 40%, #ff2770 50%);
  animation: animate 4s linear infinite;
}

.box::before
{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-conic-gradient(from var(--a),#45f3ff 0%, #45f3ff 5%, transparent 5%,transparent 40%, #45f3ff 50%);
  animation: animate 4s linear infinite;
  animation-delay: -1s;
  border-radius: 20px;
}

.box::after{
  content: '';
  position: absolute;
  inset: 8px;
  background: #2d2d39;
  border-radius: 15px;
  border: 8px solid #25252b;
}

@property --a {
  syntax:'<angle>';
  inherits: false;
  initial-value: 0deg;
}

@keyframes animate{
  0%
  {
    --a: 0deg;
  }
  100%
  {
    --a: 360deg
  }
}
</style>
