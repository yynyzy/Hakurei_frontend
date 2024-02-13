<template>
  <main>
    <div class="container">
      <div class="view">123
        <div class="list">
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
          <div class="list-item"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang='ts'>
import { ref, reactive,toRefs,onBeforeMount,onMounted} from 'vue';

function createAnimation(scrollStart: number, scrollEnd: number, startValue: number, endValue: number): Function {
  return function (x: number): number {
    if (x<scrollStart) {
      return startValue;
    }
    if (x>scrollEnd) {
      return endValue;
    }

    const progress = (x - scrollStart) / (scrollEnd - scrollStart);
    return startValue + (endValue - startValue) * progress;
  }
};

const animationMap = new Map();
const items = document.querySelectorAll('.list-item');
const view = document.querySelector('.view');
const list = document.querySelector('.list')

function getDomAnimation(dom) {
  const opacity = function(x){}
  const transform = function(x){}
};
// 设置更新动画映射
function updateMap() {
  for(const item of items) {
    animationMap.set(item, getDomAnimation(item));
  }
}
// 将 map 结构中的动画映射到元素上
function updateStyles() {
  const scrollY = window.scrollY;
  for (const [dom, animations] of animationMap) {
    for(const prop in animations) {
      const value = animations[prop](scrollY);
      dom.style[prop] = value;
    }
  }
}
updateStyles();
</script>
<style lang="less" scoped>
</style>
