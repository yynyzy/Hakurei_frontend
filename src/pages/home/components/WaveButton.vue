<template>
  <div class="button">
    {{ text }}
  </div>
</template>

<script setup lang='ts'>

defineProps({
  text: {
    type: String,
    require: true,
    default: ''
  },
})
</script>
<style lang="less" scoped>
.button {
  //  height: 100%;
    margin-right: 10px;
    min-width: 5em;
    text-align: center;
    display: inline-block;
    position: relative;
    z-index: 1;
    overflow: hidden;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 1em;
    color: #0000ff;
    padding: 0.25em 0.5em;
    border: 0.1em solid #0000ff;
    border-radius: 1em;
    transition: 3s;

    &:before, &:after {
      content: '';
      position: absolute;
      top: -1.5em;
      z-index: 1;
      width: 200%;
      aspect-ratio: 1;
      border: none;
      border-radius: 40%;
      background-color: #0000ff40;
      transition: 3s;
  }
  &:before {
    left: -80%;
    transform: translate3d(0, 5em, 0) rotate(-340deg);
  }
  &:after {
    right: -80%;
    transform: translate3d(0, 5em, 0) rotate(-390deg);
  }

  &:hover,
  &:focus {
    color: #ffffff;
    &:before,
    &:after {
      transform: none;
      background-color: rgba(0,0,255,0.75);
    }
  }
}
</style>
