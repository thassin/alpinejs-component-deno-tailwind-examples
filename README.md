
# alpinejs-component-deno-tailwind-examples

An example/template project for a simple AlpineJS development environment using Deno.

## About

This example/template project contains a simple web-development environment:

- for [AlpineJS](https://alpinejs.dev/), using typescript components from [NxtLvLSoftware/alpine-typescript](https://github.com/NxtLvLSoftware/alpine-typescript)
- using [Deno](https://deno.com/) runtime to check, build and process typescript/javascript code
- as a bonus, using [TailWindCSS](https://tailwindcss.com/) to get an optimized set of css style files.

## Dependencies

The dependencies are:

- Deno runtime (install information [here](https://docs.deno.com/runtime/getting_started/installation/)), I'm using Deno version 2.1.9 currently (just a **single file** installed to /usr/local/bin).
- AlpineJS and TailWindCSS packages from [npm](https://www.npmjs.com/) (automatically downloaded and installed by Deno as needed).

## Features

Objective is that the development environment is straightforward, understandable and adaptable to new requirements.

The typescript components from NxtLvLSoftware/alpine-typescript project are used, to allow typescript checks for the component code as much as possible (instead of using inline-javascript code inside the html file(s), which is the most common and straightforward way of using AlpineJS presented in many tutorials and examples, but it makes use of typescript checks very complicated).

In addition to using typescript components, this project presents an idea to **assemble also html code based on components**. This is based on an idea, that the html code is generated by a script, in which the individual components are appended to html code by **calling a specific function which prints out the component html code**.

This brings kind-of "single-file-components" feature to AlpineJS; it is helpful (in design-, development- and maintenance-wise) to have the **html code and the related typescript/javascript code contained in the same file**.  Also this concept can be easily applied to situations where components are composed of sub-components, nested as deeply as needed.

I'm using bash shell scripts for the development tasks:

- _check.sh : to run typescript checks for all source code.
- _bundle.sh : to build typescript code to javascript and transfer it into wwwroot directory, and also to generate the html code and transfer it into wwwroot directory (see the script file `src/_genHTML_index.ts` about html code generation).
- _test.sh : to launch a test www-server on localhost port 8888.

## Running the example

1. Clone this repository.
2. Make sure you have a Bash shell with Deno runtime installed and available (you can try command `deno --version` to test your Deno install).
3. Enter into `example1_multigreet` directory.
4. Optionally, run `./_check.sh` to run typescript checks.
5. Run `./_bundle.sh` to build html and js files into `wwwroot` directory.
6. Run `./_test.sh` to start a Deno test www-server on localhost port 8888.
7. Start a web browser and go to address `http://localhost:8888`.

## Why all this?

There probably exists more advanced development environments already, with features like hot-module-replacement etc.

However, my own experience is that it may be difficult to handle these advanced tools, to combine them with other tools, and then/eventually to keep them all functional in the long run.

This is a safe and simple "old-school" development environment, easy to understand, maintain and develop further.

