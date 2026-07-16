import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 部署在 https://codem-bd.github.io/codem-demo/ 下,
// 因此 base 必须与仓库名一致。
export default defineConfig({
  base: "/codem-demo/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
