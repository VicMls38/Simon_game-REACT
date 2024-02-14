import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        theme_color: "#f69435",
        background_color: "#f69435",
        display: "browser",
        scope: "/",
        start_url: "/",
        name: "simon",
        short_name: "simon",
        icons: [
            {
                src: "/icon-144x144.png",
                sizes: "144x144",
                type: "image/png"
            },
            {
                src: "/icon-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/icon-256x256.png",
                sizes: "256x256",
                type: "image/png"
            },
            {
                src: "/icon-384x384.png",
                sizes: "384x384",
                type: "image/png"
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ]
    }
    })
  ],
})
