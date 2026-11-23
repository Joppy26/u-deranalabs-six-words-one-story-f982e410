// Six Words, One Story
// make.fun competition: u-deranalabs-six-words-one-story-f982e410
// https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410
//
// Writes the fixed six-word story to entry.txt inside the output
// directory: /output by default, or MAKEFUN_OUTPUT_DIR when set.
// Node 22, standard library only. No network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "He never came home. She bloomed.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
