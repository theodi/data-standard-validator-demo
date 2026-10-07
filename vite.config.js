import { defineConfig } from 'vite'

export default defineConfig({
  // Relative, so the build works under /data-standard-validator-demo/ on GitHub Pages.
  base: './',
  // Pre-bundling would separate the component from its worker.js.
  // The engine's CommonJS dependencies still need pre-bundling.
  optimizeDeps: {
    exclude: ['@theodi/data-standard-validator-component'],
    include: ['@theodi/data-standard-validator-component > @theodi/data-standard-validator'],
  },
  build: { outDir: 'dist', emptyOutDir: true, target: 'es2022' },
})
