
/**
 * Type declarations for Alpine and browser window global.
 */

// @ts-types="my_alpinejs_types_import_symbol"
import Alpine from "my_alpinejs_import_symbol";

import type { ComponentStore } from './Store.ts';
import type { AlpineComponentConstructor } from './Component.ts';

/**
 * The original Alpine type.
 *
 * @public
 */
export declare type AlpineType = typeof Alpine;

/**
 * Define the properties we add to the `window.Alpine` object.
 *
 * @public
 */
export declare interface AlpineComponentMixins {
	Components: ComponentStore;
	component: (name: string) => AlpineComponentConstructor;
}

/**
 * Expose the properties we add to the `window.Alpine` object.
 *
 * @public
 */
export declare type AlpineWithComponents = (typeof Alpine) & AlpineComponentMixins;

/**
 * Check if an {@link Alpine} object has the components properties.
 *
 * @public
 *
 * @param obj The Alpine object to check
 *
 * @return True if component properties are injected, false otherwise.
 */
export function satisfiesAlpineWithComponents(obj: AlpineType | AlpineWithComponents): boolean {
	// @ts-ignore
	return !!(obj.Components && obj.component);
}

declare global {

	/**
	 * Expose window.Alpine and window.AlpineComponents globals.
	 *
	 * @public
	 */
	interface Window {
		Alpine: AlpineType | AlpineWithComponents;
		AlpineComponents: ComponentStore;
	}
}

