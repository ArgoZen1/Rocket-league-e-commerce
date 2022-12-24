import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://argozen1.github.io/Rocket-league-e-commerce/',
  plugins: [react()],
})
