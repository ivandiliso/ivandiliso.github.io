import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: { outDir: "docs" }, // ← add this
  css: {
    preprocessorOptions: { scss: { api: "modern" } },
  },
});