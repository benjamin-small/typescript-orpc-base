import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://server:3000', // Replace with your backend server's URL and port
                changeOrigin: true, // Needed for virtual hosted sites
                rewrite: (path) => path.replace(/^\/api/, ''), // Optional: remove '/api' prefix from the forwarded path
                secure: false, // Optional: for self-signed certificates
                // ws: true, // Optional: enable websocket proxying
            },
        }
    }
})
