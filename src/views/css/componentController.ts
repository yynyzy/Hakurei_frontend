import type { Component } from 'vue';
import ParticleClock from './ParticleClock/index.vue';
import BorderCssAnimation from './BorderCssAnimation/index.vue';
import AutoSeatSelection from './AutoSeatSelection/index.vue';
import TextScanningLoading from './TextScanningLoading/index.vue';
import Book3D from './Book3D/index.vue';

type ComponentsType = {
  component: Component
  name: string
  meta: any
}
const components: ComponentsType[] = [
  {
    component: ParticleClock,
    name: '粒子时钟',
    meta: {},
  },
  {
    component: Book3D,
    name: '立体翻页书',
    meta: {},
  },
  {
    component: AutoSeatSelection,
    name: 'vue3+canvas实现选票功能',
    meta: {},
  },
  {
    component: TextScanningLoading,
    name: 'css动画 文字扫描加载（文字描边、伪元素、动画）',
    meta: {},
  },
  {
    component: BorderCssAnimation,
    name: '使用CSS repeating-conic-gradient创建令人惊叹的边框动画效果',
    meta: {},
  },
]
export default components;
