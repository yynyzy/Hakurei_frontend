<template>
  <div class="wrapper">
    <y-modal :visible="navStatus" @maskTap="onClickOff">
      <div class="menu">
        <div class="setting" v-for="(item, index) in menu" :key="index">
          <a class="option" href="#">
            <component :is="item.icon" />
            <h3 class="title">{{ item.title }}</h3>
            <p class="description">{{ item.description }}</p>
          </a>
        </div>
      </div>
    </y-modal>
    <div v-if="!navStatus" class="menu-off" @click="onClickOff"></div>
  </div>
</template>

<script lang="ts" setup>
import { VNode, h, ref } from 'vue';
const navStatus = ref<boolean>(false);

interface menuOption {
  icon: VNode
  title: string
  description: string
};

const menu: Array<menuOption> = [
  {
    icon: h('i', { class: "fa fa-sign-out" }),
    title: 'testing',
    description: 'for test function for test functionfor test functionfor test function for test functionfor test function',
  },
  {
    icon: h('i', { class: "fa fa-sign-out" }),
    title: 'testing',
    description: 'for test function',
  },
  {
    icon: h('i', { class: "fa fa-sign-out" }),
    title: 'testing',
    description: 'for test function',
  },
  {
    icon: h('i', { class: "fa fa-sign-out" }),
    title: 'testing',
    description: 'for test function',
  },
  {
    icon: h('i', { class: "fa fa-sign-out" }),
    title: 'testing',
    description: 'for test function',
  },
  {
    icon: h('i', { class: "fa fa-sign-out" }),
    title: 'testing',
    description: 'for test function',
  },
  {
    icon: h('i', { class: "fa fa-sign-out" }),
    title: 'testing',
    description: 'for test function',
  },
  {
    icon: h('i', { class: "fa fa-sign-out" }),
    title: 'testing',
    description: 'for test function',
  }
];

const onClickOff = (): void => {
  navStatus.value = !navStatus.value;
};

</script>

<style lang="less" scoped>
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
}

.menu {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2.5em;
  background: rgb(255 255 255/24%);
  box-shadow: 0 8px 32px 0 rgb(0 0 0 / 37%);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  box-sizing: border-box;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  .setting {
    margin: 0.2em;
    box-sizing: border-box;
    width: 300px;
    height: 300px;

    .option {
      color: #dbdbdb;
      width: 100%;
      height: 100%;
      padding: 1.5em;
      background: rgba(255, 255, 255, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: 0.2s;

      &:hover {
        background: rgba(255, 255, 255, 0.5);
        transform: scale(1.1);
        box-shadow: 0 8px 32px 0 rgb(0 0 0 / 37%);
        color: #fff;
      }

      :deep(i) {
        font-size: 5em;
      }

      .title {
        color: #fff;
        margin: 0.4em 0 0 0;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
        font-weight: 600;
      }

      .description {
        margin-top: 20px;
        font-size: 1em;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }

}

.menu-off {
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
</style>
