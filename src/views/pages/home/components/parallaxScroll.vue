<template>
  <section class="scroll-wrapper">
    <div class="image img1">
      <div class="word"> Bye bye, all of evangelion. </div>
    </div>

    <div class="bg">
      The best hard are always the bravest.
    </div>

    <div class="image img2">
      <div class="word"> All children, except one, grow up.</div>
    </div>

    <div class="bg">
      It's better to burn out than to fade away.
    </div>

    <div class="image img3">
      <div class="word">Fading is true while flowering is past.</div>
    </div>

    <div class="bg">
      There was no possibility of taking a walk.
    </div>

    <div class="image img4">
      <div class="word">All this happened, more or less.</div>
    </div>
  </section>
</template>


<style lang="less" scoped >

.scroll-wrapper {
  width: 100%;
  height: 100%;
}

.image {
  background-position: 0 0;
  background-attachment: fixed;
  background-size: cover;
  height: 680px;
  width: 100%;
}

.img1 {
  background-image: url('../../../images/home/eva1.png');
}

.img2 {
  background-image: url('../../../images/home/eva2.png');
}

.img3 {
  background-image: url('../../../images/home/eva3.png');
}

.img4 {
  background-image: url('../../../images/home/eva4.png');
}

.word {
  position: relative;
  top: 480px;
  font-size: 55px;
  color: #ffffff;
  text-align: center;
  font-weight: bolder;
}

.bg {
  text-align: center;
  font-size: 46px;
  font-weight: bolder;
  height: 220px;
  line-height: 220px;
  background-color: rgb(131, 134, 204);
  color: #ffffff;
}
</style>
