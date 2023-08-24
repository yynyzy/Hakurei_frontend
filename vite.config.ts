import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'pages': resolve(__dirname, './src/pages'),
      'modules': resolve(__dirname, './src/modules'),
      'common': resolve(__dirname, './src/common')
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
