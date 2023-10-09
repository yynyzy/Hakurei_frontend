import type { Component } from 'vue';
import ParticleClock from './components/ParticleClock/index.vue';
import BorderCssAnimation from './components/BorderCssAnimation/index.vue';
import AutoSeatSelection from './components/AutoSeatSelection/index.vue';
import TextScanningLoading from './components/TextScanningLoading/index.vue';
import TypeWritingText from './components/TypeWritingText/index.vue';
import Book3D from './components/Book3D/index.vue';
import WaveButton from './components/WaveButton/index.vue';

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
  {
    component: TypeWritingText,
    name: '文字逐渐打印',
    meta: {},
  },
  {
    component: WaveButton,
    name: '波浪按钮',
    meta: {},
  },
]
export default components;
