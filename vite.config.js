import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path to your repo name when deploying to GitHub Pages
  // e.g., https://kbwoodall.github.io/bettingapp/
  base: '/bettingapp/',
})
