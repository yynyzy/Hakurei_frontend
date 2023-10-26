<template>
  <div class="information">
    <div class="img-box">
      <img src="@/assets/images/head.jpeg" alt="*" />
    <div class="menu-wrapper">
      <div class="menu">
        <div class="menu-content">
          <div class="nick-name">YZYYYN</div>
          <div class="count-items">
            <div class="count">
              <span class="count-num">150</span>
              <span class="count-text">文章</span>
            </div>
            <div class="count">
              <span class="count-num">150</span>
              <span class="count-text">文章</span>
            </div>
            <div class="count">
              <span class="count-num">150</span>
              <span class="count-text">文章</span>
            </div>
          </div>

          <a-menu
            :selectable="canMenuSelect"
            forceSubMenuRender="true"
            style="text-align: left;color: #61666D; border: none;"
            mode="vertical"
            :items="menus"
            @click="handleClick"
          />

          <div class="line"></div>
          <div class="login-out">
            <i class="fa fa-sign-out" />
            <span class="text">退出登录</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue';
import type { MenuProps } from 'ant-design-vue';

const canMenuSelect = false;
const menus  = [
  {
    key: '1',
    icon: h('i', { class: "fa fa-sign-out" }),
    label: '个人中心',
    title: '个人中心',
  },
  {
    key: '2',
    icon: h('i', { class: "fa fa-user" }),
    label: '主题切换',
    title: '主题切换',
  },
];
const handleClick: MenuProps['onClick'] = (menuInfo) => {
  console.log('click ', menuInfo);
};

</script>

<style lang="less" scoped>
.information {
  height: 50px;
  margin: 0;
  padding: 0;
  position: relative;
}

.img-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40px;
  width: 40px;
  position: relative;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
  transition: .4s;
}

.information:hover .img-box {
  margin-top: 30px;
  width: 100px;
  height: 100px;
  .menu-wrapper {
    display: block;

    .menu {
      opacity: 1;
    }
  }
}

.img-box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}

.menu-wrapper {
  box-sizing: border-box;
  display: none;
  background-color: transparent;
  padding-top: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}
.menu {
  opacity: 0;
  box-shadow: 0 0 30px #0000001a;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #E3E5E7;
  transition: .3s;
  box-sizing: border-box;
  width: 300px;
  padding: 0 24px 18px;

  .menu-content {
    margin-top: 50px;
    border-radius: 8px;
    height: 100%;
    width: 100%;

  .nick-name {
    display: flex;
    justify-content: center;
    margin-bottom: 2px;
    font-size: 18px;
    font-weight: 500;
    color: #fb7299;
  }

  .count-items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 0 20px;
    color: #000;
    .count {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      transition: color .2s;
      .count-num {
        font-size: 18px;
        font-weight: 500;
      }

      .count-text {
        color: #9499A0;
        font-weight: 400;
        font-size: 12px;
        transition: color .2s;
      }

      &:hover {
        .count-num, .count-text {
          color: #00AEEC;
        }
      }
    }
  }

  .line {
    margin: 10px 0;
    width: 100%;
    height: 1px;
    background: #E3E5E7;
  }

  .login-out {
    font-weight: 500;
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-radius: 8px;
    color: #61666D;
    font-size: 14px;
    cursor: pointer;
    transition: background-color .3s;
    .text {
      margin-left: 10px;
    }
    &:hover {
      background-color: #E3E5E7;
    }
  }
  }
}

:deep(.ant-menu-item) {
    padding-inline: 14px;
}

:deep(.ant-menu-submenu-title) {
    padding-inline: 14px;
}

</style>
