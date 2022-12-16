import { defineConfig, mergeConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ViteVue from '@vitejs/plugin-vue'

const isDevelopment = process.env.NODE_ENV === 'development'

const base = defineConfig({
  plugins: [
    AutoImport({
      dts: 'typing/auto-imports.d.ts',
      imports: ['vue', {}],
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dts: 'typing/components.d.ts',
      resolvers: [],
    }),
  ],
})

const development = defineConfig({
  // dependency pre-bundling
  optimizeDeps: {
    include: [],
  },
})

export default mergeConfig(base, isDevelopment ? development : {})
