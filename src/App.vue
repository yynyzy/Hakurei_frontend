<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isLoginPage = ref<boolean>(false);
watchEffect(() => {
  const { path } = route;
  isLoginPage.value = (path === '/login');
})

</script>

<template>
    <y-status-bar v-if="!isLoginPage" class="status-bar"></y-status-bar>
    <section>
        <router-view />
    </section>
</template>

<style lang="less" scoped>
section {
    width: 100vw;
    height: 100vh;
    min-width: 1000px;
    overflow-x: auto;
}

.status-bar {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
