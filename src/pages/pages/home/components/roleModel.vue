<template>
  <div class="shell">
    <div class="box" v-for="(item, index) in roles" :key="index">
      <img :src="item.img"/>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang='ts'>
type RoleType = {
  img: string
  name: string
}
const roles: RoleType[] = [
  {
    name: '博丽灵梦',
    img: new URL('@/pages/images/home/role1.jpg', import.meta.url).href,
  },
  {
    name: '风见幽香',
    img: new URL('@/pages/images/home/role2.jpg', import.meta.url).href,
  },
  {
    name: '八云紫',
    img: new URL('@/pages/images/home/role3.jpg', import.meta.url).href,
  },
  {
    name: '蕾米莉亚·芙兰朵露',
    img: new URL('@/pages/images/home/role4.jpg', import.meta.url).href,
  },
  {
    name: '古明地恋',
    img: new URL('@/pages/images/home/role5.jpg', import.meta.url).href,
  },
  {
    name: '东风谷早苗',
    img: new URL('@/pages/images/home/role6.jpg', import.meta.url).href,
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
      width: 100%;
      height: 90%;
      object-fit: cover;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 10%;
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
