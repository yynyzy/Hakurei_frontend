<template>
  <div class="wrapper">
    <li class="btn" @click="onClickOff">
      <a class="btn-icon">
        <transition mode="out-in">
          <i class="fa fa-cog" />
        </transition>
      </a>
    </li>
    <div class="list-animate-wrapper">
      <ul :class="[
        'list',
        { 'list-down': animationState === 1 },
        { 'list-up': animationState === 2 }
      ]">
        <li class="li" v-for="(item, index) in tabs" :key="index">
          <a class="link" @click="onClickSetting(item.type, index)">
            <component :is="item.icon"/>
          </a>
        </li>
      </ul>
   </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, h, VNode } from 'vue';
import { onChangeTheme } from '@/utils'
interface Tab {
  icon: VNode
  type: string
}
const animationState = ref<number>(0);
const state = ref<boolean>(false);

const tabs = ref<Tab[]>([
  {
    icon: h('i', { class: "far fa-sun" }),
    type: 'theme',
  },
  {
    icon: h('i', { class: "fa fa-sign-out" }),
    type: 'themex',
  },
  {
    icon: h('i', { class: "fa fa-sign-out" }),
    type: 'themex',
  },
  {
    icon: h('i', { class: "fa fa-sign-out" }),
    type: 'themex',
  },
]);

const onClickOff = (): void => {
  state.value = !state.value;
  animationState.value = state.value ? 1 : 2
}

const onClickSetting = (type: string, index: number): void => {
  switch (type) {
    case 'theme':
      tabs.value[index].icon = onChangeTheme() === 'light'
        ?
        h('i', { class: "far fa-sun" })
        :
        h('i', { class: "far fa-moon" });
      break;
    default:
      break;
  }
}

</script>
<style lang="less" scoped>
li {
  list-style: none;
  display: inline-block;
}

.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  --default-icon-height: 40px;
}
.list-animate-wrapper {
  position: absolute;
  top: calc(10px + var(--default-icon-height));
  left: 0;
  overflow: hidden;
  z-index: 99;
}
.list {
  display: flex;
  flex-direction: column;
  z-index: 9999;
  height: 0;
  .li {
    position: relative;
    margin: 10px 0;
    display: flex;
    justify-content: center;

    .link {
      box-sizing: border-box;
      text-decoration: none;
      position: relative;
      width: 40px;
      height: 40px;
      display: inline-block;
      border-radius: 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1.5em;
      border: 1px solid #ffffff66;
      border-right: 1px solid  #ffffff33;
      border-bottom: 1px solid  #ffffff33;
      box-shadow: 0 5px 45px rgba(0,0,0,.1);
      backdrop-filter: blur(2px);transition: 0.5s;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 100%;
        background:#ffffff80;
        transform: skewX(45deg) translateX(150px);
        transition: 0.5s;
      }
    }

    &:hover .link {
        transform: translateY(-5px);
        &::before{
          transform: skewX(45deg)translateX(-150px);
        }
    }
  }
}

.btn {
      position: relative;
      display: flex;
      justify-content: center;

      .btn-icon {
        text-decoration: none;
        width: 40px;
        height: var(--default-icon-height);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        color: #fff;
        font-size: 1.5em;

        &:hover {
          animation: rotate-animation .5s linear;
          animation-iteration-count: 1;
        }
      }
}

.list-down {

  animation: down 0.5s ease-in-out both;
}

.list-up {
  animation: up 0.5s ease-in-out;
}


@keyframes down {
  0% {
    height: 0;
    transform: translateY(-100%);
  }

  100% {
    height: 100%;
    transform: translateY(0%);
  }
}

@keyframes up {
  0% {
    height: 100%;
    transform: translateY(0%);
  }

  100% {
    height: 0;
    transform: translateY(-100%);
  }
}

@keyframes rotate-animation {
  0% { transform: rotate(0deg); } /* 初始状态，角度为0度 */
  100% { transform: rotate(180deg); } /* 结束状态，角度为360度（完成一圈）*/
}
</style>
