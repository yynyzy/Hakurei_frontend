
<template>
  <nav class="header">
    <div class="logo">
      logo
    </div>
    <div class="left">
      <ul>
        <li>1</li>
      </ul>
    </div>
    <div class="right">
      聊天室
    </div>
  </nav>
</template>

<script setup lang='ts'>
import { ref, reactive,toRefs,onBeforeMount,onMounted} from 'vue'
</script>
<style lang="less" scoped>
.header {
  height: 60px;
  background-color: #fff;
  box-shadow:1px 1px 5px#0003
}
</style>
