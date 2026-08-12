import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Ma Station",
        short_name: "Ma Station",
        description: "Gestion de vente d'essence",
        theme_color: "#12232E",
        background_color: "#12232E",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          { src: "icone-192.png", sizes: "192x192", type: "image/png" },
          { src: "icone-512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],
})
