<template>
  <main class="container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
  </main>
</template>
<style lang="less" scoped>

@ball-size: 10px;
@container-size: 150px;
@p-deg: 15deg;
@n: 36;
@animate-duration: 2000ms;

.container {
    width: @container-size;
    height: @container-size;
    position: relative;
    border-radius: 50%;
    outline: 1px solid red;
}

.dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: @ball-size;
    height: @ball-size;
    margin-left: -(@ball-size / 2);
    margin-top: -(@ball-size / 2);
    border-radius: 50%;
    perspective: 70px;
    transform-style: preserve-3d;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    &::before {
      top: 100%;
      background-color: #fff;
      animation: rotateBackInfinite @animate-duration infinite;
    }

    &::after {
      top: -100%;
      background-color: #000;
      animation: rotateInfinite @animate-duration infinite;
    }
}

.loop(@i) when(@i <= @n) {
  .dot:nth-child(@{i}) {
    transform: rotate(@i * @p-deg) translateY(-75px);
    &::before,
    &::after {
      animation-delay: -(@animate-duration / @n * @i * 3);
    }
  }
  .loop(@i + 1);
}
.loop(1);

  @keyframes rotateInfinite {
    0% {
      animation-timing-function: ease-in;
    }

    25% {
      transform: translate3d(0, 100%, @ball-size);
      animation-timing-function: ease-out;
    }
    50% {
      transform: translate3d(0, 200%, 0);
      animation-timing-function: ease-in;
    }
    75% {
      transform: translate3d(0, 100%, -@ball-size);
      animation-timing-function: ease-out;
    }
  }
  @keyframes rotateBackInfinite {
    0% {
      animation-timing-function: ease-in;
    }

    25% {
      transform: translate3d(0, -100%, -@ball-size);
      animation-timing-function: ease-out;
    }
    50% {
      transform: translate3d(0, -200%, 0);
      animation-timing-function: ease-in;
    }
    75% {
      transform: translate3d(0, -100%, @ball-size);
      animation-timing-function: ease-out;
    }
  }
</style>
