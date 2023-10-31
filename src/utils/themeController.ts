
import { themeStore } from "@/stores";

const { THEME_TYPES, themeType, setLightTheme, setDarkTheme} = themeStore();

// true 为白天模式， false 为夜晚模式
export const onChangeTheme = () => {
  if(themeType.value === THEME_TYPES.THEME_LIGHT) {
    setDarkTheme();
  } else {
    setLightTheme();
  };
  return themeType.value;
};
