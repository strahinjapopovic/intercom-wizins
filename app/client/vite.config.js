import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
          enabled: true
      },
      manifest: {
        name: "Intercom FS Wizard Installation Repository",
        short_name: "IC-FSWizInsRepo",
        description: "JavaScript, React, Vite and Progressive Web Application (PWA) for better performance.",
        background_color: '#225ca3',
        theme_color: '#225ca3',
        id: "./",
        start_url: "./",
        publicPath: 'auto',
        icons: [
          {
              src: "./logo-96x96.png",
              sizes: "96x96",
              type: "image/png",
              purpose: 'any'
          },
          {
              src: "./logo-128x128.png",
              sizes: "128x128",
              type: "image/png",
              purpose: 'any'
          },
          {
              src: "./logo-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: 'any'
          },
          {
              src: "./logo-256x256.png",
              sizes: "256x256",
              type: "image/png",
              purpose: 'any'
          },
          {
              src: "./logo-384x384.png",
              sizes: "384x384",
              type: "image/png"
          },
          {
            src: './logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
        ],
        screenshots : [
          {
            src: "./install-icon-wide-1500x728.png",
            type: "image/png",
            sizes: "1500x728",
            form_factor: "wide"
          },
          {
              src: "./install-icon-narrow-355x684.png",
              type: "image/png",
              sizes: "355x684",
              form_factor: "narrow"
          },
        ],
        display: "standalone",
        protocol_handlers: [
          {
            protocol: "web+accountdetails",
            name: "Open user account details",
            url: "/account-details?type=%s"
          },
        ],
        display_override: ["window-controls-overlay"],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,pdf}"],
        runtimeCaching: [{
            urlPattern: ({ url }) => {
                return url.pathname.startsWith("/api");
            },
            handler: "CacheFirst",
            options: {
                cacheName: "api-cache",
                cacheableResponse: {
                    statuses: [0, 200]
                }
            }
        }],
      },
    }),
  ],
  resolve: {
    alias: {
      '@utils': path.resolve(import.meta.dirname, '../utils'), 
      '@gql': path.resolve(import.meta.dirname, './gql/__generated__'),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
})
