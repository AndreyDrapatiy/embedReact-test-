import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // This prevents "process is not defined" errors
  },
  build: {
    lib: {
      entry: 'src/widget.js',  // <--- Ensure correct entry point
      name: 'Widget',
      fileName: 'widget',
      formats: ['umd'],  // Use UMD format for browser compatibility
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/widget.js',
      },
    },
  },
});