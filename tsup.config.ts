import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],
  format: ['esm', 'cjs'],
  outDir: "dist",
  external: [
    "tiddlywiki",
    "esbuild",
    "@prisma/client",
    "@prisma/adapter-libsql",
    "@libsql/client",
  ],
  tsconfig: "tsconfig.json",
  keepNames: true,
  dts: false,          // Generate type declaration files
  sourcemap: true,     // Generate source maps for debugging
  clean: true,         // Clean the output directory before each build
  minify: false,       // Set to true if you want minification
  splitting: false,    // Enable or disable code splitting

  banner: (ctx) => ctx.format === "esm" ? {
    js: `import {createRequire as __createRequire} from 'module'; const require=__createRequire(import.meta.url);import 'source-map-support/register.js';`,
  } : {
    js: `require('source-map-support/register');`,
  },
});
