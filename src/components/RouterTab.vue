<script setup lang="ts">
import { useRouter } from 'vue-router';

const CssPage = 'CSS 特效页面';

let router = useRouter()
const goCssPage = () => {
    router.push('css')
}
// const onToPage: ()=> void = () => {

// }
</script>

<template>
  <button @click="goCssPage">{{ CssPage}}</button>
  <!-- <router-link to="/css">{{ CssPage }}</router-link> -->
</template>

<style scoped>

</style>
