
import { printHTML } from "./_printHTML_function.ts";
import { GreetingComponent_html } from "./component/GreetingComponent.ts"

const html = `
<!DOCTYPE html>
<html lang=en>
  <head>
    <link href="./styles.css_NOT_USED_YET" rel="stylesheet">

    <!-- load the main script here (with bundled alpinejs). -->
    <script src="scripts.js" defer></script>
  </head>
  <body>
    <h1>Alpine Multi-Greeting Example</h1>

${ GreetingComponent_html( 2 ) }

  </body>
</html>
`;

const result: string = printHTML( html, 0 );

console.log( result );

