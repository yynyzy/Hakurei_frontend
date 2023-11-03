<template>
  <div class="tags-container">
    <div class="tags-content">
      <ul>
        <li v-for="(item, index) in tags" key="index">
          <a-tag :color="getRandomColor()" class="tag">
            <div class="title">{{ item.title }}</div>
            <div v-if="item.zh" class="sub-title">{{ item.zh }}</div>
          </a-tag>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive,toRefs,onBeforeMount,onMounted} from 'vue';
import { ITag, TagColor } from '../../../types/Yixiv';


interface Props {
  tags: ITag[],
};
interface Emits {
  (event: 'clickTags', value: string): void;
};

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const colors = Object.values(TagColor);
const clen = colors.length;
console.log('colors', colors);
const getRandomColor = () =>{
  return colors[Math.floor(Math.random() * clen)]; // Return the randomly selected color
};

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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
    }
  }
}
</style>
