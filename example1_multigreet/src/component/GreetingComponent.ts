
import { printHTML } from "../_printHTML_function.ts";
import { HelloComponent_html } from "./HelloComponent.ts";

import { AlpineComponent } from '../../../src-alpine-typescript/index.ts';

// the function GreetingComponent_html() is used to generate HTML code for GreetingComponent.
// => notice how several HelloComponent sub-components are processed here.

// because p tags create block elements, they occupy the entire horizontal space and the next element goes to the next line.
// x-model="greetingName" : this means the input-element contents bound to component "greetingName" variable.

export function GreetingComponent_html( i: number ): string {
	
	const html = `
<!-- GreetingComponent begin -->
<div x-data="greetComp()">
  <p>Please enter your name:</p>
  <input type="text" size="16" x-model="greetingName" />
${ HelloComponent_html( 1, "Hello" ) } <!-- english -->
${ HelloComponent_html( 1, "Bonjour" ) } <!-- french -->
${ HelloComponent_html( 1, "Hallo" ) } <!-- german -->
${ HelloComponent_html( 1, "Hej" ) } <!-- swedish -->
${ HelloComponent_html( 1, "Hei" ) } <!-- finnish -->
</div>
<!-- GreetingComponent end -->
`;

	return printHTML( html, i );
}

export interface GreetingComponentData {
	greetingName: string;
}

export class GreetingComponent extends AlpineComponent implements GreetingComponentData {

	public greetingName: string = "";

	constructor() {
		super();
		//console.log( "greeting-constructor() was called!" );
	}

	init(): void {
		// AlpineJS will call this method automatically (by name init).
		//console.log( "greeting-init() was called!" );
	}
}

