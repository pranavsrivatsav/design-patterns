# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

This is a learning repository of standalone TypeScript demos, one per classic Gang-of-Four (or related) design pattern. Each numbered top-level folder (`1-strategy`, `2-observer`, `3-decorator`, `4-factory`, `5-singleton`, `6-command`, `7-1-object-adapter`, `7-2-class-adapter`, `7-3-facade`, `8-template`, ...) is an independent, runnable example — there is no shared runtime code between them, only a shared root `tsconfig.json` and `package.json`.

## Commands

- `npm run dev -- <example-folder>` — runs a single example's `src/index.ts` via `ts-node-dev` (e.g. `npm run dev -- 1-strategy`). The folder name can be given with or without a trailing slash. This is the primary way to "run" any pattern demo — there are no test files or test runner in this repo.
- `npm run typecheck` — runs `tsc --noEmit` across all examples using the root `tsconfig.json` (which globs `*/src/**/*.ts`).

There is no build, lint, or test script — verification is via `typecheck` and manually running an example with `dev` to inspect console output.

## Architecture

- Each example folder has its own `src/` with the same rough internal shape: an `interfaces/` (or `interface/`) directory for the abstractions the pattern revolves around, an `implementations/` directory for concrete classes, and a `src/index.ts` that wires concrete implementations together and exercises them via `console.log` — there is no assertion framework, so correctness is demonstrated by reading the printed output.
- Examples are self-contained: nothing is imported across example folders. When adding a new pattern, create a new numbered folder following the existing `src/interfaces/` + `src/implementations/` + `src/index.ts` convention rather than adding to an existing one.
- [scripts/run-dev.cjs](scripts/run-dev.cjs) is what makes per-folder execution work without per-folder `package.json`/`tsconfig.json` files: it `spawnSync`s `ts-node-dev` with `cwd` set to the target example folder (so relative imports resolve) while explicitly pointing `--project` at the shared root `tsconfig.json`. When adding a new example folder, no changes to this script or the root config are needed as long as the folder has a `src/index.ts` entry point — the root `tsconfig.json`'s `include` glob (`*/src/**/*.ts`) already covers it.
- Each `index.ts` typically has a comment block at the top explaining the pattern's intent and how the example maps onto it (e.g. which class plays which GoF role) — read that comment before the code when working in an unfamiliar example folder.
