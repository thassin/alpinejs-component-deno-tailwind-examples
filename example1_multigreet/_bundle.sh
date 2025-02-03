#! /bin/bash

echo RUN genHTML...
deno run src/_genHTML_index.ts > wwwroot/index.html

echo RUN tailwind...
deno task tailwind

echo RUN bundler...
deno run --allow-env --allow-read --allow-write --allow-run _bundler.ts

echo "--OK--"

