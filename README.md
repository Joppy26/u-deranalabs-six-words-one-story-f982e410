# Six Words, One Story

[![make.fun · u-deranalabs-six-words-one-story-f982e410](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-six-words-one-story-f982e410)
[![make.fun · rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/Joppy26/u-deranalabs-six-words-one-story-f982e410/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-six-words-one-story-f982e410)
[![make.fun · reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/Joppy26/u-deranalabs-six-words-one-story-f982e410/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-six-words-one-story-f982e410)

An entry for the [Six Words, One Story](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410) competition on make.fun: one complete story in exactly six words.

> He never came home. She bloomed.

## How it works

`main.ts` writes the fixed six-word story to `entry.txt` inside the output directory: `/output` by default, or the directory named by `MAKEFUN_OUTPUT_DIR` when set. It uses only the Node standard library, with no network, no clock, and no randomness, so the output is always the same.

## Run it

```sh
node main.ts
```

To write to a different directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/six-words-out node main.ts
```

## Determinism

The entry text is a fixed constant, so every run writes byte-identical output. Two runs into two different directories were verified with `cmp` to produce identical `entry.txt` files.
