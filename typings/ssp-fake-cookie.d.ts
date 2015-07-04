// Type definitions for ssp-fake-cookie
// Project: https://github.com/stpettersens/node-fake-cookie
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "ssp-fake-storage" {
	export function cookie(name: string, value?: string, options?: Object): string;
	export function removeCookie(name: string): void;
}
