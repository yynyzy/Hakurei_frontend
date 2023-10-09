import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@@/pages': resolve(__dirname, './src/pages'),
      '@@/views': resolve(__dirname, './src/views'),
      '@@/plugins': resolve(__dirname, './src/plugins'),
      '@@/directives': resolve(__dirname, './src/directives'),
      '@@/utils': resolve(__dirname, './src/utils'),
      '@@/stores': resolve(__dirname, './src/stores'),
      '@@/functional': resolve(__dirname, './src/functional')
    },
    extensions: ['.ts', '.mjs', '.vue', '.json', '.less', '.css', '.tsx', '.jsx']
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@import "./src/assets/style/global.less";',
      }
    },
  }
})
