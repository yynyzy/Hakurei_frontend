<template>
  <div class="container">
    <div class="contrast">
      <div class="number">92.8%</div>
      <div class="circle"></div>
      <ul class="bubble-pool">
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
        <li class="bubble"></li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
@bubble-width: 15px;
@bubble-left: 40%;
@bubble-minute: 3s;

.container {
  position: relative;

  .contrast {
    filter: contrast(10) hue-rotate(0);
    width: 300px;
    height: 400px;
    background-color: #000000;
    overflow: hidden;
    animation: hueRotate 10s infinite linear;

    .circle {
      position: relative;
      width: 300px;
      height: 300px;
      box-sizing: border-box;
      filter: blur(8px);

      &::before {
        content: "";
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 176px;
        height: 176px;
        background-color: #000;
        border-radius: 50%;
        z-index: 10;
      }

      &::after {
        content: "";
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(0);
        width: 200px;
        height: 200px;
        background-color: #00ff6f;
        border-radius: 42% 38% 62% 49%/45%;
        animation: rotate 10s infinite linear;
      }
    }
    .number {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -100%);
      width: 200px;
      height: 200px;
      font-size: 32px;
      font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
      line-height: 200px;
      text-align: center;
      color: #fff;
      z-index: 1;
    }
    .bubble-pool {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100px;
      height: 40px;
      transform: translate(-50%, -50%);
      border-radius: 100px 100px 0 0;
      background-color: #00ff6f;
      filter: blur(5px);
    }
  }
}

li {
  position: absolute;
  background-color: #00ff6f;
  border-radius: 50%;
  list-style: none;
}

.loop(@i) when(@i <= 15) {
  li:nth-child(@{i}) {
    width: (@bubble-width + @i);
    height: (@bubble-width + @i);
    left: (@bubble-left + @i * 1.2);
    animation: bubbleMoveUp (@bubble-minute + @i/3) ease-in-out infinite
  }
  .loop(@i + 1);
}
.loop(1);

@animate-duration: 2000ms;



@keyframes hueRotate {
  100% {
    filter: contrast(15) hue-rotate(360deg);
  }
}

@keyframes rotate {
  50% {
    border-radius: 45%/42% 38%/35% 62%/59% 50%/47%;
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes bubbleMoveUp {
  0% {
    bottom: 0;
  }
  100% {
    bottom: calc(100% + 140px);
    // bottom: 20px;
  }
}
</style>
