import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { resolve } from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@@/pages': resolve(__dirname, './src/pages'),
      '@@/modules': resolve(__dirname, './src/modules'),
      '@@/plugins': resolve(__dirname, './src/plugins'),
      '@@/directives': resolve(__dirname, './src/directives'),
      '@@/utils': resolve(__dirname, './src/utils'),
      '@@/common': resolve(__dirname, './src/common')
    },
    extensions: ['.ts', '.mjs', '.vue', '.json', '.less', '.css']
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
