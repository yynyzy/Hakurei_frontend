<template>
  <div class="waterfall-container" v-loading="state.loading">
    <div class="content" ref="contentRef">
      <div class="list">
          <div
            class="item"
            v-for="(item, index) in state.imageList"
            :key="index"
            :style="{
              width: `${state.imageWidth}px`,
              transform: `translate3d(${imagePos[index].x}px, ${imagePos[index].y}px, 0)`
            }"
          >
            <slot name="item" :item="item"></slot>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import _ from 'lodash';
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import { WaterFallProps, ImageItem} from '../type';

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
});
const contentRef = ref<HTMLDivElement>(); // 组件 ref
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
});

// 请求图片
const getImageList = async (page: number, pageSize: number, isFirst: Boolean) => {
  if(state.isFinish) return;
  state.loading = true;
  const list = await props.request(page, pageSize);
  state.page +=1
  if (!list.length) {
    state.isFinish = true;
    return;
  }
  computedImagePos(list, isFirst);
  state.imageList =[...state.imageList, ...list];
  state.loading = false;
};

// 计算每张图片的位置
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
  if(contentRef.value) {
    // 根据 container 宽度计算瀑布流每个图片的宽度
    state.imageWidth = (contentRef.value.clientWidth - (props.column -1) * props.gap)/ props.column;
    getImageList(state.page, props.pageSize, true);
    contentRef.value.addEventListener('scroll', handleScroll);
  }
};

onMounted(() => {
  init();
;});

// 卸载监听器
onUnmounted(()=> {
  contentRef.value && contentRef.value.removeEventListener('scroll', handleScroll)
})

const handleScroll = _.throttle(() => {
  const { scrollTop, clientHeight, scrollHeight } = contentRef.value!;
  const bottom = scrollHeight - clientHeight - scrollTop;
  if (bottom <=100) {
    // 触底
    getImageList(state.page, props.pageSize, false);
  }
}, 1000);
</script>
<style lang="less" scoped>
.waterfall-container {
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    height: 100%;
    border: 1px solid #ccf995;
    background-color: #ffffff;
    overflow-x: hidden;
    overflow-y: scroll;
    .list {
      width: 100%;
      position: relative;
      .item {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}
</style>
