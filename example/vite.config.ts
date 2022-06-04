import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],

  build: {
    target: "esnext",
    polyfillDynamicImport: false
  },

  /** GitHub Pages deploy sub-path. */
  base: "/solid-wavesurfer/",

  server: {
    /**
     * Vite runs at port 3000 but as I use code-server or codespaces,
     * the website is served at HTTPS, on port 443.
     */
    hmr: {
      clientPort: 443
    }
  }
});
