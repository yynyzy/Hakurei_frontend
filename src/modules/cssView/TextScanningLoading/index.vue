<template>
  <div class="wrapper">
    <h2>Loading...</h2>
  </div>
</template>

<script setup lang='ts'>
</script>
<style lang="less" scoped>
.wrapper {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

h2 {
  position: relative;
  font-size: 10vw;
  color: #252839;
  -webkit-text-stroke: .3vw#383d52;
}

h2::before {
  content: 'Loading...';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-text-stroke: 0vw#383d52;
  color: #01fe87;
  border-right: 2px solid #01fe87;
}

h2::before {
  width: 0%;
  overflow: hidden;
  animation: animate 5s linear infinite alternate;
}

@keyframes animate {
  0% {
    width: 0%;
  }
  90% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
}
</style>
