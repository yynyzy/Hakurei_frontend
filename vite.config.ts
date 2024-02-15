import { defineConfig } from 'vite';
import ViteWasmPlugin from 'vite-plugin-wasm';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ViteWasmPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.ts', '.mjs', '.vue', '.json', '.less', '.css', '.tsx', '.jsx']
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    },
  }
})
