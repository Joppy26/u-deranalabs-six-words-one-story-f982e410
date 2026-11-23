import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — entry for make.fun competition
// u-deranalabs-six-words-one-story-f982e410
// A whole life in six words: a letter arrives from someone already gone.
// The twist is the timing — the reader fills in what the letter said.
const STORY = "The letter arrived. He'd died yesterday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
