import { shallowRef, ref } from "vue";
/**
 * 主题色控制
 * THEME_LIGHT: 白天模式
 * THEME_DARK： 夜晚模式
 */
type THEME = {
  fontColor: string,
  borderColor: string,
  bgColor: string,
  opposite_borderColor: string,
  opposite_fontColor: string,
  opposite_bgColor: string,
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
const theme = shallowRef<THEME>(THEME_LIGHT);

let themeType = ref('light');
export const themeStore = () => {

  const setDarkTheme = (): void => {
    theme.value = THEME_DARK;
    themeType.value = 'THEME_DARK';
  };

  const setLightTheme = (): void => {
    theme.value = THEME_LIGHT;
    themeType.value = 'THEME_LIGHT';
  };

  return {
    theme,
    themeType,
    setDarkTheme,
    setLightTheme,
  }
}
