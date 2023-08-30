// import { customRef } from "vue";

// export const debounceRef = (value: any, duration: number) => {
//   let timer;
//   return customRef((track, trigger) => {
//     get () {
//       track();
//       return value;
//     },
//     set (val) {
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         trigger();
//         value = val   // 页面上的数据会延迟显示
//       }, duration);
//     }
//   })
// }
