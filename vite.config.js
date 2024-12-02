import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base:"/skripsi/",
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173, // Port default Vite, sesuaikan jika perlu
  },
})
