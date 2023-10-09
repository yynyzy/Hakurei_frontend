<!-- <template>
  <div class="header">
    <li class="normal avatar-box">
      <div class="img-box">
        <img class="img" src="https://gitlab.maiscrm.com/uploads/-/system/user/avatar/2167/avatar.png?width=23" />
      </div>
      <div class="menu">
        <div class="big-avatar">
          <img class="img" src="https://gitlab.maiscrm.com/uploads/-/system/user/avatar/2167/avatar.png?width=23" />
        </div>
      </div>
    </li>
  </div>
</template>

<style lang="less" scoped>
.header {
  width: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  background-color: #000;
}

.normal {
  display: inline-block;
  margin-right: 10px;
}

.avatar-box {
  background-color: aqua;
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  .img-box {
    position: relative;
    z-index: 2;
    width: 38px;
    height: 38px;
    border-radius: 50%;

    .img {
      display: block;
      border-radius: 50%;
      background-color: transparent;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 50%;
      position: absolute;
      box-sizing: border-box;
      object-fit: inherit;
      transition: .6s;
    }

    &:hover {
      .img {
        opacity: 0;
      }
      ~.menu {
        animation: fadeIn .6s both;
        margin-top: 40px;
        .big-avatar {
          width: 100px;
          height: 100px;
          animation: scaleIn .6s both;
        }
      }
    }
  }

  .menu {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    margin-left: -20px;
    box-shadow: 0 0 30px #0000001a;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #E3E5E7;
    opacity: 0;
    transition: .3s;
    display: flex;
    justify-content: center;
    padding: 0 24px 18px;
    width: 300px;
    min-height: 350px;
    animation: fadeOut .6s both;
    .big-avatar {
      margin-top: -62px;
      transform-origin: 100% 0%;
      animation: scaleOut .6s both;
      .img {
        transition: all 0.6s ease;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes scaleIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes scaleOut {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
}
</style> -->



<template>
    <div class="li">
      <li class="information">
        <div class="img-box">
          <img src="https://gitlab.maiscrm.com/uploads/-/system/user/avatar/2167/avatar.png?width=23" alt="*" />
          <div class="menu"></div>
        </div>
      </li>
    </div>
  </template>

  <style lang="less" scoped>
  .information {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
    background-color: #000;
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
    background: green;
  }

  .img-box:hover {
    margin-top: 50%;
    width: 100px;
    height: 100px;

    .menu {
      opacity: 1;
      width: 300px;
      height: 350px;
    }
  }

  .img-box img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }

  .menu {
    box-shadow: 0 0 30px #0000001a;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #E3E5E7;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    opacity: 0;
    transition: .3s;
  }
  </style>
