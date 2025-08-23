import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Add these settings for proper SPA routing
  build: {
    outDir: 'dist',
    sourcemap: false // Optional: disable sourcemaps for smaller build size
  },
  
  // Optional: Base public path when served in production
  base: './',
});