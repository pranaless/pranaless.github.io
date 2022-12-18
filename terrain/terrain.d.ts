/* tslint:disable */
/* eslint-disable */
/**
*/
export class Map {
  free(): void;
/**
* @param {number} size_x
* @param {number} size_y
* @param {number} min_z
* @param {number} max_z
* @param {number} roughness
*/
  constructor(size_x: number, size_y: number, min_z: number, max_z: number, roughness: number);
/**
* @param {bigint | undefined} seed
*/
  generate_seeded(seed?: bigint): void;
/**
* @param {HTMLTableElement} table
*/
  to_html_table(table: HTMLTableElement): void;
/**
* @returns {string}
*/
  to_table(): string;
/**
* @returns {string}
*/
  to_data_uri(): string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_map_free: (a: number) => void;
  readonly map_new: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly map_generate_seeded: (a: number, b: number, c: number) => void;
  readonly map_to_html_table: (a: number, b: number) => void;
  readonly map_to_table: (a: number, b: number) => void;
  readonly map_to_data_uri: (a: number, b: number) => void;
  readonly main: (a: number, b: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
