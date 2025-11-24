import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      // Strip version suffixes from imports (e.g. "sonner@2.0.3" -> "sonner")
      { find: /^(.*)@\d+\.\d+\.\d+$/, replacement: '$1' }
    ]
  },
  build: {
    outDir: 'dist',
  }
})
