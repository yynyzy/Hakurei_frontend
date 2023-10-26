<template>
  <div class="wrapper" v-loading="loading" :class="{ popup: show, active: isLoginForm }">
    <span class="close" @click="onCloseForm">
      <i class="fas fa-times" />
    </span>
    <div class="form-box login">
      <h2>Login</h2>
      <form class="form">
        <div class="input-box">
          <input v-model="modelValue.username" type="text" required />
          <label>Username</label>
        </div>
        <div class="input-box">
          <input v-model="modelValue.password" type="password" required />
          <label>Password</label>
        </div>
        <div>
          <button class="btn" @click="onLogin">login</button>
        </div>
        <p class="tip">Don't have a account ? <a @click="onToSignForm">Sign up</a></p>
      </form>
    </div>
    <div class="form-box register">
      <h2>Registration</h2>
      <form class="form">
        <div class="input-box">
          <input v-model="modelValue.username" type="text" />
          <label>Username</label>
        </div>
        <div class="input-box">
          <input v-model="modelValue.password" type="password" required />
          <label>Password</label>
        </div>
        <div>
          <button class="btn" @click="onSign">Register</button>
        </div>
        <p class="tip">Already have a account ? <a @click="onToLoginForm">Login</a></p>
      </form>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { LoginRequest } from '../../../types/User';

interface Props {
  modelValue: LoginRequest
  show: Boolean
  loading: Boolean
}
interface Emits {
  (event: 'login'): void;
  (event: 'sign'): void;
  (event: 'show', value: boolean): void;
}
const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const onCloseForm = (): void => {
  emits('show', false)
};
const isLoginForm = ref(false);
const onToSignForm = (): void => {
  isLoginForm.value = true;
  props.modelValue.username = '';
  props.modelValue.password = '';
};
const onToLoginForm = (): void => {
  isLoginForm.value = false;
  props.modelValue.username = '';
  props.modelValue.password = '';
};
const onLogin = (): void => {
  emits('login');
}

const onSign = (): void => {
  emits('sign');
}
</script>
<style lang="less" scoped>
.wrapper {
  position: relative;
  width: 400px;
  height: 440px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: scale(0);
  transition: transform .5s ease;
  z-index: 999;

  &.popup {
    transform: scale(1);
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    background: #162938;
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 20px;
    cursor: pointer;
    z-index: 1;
    font-size: 1.5em;
  }

  .form-box {
    width: 100%;
    padding: 40px;

    h2 {
      font-size: 2em;
      text-align: center;
      color: #162938;
    }

    .form {
      .input-box {
        position: relative;
        width: 100%;
        height: 50px;
        margin: 30px 0;
        border-bottom: 2px solid #162938;

        input {
          width: 100%;
          height: 100%;
          background: transparent;
          transition: .5s;
          font-size: 1em;
          color: #162938;
          font-weight: 600;
          padding: 0 35px 0 5px;

          &:focus~label,
          &:valid~label {
            top: -5px;
          }

          ;
        }

        label {
          position: absolute;
          top: 50%;
          left: 5px;
          transform: translateY(-50%);
          font-size: 1em;
          color: #162938;
          font-weight: 500;
          pointer-events: none;
        }
      }

      .btn {
        width: 100%;
        height: 45px;
        background: #162938;
        font-size: 1em;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
      }

      .tip {
        font-size: .9em;
        color: #162938;
        text-align: center;
        font-weight: 500;
        margin: 25px 0 10px;

        a {
          color: #162938;
          font-weight: 600;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .form-box.login {
    transition: transform .2s ease;
    transform: translateX(0);
  }

  .form-box.register {
    position: absolute;
    transform: translateX(400px);
  }


  &.active {
    .form-box.login {
      transition: transform .2s ease;
      transform: translateX(-400px);
    }

    .form-box.register {
      position: absolute;
      transform: translateX(0);
    }
  }
}
</style>
../../interface/User.ts
