import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.html'],
  build: {
    target: 'es2015', // o 'es2015' si quieres compatibilidad más amplia
  }
})