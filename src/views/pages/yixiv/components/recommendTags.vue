<template>
  <div class="tags-container">
    <div class="tags-content">
      <ul>
        <li v-for="(item, index) in tags" :key="index">
          <el-tag :color="getRandomColor()" class="tag" @click="onClickTags(item.tag_id)">
            <div class="title" v-text="item.title"></div>
            <div v-if="item.zh" class="sub-title" v-text="item.zh"></div>
          </el-tag>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ITag, TagColor } from '../../../types/Yixiv';


interface Props {
  tags: ITag[],
};
interface Emits {
  (event: 'clickTags', value: string): void;
};

defineProps<Props>();
const emits = defineEmits<Emits>();

const colors = Object.values(TagColor);
const clen = colors.length;
const getRandomColor = () =>{
  return colors[Math.floor(Math.random() * clen)];
};

const onClickTags = (tagId: number) => {
  console.log(tagId);
}
</script>
<style lang="less" scoped>
.tags-container {

  .tags-content {
    padding: 25px 0 25px 20px;

    ul {
      display: flex;
      align-items: center;
      overflow-x: auto;

      &::-webkit-scrollbar {
        width: 0;
      }
      .tag {
          max-width: 200px;
          min-height: 54px;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
    }
  }
}
</style>
