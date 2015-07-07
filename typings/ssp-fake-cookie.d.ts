// Type definitions for ssp-fake-cookie
// Project: https://github.com/stpettersens/node-fake-cookie
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "ssp-fake-storage" {
	export function cookie(name: string, value?: any, options?: Object): string;
	export function removeCookie(name: string): void;
	export function clearCookies(): void;
	export function getCookies(): string[];
}
