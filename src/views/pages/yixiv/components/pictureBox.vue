<template>
  <div class="box">
    <ElImage
      style="height: 184px;width: 184px;"
      :src="item.regular_url"
      fit="cover"
      @click="onClickImage"
    />
    <div>
      <div class="title">
        <a :href='`/illust/${item.picture_id}`' :alt="item.title">{{ item.title }}</a>
      </div>
      <div class="favor"><i class="far fa-heart" />{{ item.like_total }}</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
const router = useRouter();

interface Props {
  item: any
};

const props = defineProps<Props>();

const onClickImage = () => {
  router.push(`/illust/${props.item.picture_id}`);
}
</script>
<style lang="less" scoped>
.box {
  width: 184px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .title {
    display: flex;
    margin-top: 8px;

    a {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 22px;
      font-weight: 700;
      color: #000000e0;
      transition: color .2s ease 0s;
    }
  }

  .favor {
    font-size: 13px;
    color: #888;
    margin-top: 4px;

    i {
      margin-right: 8px;
    }
  }
}
</style>
