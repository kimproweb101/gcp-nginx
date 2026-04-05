import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // 0.0.0.0 으로 노출 (도커 환경 필수)
    port: 5173, // 포트 고정
    strictPort: true, // 포트가 다르면 실행하지 않음
    allowedHosts: [
      'host.docker.internal', // 도커 내부 통신용
      'store.codept.kr', // 가짜 도메인 2
    ],
    watch: {
      usePolling: true, // 파일 변경 감지가 안 될 때를 대비한 설정
    },
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
