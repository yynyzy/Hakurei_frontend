<template>
  <nav class="wrapper">
    <div ref="navRef" class="hb-nav">
      <div ref="animateWrapperRef" class="animate-layer">
        <header class="hb-title">{{ title }}</header>
        <ul class="hb-options">
          <li
            class="hb-option"
            v-for="(item, index) in options"
            :key="index"
            @click="onClickOption(item)"
          >
            <component :is="item.icon" />
            <span class="hb-option-name">{{  item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="hb-off" @click="onClickOff"></div>
  </nav>
</template>

<script lang="ts" setup>
import { VNode, h, ref } from 'vue';
import { useRouter } from 'vue-router';

type optionType = {
  key: number | string
  title: string
  icon?: VNode
  func?: Function
  meta?: any
};

let navStatus:boolean = false;
const title: string = "通用";

const navRef = ref<HTMLElement | null>(null);
const animateWrapperRef = ref<HTMLElement | null>(null);

const router = useRouter();
const options: Array<optionType> = [
  {
    key: 'weather',
    icon: h('i', { class: "fa fa-sign-out" }),
    title: '天气',
  },
  {
    key: 'theme',
    icon: h('i', { class: "fa fa-sign-out" }),
    title: '主题',
    func: () => router.push('/theme'),
  }
];

const onClickOff = () => {
  const nav = navRef.value!;
  const animateEl = animateWrapperRef.value!;
  if (navStatus) {
    nav.style.display = "none";
    animateEl.style.width = "0";
  } else {
    nav.style.display = "block";
    animateEl.style.width = "20vw";
  }
  navStatus = !navStatus;
};

const onClickOption = (option: optionType) => {
  console.log('onClickOption', option);
  if(option.func) {
    option.func();
  }
};

</script>

<style lang="less" scoped>
nav {
  display: block;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: 9999;
}

ul {
  list-style: none;
  display: block;
}

.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background: #00000080;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  .hb-nav {
    box-sizing: border-box;
    display: none;
    height: 100%;
    padding: 10px 20px;

    .animate-layer {
       width: 0;
       transition: width .3s;
      .hb-title {
        margin-bottom: 10px;
        color: #fff;
        display: block;
        font-size: 26px;
        font-style: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom: 1PX solid #fff;

      }

      .hb-options {


        .hb-option {
          box-sizing: border-box;
          width: 100%;
          border-radius: 8px;
          padding: 8px;
          margin-block: 8px;
          display: flex;
          justify-content: left;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: background-color .3s;

          &:hover {
            background: #E3E5E7;
            color: #000;
          }

          .hb-option-name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          i + .hb-option-name {
            margin-left: 10px;
          }
        }
      }
    }
  }

  .hb-off {
    width: 10px;
    height: 4em;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    background: #00000080;
  }
}

</style>
