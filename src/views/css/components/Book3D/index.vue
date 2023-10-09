<template>
      <div v-drag class="book">
        <div class="di end"></div>
        <div class="d page6 right"></div>
        <div class="d page5 left"></div>
        <div class="d page4 right"></div>
        <div class="d page3 left"></div>
        <div class="d page2 right"></div>
        <div class="d page1 left"></div>
        <div class="d first"></div>
      </div>
</template>
<style lang="less" scoped>
  .book {
    position: relative;
    transform-style: preserve-3d;
    width: 200px;
    height: 300px;
    cursor: pointer;
    backface-visibility: visible; // 当元素背面朝向观察者时是否可见
    transition: .2s;

    div {
      position: absolute;
      width: 200px;
      height: 100%;
      top: 0;
      left: 0;
      transform-origin: left center;
      transform-style: preserve-3d;
      transition: transform .5s ease-in-out, box-shadow .35s ease-in-out;
    }
  }
  .book:hover {
    transform: translateX(100px);
  }

  .book:hover div {
    box-shadow:0 1em 3em 0 rgba(0,0,0,.2);
  }

  .first,
  .end {
    background-image: url(./images/front.jpg);
    background-size: cover;
  }

  .left {
    border-bottom-right-radius: 0.5em;
    border-top-right-radius: .5em;
    background: #f5f5f5;
  }

  .right {
    border-bottom-right-radius: 0.5em;
    border-top-right-radius: .5em;
    background: #f5f5f5;
  }

  .page5 {
    background-image: url('./images/end.jpg');
    background-size: cover;
  }

  .book:hover .first {
    transform: rotateY(-160deg) scale(1.1);
  }

  .book:hover .page1 {
    transform: rotateY(-150deg) scale(1.1);
  }

  .book:hover .page2 {
    transform: rotateY(-30deg) scale(1.1);
  }

  .book:hover .page3 {
    transform: rotateY(-140deg) scale(1.1);
  }

  .book:hover .page4 {
    transform: rotateY(-40deg) scale(1.1);
  }

  .book:hover .page5 {
    transform: rotateY(-130deg) scale(1.1);
  }

  .book:hover .page6 {
    transform: rotateY(-50deg) scale(1.1);
  }

  .book:hover .end {
    transform: rotateY(-20deg) scale(1.1);
  }
</style>
