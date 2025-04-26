import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import aurelia from '@aurelia/vite-plugin';
// import { name, version } from "./package.json";
import path from 'path';

// const htmlImport = {
//   name: "htmlImport",
//   /**
//    * Checks to ensure that a html file is being imported.
//    * If it is then it alters the code being passed as being a string being exported by default.
//    * @param {string} code The file as a string.
//    * @param {string} id The absolute path.
//    * @returns {{code: string}}
//    */
//   transform(code, id) {
//     if (/@aurelia-mdc-web.*\.html$/g.test(id)) {
//       console.log('!!!!!!!!!!!!!!!!!', id);
//       code = `export default \`${code}\``
//     }
//     return { code }
//   }
// }

export default defineConfig({
  // define: {
  //   pkgJson: { name, version },
  // },
  // resolve: {
  //   alias: [
  //     // { find: '@aurelia-mdc-web/all', replacement: path.resolve(__dirname, '../all/src') },
  //     // { find: '@aurelia-mdc-web/button', replacement: path.resolve(__dirname, '../button/src') },
  //   ]
  //   // alias: [
  //   //   { find: /@aurelia-mdc-web\/button\/(.*).html(.*)/, replacement: path.resolve(__dirname, '../button/src/$1.html$2') },
  //   // ]
  // },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       api: 'modern',
  //       // loadPaths: [path.resolve(__dirname, 'node_modules'),'../all']
  //       // api: 'legacy',
  //       // includePaths: [path.resolve(__dirname, 'node_modules')],
  //     }
  //   }
  // },
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
    // htmlImport,
    aurelia({
      useDev: true,
      include: ['src/**/*.{ts,js,html}', 'node_modules/@aurelia-mdc-web/**/*.{js,ts,html}'],
    }),
    nodePolyfills()
  ]
});
