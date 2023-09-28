import { shallowRef, ref } from "vue";
/**
 * 主题色控制
 */
const theme = shallowRef({});
let themeType = ref('light');

export const themeStore = () => {
  theme.value =  THEME_LIGHT;

  const setDarkTheme = () => {
    theme.value = THEME_DARK;
    themeType.value = 'THEME_DARK';
  };

  const setLightTheme = () => {
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

const THEME_LIGHT = {
  fontColor: '#000',
  borderColor: '#000',
  bgColor: '#000',
  hover_borderColor: '#fff',
  hover_fontColor: '#fff',
  hover_bgColor: '#fff',
}

const THEME_DARK = {
  fontColor: '#fff',
  borderColor: '#fff',
  bgColor: '#fff',
  hover_fontColor: '#000',
  hover_borderColor: '#000',
  hover_bgColor: '#000',
}
