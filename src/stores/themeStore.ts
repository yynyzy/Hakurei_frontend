import { ref } from "vue"

/**
 * 主题色控制
 * THEME_LIGHT: 白天模式
 * THEME_DARK： 夜晚模式
 */
interface THEME {
  fontColor: string
  borderColor: string
  bgColor: string
  opposite_borderColor: string
  opposite_fontColor: string
  opposite_bgColor: string
}

enum THEME_TYPES {
  'THEME_DARK' = 'dark', // 手动分配值为 'dark'
  'THEME_LIGHT' = 'light'
}

const THEME_LIGHT = {
  fontColor: '#000',
  borderColor: '#000',
  bgColor: '#000',
  opposite_borderColor: '#fff',
  opposite_fontColor: '#fff',
  opposite_bgColor: '#fff',
}

const THEME_DARK = {
  fontColor: '#fff',
  borderColor: '#fff',
  bgColor: '#fff',
  opposite_fontColor: '#000',
  opposite_borderColor: '#000',
  opposite_bgColor: '#000',
}

let theme = ref<THEME>(THEME_LIGHT);
let themeType = ref<THEME_TYPES>(THEME_TYPES.THEME_LIGHT);

export const themeStore = () => {

  const setDarkTheme = (): void => {
    theme.value = THEME_DARK;
    themeType.value = THEME_TYPES.THEME_DARK;
  };

  const setLightTheme = (): void => {
    theme.value = THEME_LIGHT;
    themeType.value = THEME_TYPES.THEME_LIGHT;
  };

  return {
    theme,
    THEME_TYPES,
    themeType,
    setDarkTheme,
    setLightTheme,
  }
}
