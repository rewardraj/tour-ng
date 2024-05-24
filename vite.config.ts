import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
  resolve: {
    alias: {
      "@app": `${__dirname}/app`,
      "@atoms": `${__dirname}/app/components/atoms`,
      "@molecules": `${__dirname}/app/components/molecules`,
      "@organisms": `${__dirname}/app/components/organisms`,
      "@shared": `${__dirname}/app/shared`,
      "@utils": `${__dirname}/app/shared/utils`,
      "@assets": `${__dirname}/app/assets`,
      "@styles": `${__dirname}/app/assets/styles`,
      "@fonts": `${__dirname}/app/assets/fonts`,
    },
  },
});
