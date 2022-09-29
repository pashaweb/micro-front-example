import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import {name, version} from './package.json'

const outPutName = name.replace('@', '').replace('/', '-') + "-" + version;

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist',
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: `${outPutName}.js`,
        assetFileNames: `${outPutName}[extname]`,
        chunkFileNames: `${outPutName}.js`,
        format:"module",
      }
    }
  }
})
