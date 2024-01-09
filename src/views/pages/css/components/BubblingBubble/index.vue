<template>
  <div class="container">
    <div class="contrast">
      <div class="circle"></div>
      <ul class="bubble">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
.container {
  position: relative;

  .contrast {
    filter: contrast(10) hue-rotate(0);
    width: 300px;
    height: 400px;
    background-color: #000;
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

    .bubble {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100px;
      height: 40px;
      transform: translate(-50%, -50%);
      border-radius: 100px 100px 0 0;
      background-color: #00ff6f;
      filter: blur(5px);

      li {
        position: absolute;
        border-radius: 50%;
        background-color: #00ff6f;
        list-style: none;
      }

      li:nth-child(1) {
        left: 28px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 27px;
        height: 27px;
      }

      li:nth-child(3) {
        left: 77px;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 23px;
        height: 23px;
      }
    }
  }

}

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
</style>
