import { computed, ref } from 'vue'
import { defineStore } from 'pinia';

interface TokenType {
  token: string
  refresh_token?: string
}

export const tokenStore = defineStore('ACCESS_TOKEN', () => {
  const TOKEN = ref<TokenType | null>(null);

  const ACCESS_TOKEN = computed<TokenType>(() => {
    try {
      return TOKEN.value
      || JSON.parse(localStorage.getItem("TOKEN")  || "{}")
    } catch (error) {
      localStorage.setItem("TOKEN", "");
      throw error;
    }
  })

  const setAccessToken = (token: TokenType) => {
    TOKEN.value = token;
    localStorage.setItem("TOKEN", JSON.stringify(token));
  };

  return {
    ACCESS_TOKEN,
    setAccessToken,
  }
})
