
import * as esbuild from "https://deno.land/x/esbuild@v0.24.2/mod.js";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@0.11.1";

console.log( "BUILD-starting" );

let buildOptions = {
  plugins: [...denoPlugins()],
  entryPoints: ["./src/scripts.ts"],
  outdir: "./wwwroot",
  bundle: true,
  platform: "browser",
  format: "esm",
  target: "esnext",
  minify: false,
  sourcemap: true,
  treeShaking: true,
};

await esbuild.build( buildOptions );

console.log( "BUILD-completed" );

await esbuild.stop();

console.log( "BUILD-exiting" );

