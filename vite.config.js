import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',                    // links inside the built page are relative, so it works on GitHub Pages
  build: { outDir: 'docs' },     // "npm run build" puts the finished site in docs/
})