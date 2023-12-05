<template>
  <div class="banner-wrapper">
    <div class="banner">
      <div class="banner-img">
        <img class="img" src="https://roozen.top/upload/lyhpc2.webp" >
      </div>
      <div class="banner-desc">
        <h2 v-text="i18n.title"></h2>
        <article v-text="i18n.desc"></article>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const i18n = {
  title: '欢迎来到 Hakurei 的首页',
  desc: '为了二次元，为了学习，为了消磨时间为了二次元，为了学习，为了消磨时间为了二次元，为了学习，为了消磨时间为了二次元，为了学习，为了消磨时间',
}
</script>
<style lang="less" scoped>
@import '../style.less';

.banner-wrapper {
  position: relative;
  height: 100%;
  border-radius: 1rem;
  background-color: #fff;
  transition: transform .2s ease-in-out;

  .banner {
    position: relative;
    top: 0;
    z-index: 10;
    display: grid;
    grid-template-rows: repeat(3, minmax(0, 1fr));
    overflow: hidden;
    border-radius: 1rem;
    .banner-img {
      position: relative;
      grid-row: span 1/span 1;

      .img {
        position: absolute;
        left: 0;
        z-index: 20;
        display: block;
        height: 120%;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }

    .banner-desc {
      background-color: red;
      position: relative;
      z-index: 40;
      grid-row: span 2/span 2;
      display: flex;
      flex-direction: column;
      padding-left: .3rem;
      padding-right: .3rem;
      padding-bottom: .3rem;

      h2 {
        background-color: aqua;
        margin-bottom: .3rem;
        font-size: .5rem;
        font-weight: 800;
      }

      article {
        margin-bottom: .1rem;
        padding-bottom: .2rem;
        font-size: .3rem;
        background-color: aquamarine;
      }
    }
  }

  &:hover {
    transform: scale(1.02)
  }
}

@media (min-width: 1024px) {
  .banner .banner-img {
    grid-row: auto;
  }
}

@media (min-width: 1024px) {
  .banner {
    height: 28rem;
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: none;
}
}
</style>
