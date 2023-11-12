import { ref } from "vue"


let headerActiveIndex = ref<number>(-1);

export const yixivStore = () => {

  const setHeaderActiveIndex = (index: number): void => {
    if(index === headerActiveIndex.value) {
      return;
    }
    headerActiveIndex.value = index
  };

  return {
    headerActiveIndex,
    setHeaderActiveIndex,
  }
}
