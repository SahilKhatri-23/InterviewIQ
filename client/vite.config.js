import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// Force Vite server restart to detect new node_modules packages
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

