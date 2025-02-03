
import { printHTML } from "../_printHTML_function.ts";

import { AlpineComponent } from '../../../src-alpine-typescript/index.ts';
import { GreetingComponentData } from "./GreetingComponent.ts";

function ExampleDeeperSubComponent_html( i: number ): string {

	const html = `
<!-- ExampleDeeperSubComponent begin -->
<!-- this is just to show how further sub-components would look like. -->
<!-- ExampleDeeperSubComponent end -->
`;

	return printHTML( html, i );
}

// in this very limited example, HelloComponent has no real functional sub-components.
// but we "simulate" a single ExampleDeeperSubComponent here, and generate html code for it.

export function HelloComponent_html( i: number, greeting: string ): string {

	const html = `
<!-- HelloComponent begin -->
<div x-data="helloComp('${ greeting }',$data)">
  <h2 x-cloak x-show="helloRPD.greetingName.trim() != ''" x-text="helloDisplayWord + ' ' + helloRPD.greetingName + '!'"></h2>
${ ExampleDeeperSubComponent_html( 1 ) }
</div>
<!-- HelloComponent end -->
`;

	return printHTML( html, i );
}

export class HelloComponent extends AlpineComponent {

	public helloDisplayWord: string;
	public helloRPD: GreetingComponentData; // RPD is from "reactive parent data".
	
	// "hello" is a sub-component of "greeting", so in AlpineJS it inherits the parent data-context.
	// => we pass the parent data-context here as the 2nd constructor argument.

	constructor( word: string, parentData: GreetingComponentData ) {
		super();
		this.helloDisplayWord = word;
		this.helloRPD = parentData;
		//console.log( "hello-constructor() was called!" );
	}

	init(): void {
		// AlpineJS will call this method automatically (by name init).
		//console.log( "hello-init() was called!" );
	}
}

