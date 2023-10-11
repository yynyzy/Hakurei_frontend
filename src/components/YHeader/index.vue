<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="header-left">
        <div class="title">{{ WebName }}</div>
        <y-theme-controller />
        <nav class="navigation-bar">
          <ul>
            <li v-for="(tab, index) in routerMapLeft" :key="index" @click="onToPage(tab)" :text="tab.name">{{ tab.name }}
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-right">
        <nav class="navigation-bar">
          <ul class="bar-wrapper">
            <li class="li">
              <y-avatar/>
            </li>
            <li class="li popover-wrap"
              v-for="(tab, index) in routerMapRight"
              :key="index"
              @click="onToPage(tab)"
            >
              <a href="#" class="entry">
                <i class="fa fa-book-open" />
                <span >{{ tab.name }}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  </div>
  <slot name="header-bg"></slot>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Tab {
  name: string,
  route: string,
}
const WebName: string = 'YzYn';
const routerMapLeft: Array<Tab> = [
  {
    name: '首页',
    route: '/home',
  },
  {
    name: '自定义组件',
    route: '/component',
  },
  {
    name: 'CSS 特效',
    route: '/css',
  },
  {
    name: 'JS 妙用',
    route: '/js',
  },
];
const routerMapRight: Array<Tab> = [
  {
    name: '博客',
    route: '/blog',
  },
  {
    name: '博客',
    route: '/blog',
  },
  {
    name: '博客',
    route: '/blog',
  },
  {
    name: '博客',
    route: '/blog',
  },
];

const router = useRouter();
const onToPage: (val: Tab) => void = (val) => {
  router.push(val.route);
};
</script>

<style lang="less" scoped>

.header-wrapper {
  width: 100%;
  box-sizing: border-box;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  height: 64px;
  padding: 10px 20px;
  z-index: 9999;
  background-color: transparent;
  // box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  .header-left {
    display: flex;
    justify-content:
      center;
    align-items: center;

    .title {
      color: #f83cd2;
      font-weight: bold;
      font-size: 30px;
      margin-right: 10px;
    }

    .navigation-bar {
      height: 100%;

      ul {
        display: flex;
        align-items: center;
        height: 100%;

        li {
          height: 100%;
          line-height: 50px;
          padding: 0 10px;
          flex: 1;
          font: 100 15px;
          white-space: nowrap;
          color: #4664b4;
          position: relative;

          &::after {
            content: "";
            border: 1px solid #d380e7;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 6px;
            transform: scaleX(0);
            transition: transform .5s;
            transform-origin: right;
          }

          &:hover {
            &::after {
              transform-origin: left;
              transform: scaleX(1);
            }
          }
        }
      }
    }
  }


  .header-right {
    display: flex;
    align-items: center;
    justify-content: center;

    .navigation-bar {
      height: 100%;
      .bar-wrapper {
        display: flex;
        align-items: center;
        list-style-type: none;
        box-sizing: border-box;
        > li {
          display: flex;
          align-items: center;
          flex-direction: column;
          flex-shrink: 0;
          margin: 0 5px;
          min-width: 50px;
          text-align: center;
          font-size: 13px;
          box-sizing: border-box;
          color: #fff;

          .entry {
            display: flex;
            align-items: center;
            flex-direction: column;
            flex-shrink: 0;
            margin-right: 0;
            line-height: 1.25;
            text-align: center;
            font-size: 16px;

            >i {
              width: 20px;
              height: 20px;
              margin-bottom: 2px;
            }

            >span {
              text-align: center;
              font-size: 13px;
              word-break: keep-all;
            }
          }
        }

      .popover-wrap {
        &:hover {
            i {
              animation: iconJump 0.3s;
              animation-iteration-count:1;
            }
          }
        }
      }
    }

  }
}

@keyframes iconJump {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, -5px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
