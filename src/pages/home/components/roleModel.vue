<template>
  <div class="shell">
    <div class="box" v-for="(item, index) in roles" :key="index">
      <img :src="item.img"/>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang='ts'>
// import { ref } from 'vue';s

type RoleType = {
  img: string
  name: string
}
const roles: RoleType[] = [
  {
    name: '小樱',
    img: ' ./images/home/role1.jpg',
  },
  {
    name: '小樱',
    img: ' ./images/home/role1.jpg',
  },
  {
    name: '小樱',
    img: ' ./images/home/role1.jpg',
  },
  {
    name: '小樱',
    img: ' ./images/home/role1.jpg',
  },
  {
    name: '小樱',
    img: ' ./images/home/role1.jpg',
  },
  {
    name: '小樱',
    img: ' ./images/home/role1.jpg',
  },
];

</script>

<style lang="less" scoped>
.shell {
  width: 100%;
  height: 750px;
  display: flex;


  .box {
    flex: 1;
    overflow: hidden;
    background-color: #fff;
    margin: 0 10px;
    border: 10px #fff;
    box-shadow: 10px 10px 20px #fff;
    border-radius: 10px;
    transition: all 0.5s;

    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 15%;
      font-size: 20px;
      font-weight: 900;
    }

    &:hover {
      flex-basis: 40%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

}
</style>
