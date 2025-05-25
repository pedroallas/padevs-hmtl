import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/padevs-hmtl/', // Nome do seu repositório
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['@radix-ui/react-tabs', '@radix-ui/react-slot', '@radix-ui/react-tooltip']
  }
});
