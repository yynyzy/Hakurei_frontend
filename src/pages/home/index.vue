<template>
  <div class="home">
    <Header/>
    <div>
      <router-view/>
    </div>
    <!-- <div class="title">Home
    </div> -->
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;
}
</style>
