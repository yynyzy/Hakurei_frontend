<template>
  <div class="home">
    <Header class="header"/>
    <div class="container">
      <!-- <router-view/> -->
      <roleModal class="role-model"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import roleModal from './components/roleModel.vue'
</script>

<style lang="less" scoped>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  .header {
    position: absolute;
    top: 0;
  }
  .container {
    height: 100%;
    padding: 0 100px;
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    overflow:hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .role-model {
        z-index:1;
        margin: 100px auto;
        // background-color: red;
    }
  }
}
</style>
