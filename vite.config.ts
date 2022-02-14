import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import styleImport, { VantResolve } from 'vite-plugin-style-import'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 把 @ 指向到 src 目录去
    },
  },
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()]
    })
  ]
})
