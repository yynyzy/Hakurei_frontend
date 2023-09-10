<template>
   <section class="wrapper">
    <div class="color one"></div>
    <div class="color two"></div>
    <div class="color three"></div>
    <div class="box">
      <div class="square" style="--i: 0"></div>
      <div class="square" style="--i: 1"></div>
      <div class="square" style="--i: 2"></div>
      <div class="square" style="--i: 3"></div>
      <div class="square" style="--i: 4"></div>
      <div class="container">
        <div class="form">
          <h2>Login Form</h2>
          <form>
            <div class="input-box">
              <input v-model="form.username" type="text" placeholder="Username"/>
            </div>
            <div class="input-box">
              <input v-model="form.password" type="password" placeholder="Password"/>
            </div>
            <div class="input-box">
              <button class="btn" @click="onLogin">login</button>
            </div>
            <p class="sign">Don't have a account ? <a href="#">Sign up</a></p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { tokenStore } from "@/stores";
import { LoginRequest } from "../types/User";
import { User } from '../engine';

const router = useRouter();
const route = useRoute();
const store = tokenStore();
const form = ref<LoginRequest>({
  username: '',
  password: '',
})
const onLogin = async () => {
  try {
    const res = await User.login(form.value);
    if (res.code === 200) {
      store.setAccessToken(res.data);
      router.push((route.query.redirect as string) || "/");
    } else {
      console.log("登陆失败")
    }
  } catch (error) {
    console.log("登陆失败")
    throw error;
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #f1f4f9,#dff1ff);
}
.color {
  filter: blur(150px);
  &:nth-child(1) {
    position: absolute;
    top: -350px;
    width: 600px;
    height: 600px;
    background-color: #ff359b;
  }
  &:nth-child(2) {
    position: absolute;
    bottom: -150px;
    left: 100px;
    width: 500px;
    height: 500px;
    background-color: #fffd87;
  }
  &:nth-child(3) {
    position: absolute;
    bottom: 50px;
    right: 100px;
    width: 300px;
    height: 300px;
    background-color: #00d2ff;
  }
}

.box {
  position: relative;
  .container {
    position: relative;
    width: 400px;
    min-height: 400px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    .form {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 40px;

      h2 {
        position: relative;
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 1px;
        margin-bottom: 40px;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 80px;
          height: 4px;
          background: #fff;
        }
      }

      .input-box {
        width: 100%;
        margin-top: 20px;

        input {
          width: 100%;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          color: #000000;
          font-size: 16px;
          letter-spacing: 1px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);

          &::placeholder {
            color: #fff;
          }
        }

        .btn {
          background: #fff;
          color: #666;
          min-width: 100px;
          cursor: pointer;
          margin-bottom: 20px;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 16px;
          letter-spacing: 1px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
      }

      .sign {
            color: #fff;
            margin-top: 5px;

            a {
              color: #fff;
              font-weight: 600;
            }
        }
    }
  }

  .square {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    animation: animate 10s linear infinite;
    animation-delay: calc(-1s * var(--i));

    &:nth-child(1) {
      top: -50px;
      right: -60px;
      width: 100px;
      height: 100px;
    }
    &:nth-child(2) {
      top: 150px;
      left: -100px;
      width: 120px;
      height: 120px;
      z-index: 2;
    }
    &:nth-child(3) {
      bottom: 50px;
      right: -60px;
      width: 80px;
      height: 80px;
      z-index: 2;
    }
    &:nth-child(4) {
      bottom: -80px;
      left: 100px;
      width: 50px;
      height: 50px;
    }
    &:nth-child(5) {
      top: -80px;
      right: 140px;
      width: 60px;
      height: 60px;
    }
  }
}

@keyframes animate {
  0%,100%
  {
    transform: translateY(-40px);
  }
  50%
  {
    transform: translateY(40px);
  }
}
</style>
