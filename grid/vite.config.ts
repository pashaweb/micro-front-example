import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import {name, version} from './package.json'

const outPutName = name.replace('@', '').replace('/', '-') + "-" + version;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // lib: {
    //   entry: resolve(__dirname, 'src/main.tsx'),
    //   name: name,
    //   fileName: outPutName,
    //   formats: ['es', 'umd', 'cjs']
    // },
    rollupOptions: {
      output: {
        entryFileNames: `${outPutName}.js`,
        assetFileNames: `${outPutName}[extname]`,
        chunkFileNames: `${outPutName}.js`,
      }
    }
  }
})
