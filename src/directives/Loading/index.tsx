import { createApp, defineComponent, Directive } from "vue";
import styles from './index.module.css'

const Model = defineComponent({
  setup() {
    return () => (
      <div class= { styles.loadClass }>
        123
      </div>
    )
  }
});

const mountDom = (el: HTMLElement) => {
  const div = document.createElement("div");
  div.classList.add("vLoading"); //需要创建一下 div 来接受一个 class 便于组件更新时的查找
  el.appendChild(div);
  const component = createApp(Model);
  component.mount(div);
}
const loading: Directive = {
  beforeMount(el: HTMLElement, binding: any) {
    console.log('el', el)
    const target = el;
    const flag = typeof binding.value == 'boolean' ? binding.value : binding.value.value
    if (target) {
      // 父元素相对定位
      target.style.position = "relative";
      if (flag) {
        mountDom(target);
      }
    }
  },
  updated(el: HTMLElement, binding: any) {
    const flag = typeof binding.value == 'boolean' ? binding.value : binding.value.value
    const c = el.querySelector('.vLoading') as HTMLElement;
    if (c) {
      c.style.display = flag ? "block" : "none";
    } else {
      flag && mountDom(el);
    }
  },
  unmounted(el: HTMLElement) {
    const c = el.querySelector('.vLoading') as HTMLElement;
    c && el.removeChild(c);
  }
}

export default loading;
