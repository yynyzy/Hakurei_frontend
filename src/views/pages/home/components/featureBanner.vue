<template>
  <div class="banner-wrapper">
    <div class="banner">
      <div class="banner-img">
        <img class="img" src="https://roozen.top/upload/lyhpc2.webp">
        <span class="img-shadow"></span>
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
  border-radius: .3rem;
  border: 2px solid #3c3c3c;
  background-color: #fff;
  transition: transform .2s ease-in-out;

  &:hover {
    transform: scale(1.02)
  }
}

.banner {
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  overflow: hidden;
  border-radius: .3rem;

  .banner-img {
    position: relative;
    grid-row: span 1/span 1;

    .img {
      position: absolute;
      left: 0;
      display: block;
      height: 120%;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      -o-object-fit: cover;
      object-fit: cover;
    }

    .img-shadow {
      pointer-events: none;
      position: absolute;
      left: 0;
      z-index: 30;
      height: 120%;
      width: 100%;
      opacity: .4;
    }

    &::after {
      pointer-events: none;
      content: "";
      position: absolute;
      z-index: 35;
      left: 71%;
      top: 0;
      height: 100%;
      width: 50%;
      background: @gradient-cover;
    }
  }

  .banner-desc {
    position: relative;
    z-index: 40;
    grid-row: span 2/span 2;
    display: flex;
    flex-direction: column;
    padding-top: .3rem;
    padding-left: .3rem;
    padding-right: .3rem;
    padding-bottom: 1.5rem;

    h2 {
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

@media (max-width: 1023px) {
  .banner {
    .banner-img {
      &::after {
        top: 15%;
        left: 0;
        height: 120%;
        width: 100%;
        background: @article-cover;
      }
    }
  }
}

@media (min-width: 1024px) {
  .banner {
    height: 8rem;
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: none;

    .banner-img {

      .img {
        height: 8rem;
        width: 120%;
      }

      .img-shadow {
        height: 8rem;
        width: 120%;
      }
    }

    .banner-desc {
      grid-row: auto;
      padding: 1rem;
    }
  }
}
</style>
