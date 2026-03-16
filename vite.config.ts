import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Set base path for GitHub Pages deployment.
  // Change this to your repo name if deploying to https://<user>.github.io/<repo>/
  base: "/",
});
