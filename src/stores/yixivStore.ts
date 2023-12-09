import { computed, ref } from "vue"

const SEARCH_TYPE = 'searchType';

const headerActiveIndex = ref<number>(0);
const initSearchType = ref<number>(-1);
export const yixivStore = () => {

  const searchType = computed(() => {

    if(initSearchType.value < 0) {
      try {
        const localSearchType = localStorage.getItem(SEARCH_TYPE);
        initSearchType.value = Number(localSearchType);
        return initSearchType.value;
      } catch (error) {
        initSearchType.value = 0;
        localStorage.setItem(SEARCH_TYPE, '0');
      }
    }
    return initSearchType.value;
  });

  const setSearchType = (value: number) => {
    initSearchType.value = value;
    localStorage.setItem(SEARCH_TYPE, String(value));
  };

  const setHeaderActiveIndex = (index: number): void => {
    if(index === headerActiveIndex.value) {
      return;
    }
    headerActiveIndex.value = index
  };

  return {
    headerActiveIndex,
    setHeaderActiveIndex,
    // 搜索功能标签选项
    searchType,
    setSearchType,
  }
}
