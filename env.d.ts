// 解决 main.ts 引用 App.vue 时的 eslint 报错
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
