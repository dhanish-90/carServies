import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // filepath: c:\Users\hp\OneDrive\Desktop\protfolio\vite.config.js
// ...existing code...
esbuild: {
  loader: 'jsx', // should be a string
},
// ...existing code...
})
