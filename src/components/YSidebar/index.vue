<template>
  <nav class="nav">
    <div class="brand">
      <img src="@/assets/images/head.jpeg" />
      <p>
        {{ introduce.tipOne }}
        <span v-text="introduce.tipTwo"></span>
      </p>
    </div>
    <hr class="line">
    <ul class="list">
      <li
        v-for="(item, idx) in menus"
        :class="[clickIndex === idx ? 'active': '']"
        :key="idx"
        @click="onClickMenu(idx)"
      >
        <i class="far fa-hand-point-right" />
        <span :style="{'animation-delay': (idx * 0.1) + 0.5 + 's' }" v-text="item.name"></span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

interface Props {
  menus: menuType[],
  introduce: {tipOne: string, tipTwo: string},
}

interface menuType {
  name: string,
  [key: string]: any,
}

defineProps<Props>();
const emits = defineEmits<{
  getMenuIndex: [index: number],
}>();
const clickIndex = ref(0);

const onClickMenu = (index: number) => {
  clickIndex.value = index;
  emits('getMenuIndex', index);
}

</script>

<style lang="less" scoped>
.nav {
  z-index: 99;
  width: 100px;
  height: min-content;
  border-radius: 12px;
  padding: 16px;
  backdrop-filter: blur(18px);
  background-color: rgba(230, 235, 240, .7);
  border: 2px solid rgba(230, 235, 240, .7);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  transition: .6s cubic-bezier(.8, .5, .5, .8);
  overflow-x: hidden;
  overflow-y: scroll;

  &:hover {
    width: 320px;

    .brand p {
      animation: fadeIn .4s ease-out forwards;
      animation-delay: .4s;
    }

    .list span {
      animation: fadeIn .4s ease-out forwards;
    }
  }

  .brand {
    width: 100%;
    display: flex;
    align-items: center;

    img {
      width: 65px;
      border-radius: 50%;
      border: 4px solid rgba(230, 235, 240, .8);
    }

    p {
      color: #505257;
      font-weight: 500;
      font-style: italic;
      text-align: left;
      line-height: 22px;
      margin: 0 0 0 12px;

      span {
        color: #3c3e43;
        display: block;
        font-size: 26px;
        font-style: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .line {
    width: 100%;
    height: 2px;
    margin: 32px 0;
    background-color: #87a3af;
  }

  .list {
    width: 100%;

    li {
      display: flex;
      margin: 12px 0;
      padding: 20px;
      cursor: pointer;
      border-radius: 8px;
      transition: .4s ease-in-out;
      overflow: hidden;

      span {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
      }

      &:hover {
        background: rgba(230, 235, 240, .4);
      }

      &.active {
        background: #3681f6;

        span {
          color: #fff;
        }

        i {
          background: none;
          color: #e6ebf0;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
        }
      }
    }

    i {
      font-size: 20px;
      background: linear-gradient(-135deg, #3c3e43, #838487);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    span {
      color: #505257;
      font-size: 18px;
      font-weight: 500;
      margin: 0 0 0 12px;
    }
  }

  .brand p,
  .list span {
      opacity: 0;
      pointer-events: none;
      transition: translateX(20px);
  }

}

@keyframes fadeIn {
    to {
      opacity: 1;
      pointer-events: unset;
      transform: translateX(0);
    }
}
</style>
