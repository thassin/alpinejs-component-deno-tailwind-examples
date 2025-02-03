
// @ts-types="my_alpinejs_types_import_symbol"
import Alpine from "my_alpinejs_import_symbol";

import {
	Globals,
	ComponentList,
	ComponentStore
} from '../../src-alpine-typescript/index.ts';

import { GreetingComponent } from './component/GreetingComponent.ts';
import { HelloComponent } from './component/HelloComponent.ts';

// The default equality operator in JavaScript for Objects yields true when they refer to the same location in memory.
console.log( Alpine === window.Alpine );

// TODO is this always set already?
window.Alpine = Alpine;

const components: ComponentList = {
	greetComp: GreetingComponent,
	helloComp: HelloComponent
};

const logErrors = true;

console.log( "test-1 :: " + Globals.satisfiesAlpineWithComponents( Alpine ) );

window.AlpineComponents = new ComponentStore( Alpine, components, logErrors );

console.log( "test-2 :: " + Globals.satisfiesAlpineWithComponents( Alpine ) );

console.log( "now calling Alpine.start()" );
Alpine.start();

