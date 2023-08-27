<template>
  <div class="waterfall-wrapper" v-loading="state.loading">
    <div class="container" ref="containerRef">
      <div class="list">
          <div class="item" v-for="(item, index) in state.imageList" :key="index" style="{width: `${state.imageWidth}px`,
                    transform: `translate3d(${imagePos[index].x}px, ${imagePos[index].y}px, 0)`
      }">
            <slot name="item" :item="item"></slot>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, computed, onMounted} from 'vue';
import { WaterFallProps, ImageItem} from '../WaterFallComponent/type';

const props = defineProps<WaterFallProps> ();
defineSlots<{
  item(props: {item: ImageItem }): any;
}>();

const state = reactive({
  loading: false,
  isFinish: false,
  page: 1,
  imageWidth: 0,
  imageList: [] as ImageItem[],
})
const containerRef = ref<HTMLDivElement>(); // 组件 ref
const columnHeight = ref<number[]>([]); // 瀑布流高度数组
const imagePos = ref<{x: number, y: number}[]>([]);

// 获取最小列 index 和 height
const min = computed(() => {
  let minIndex = -1;
  let minHeight = Infinity;
  for(let i = 0; i < columnHeight.value.length; i++) {
    const h = columnHeight.value[i];
    if( h < minHeight) {
      minHeight = h;
      minIndex = i
    }
  }
  return {
    minIndex,
    minHeight,
  }
})

const getImageList = async (page: number, pageSize: number) => {
  if(state.isFinish) return;
  state.loading = true;
  const list = await props.request(page, pageSize);
  state.page +=1
  if (!list.length) {
    state.isFinish = true;
    return;
  }
  computedImagePos(list, true);
  state.imageList =[...state.imageList, ...list];
  state.loading = false;
}

const computedImagePos = (list: ImageItem[], isFirst: Boolean) =>{
  list.forEach((item, idx) => {
    const imageHeight = Math.floor((item.height * state.imageWidth) / item.width);
    if (isFirst && idx < props.column) {
      imagePos.value.push({
        x: idx % props.column !== 0 ? idx * (state.imageWidth + props.gap) : idx * state.imageWidth,
        y: 0,
      })
      columnHeight.value.push(imageHeight + props.gap)
    } else {
      const { minIndex, minHeight} = min.value;
      imagePos.value.push({
        x: minIndex % props.column !== 0 ? minIndex * (state.imageWidth + props.gap) : minIndex * state.imageWidth,
        y: minHeight,
      })
      columnHeight.value[minIndex] += imageHeight + props.gap;
    }
  })
};

const init = () => {
  if(containerRef.value) {
    // 根据 container 宽度计算瀑布流每个图片的宽度
    state.imageWidth = (containerRef.value.clientWidth - (props.column -1) * props.gap)/ props.column;
    getImageList(state.page, props.pageSize);
  }
}

onMounted(() => {
  init();
})
</script>
<style lang="less" scoped>
.waterfall-wrapper {
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
   height: 100%;
   overflow-y: scroll;
    .list {
    width: 100%;
    position: relative;
    background-color: red;
    .item {
      width: 100%;
      position: absolute;
      background: green;
    }
  }
  }
}
</style>
