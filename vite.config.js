import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',  // Ensure this matches your build output directory
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') {
            return 'assets/index-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});