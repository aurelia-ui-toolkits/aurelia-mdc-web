import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import aurelia from '@aurelia/vite-plugin';
import path from 'path';


export default defineConfig({
  resolve: {
    alias: [
      { find: /@aurelia-mdc-web\/([a-z\-]*)$/, replacement: path.resolve(__dirname, '../$1/src') },
      { find: /@aurelia-mdc-web\/([a-z\-]*)\/styles$/, replacement: path.resolve(__dirname, '../$1/styles') },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        loadPaths: [path.resolve(__dirname, 'node_modules')],
      }
    }
  },
  server: {
    open: !process.env.CI,
    port: 9000,
  },
  esbuild: {
    target: 'es2022',
  },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: {
  //       '.html': 'text',
  //     },
  //   },
  // },
  plugins: [
    aurelia({ useDev: true }) as any,
    nodePolyfills()
  ]
});
