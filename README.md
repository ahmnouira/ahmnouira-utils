# @ahmnouira/utils

A collection of small, **dependency-free** TypeScript utilities for everyday tasks — arrays, dates, delays, forms, logging, strings and URLs.

Powering a better DX with typed, tree-shakeable helpers. Zero runtime dependencies, fully typed.

## Features

- ⚡ Zero runtime dependencies
- 🧩 Tree-shakeable ESM-only build (via `sideEffects: false`)
- 📦 Fully typed with bundled TypeScript declarations
- 🧪 Robust test suite (Vitest)

## Installation

```bash
npm install @ahmnouira/utils
```

Requires Node.js `>= 18`.

## Usage

```ts
import { capitalize, formatUrl, wait } from "@ahmnouira/utils";

capitalize("hello"); // "Hello"
formatUrl("My Cool Page"); // "my-cool-page"
await wait(500); // pauses for 500ms
```

You can also import individual modules to keep bundles minimal:

```ts
import { uniqueArray } from "@ahmnouira/utils/array";
```

> Note: subpath imports resolve through the package `exports` map.

## API Reference

### Array

| Function | Description | Example |
| --- | --- | --- |
| `isArray<T>(array?: T[])` | Returns `true` when the value is a **non-empty** array. | `isArray([1]) // true` · `isArray([]) // false` |
| `uniqueArray<T>(array: T[])` | Removes duplicates (by `Set` semantics), preserving order. | `uniqueArray([1, 1, 2]) // [1, 2]` |

### Config

| Constant | Description |
| --- | --- |
| `PROD` | `true` when `NODE_ENV === "production"` (evaluated at import). |
| `DEV` | `true` when `NODE_ENV === "development"` (evaluated at import). |

| Function | Description | Example |
| --- | --- | --- |
| `env()` | Returns `NODE_ENV`, defaulting to `"development"`. | `env() // "production"` |

### Date

| Function | Description | Example |
| --- | --- | --- |
| `formatDate(date?: string)` | Formats as `DD Mon YYYY` (en-GB). Returns `""` when falsy. | `formatDate("2024-06-15") // "15 Jun 2024"` |
| `formatDay(date?: string)` | Formats as `DD/MM/YYYY` with zero-padded months. Returns `""` when falsy. | `formatDay("2024-06-15") // "15/06/2024"` |

### Delay

| Function | Description | Example |
| --- | --- | --- |
| `wait(timeout = 1000)` | Returns a promise resolving after `timeout` ms. | `await wait(2000)` |
| `wait2s()` | Shorthand for `wait(2000)`. | `await wait2s()` |

### Form

| Function | Description | Example |
| --- | --- | --- |
| `fieldError(name, errors)` | Reads `errors[name].message`, or `null` when missing. Works with `react-hook-form`, `react-final-form`, etc. | `fieldError("email", errors) // "Email is required"` |
| `calculatePasswordStrength(pwd)` | Scores a password: `{ strength, score }` where `score` is 25, 50, 75 or 100. | `calculatePasswordStrength("Abcd1234!") // { strength: "strong", score: 75 }` |

`PasswordStrength` type is exported: `"weak" \| "medium" \| "strong" \| "very strong"`.

### Log

Development-only console logging (no-ops when `NODE_ENV !== "development"`).

| Function | Alias | Console method |
| --- | --- | --- |
| `log(...data)` | `l` | `console.log` |
| `logError(...data)` | `e` | `console.error` |
| `warn(...data)` | `w` | `console.warn` |
| `info(...data)` | `i` | `console.info` |

```ts
import { log } from "@ahmnouira/utils";
log("rendered in", 42, "ms"); // only logs in development
```

### String

| Function | Description | Example |
| --- | --- | --- |
| `capitalize(text?: string)` | Uppercases the first character. Returns `""` when falsy. | `capitalize("hello") // "Hello"` |
| `extractColors(gradient: string)` | Extracts unique 3/6-digit hex colors from a string. | `extractColors("linear-gradient(#ff0000, #00ff00, #ff0000)") // ["#ff0000", "#00ff00"]` |

### URL

| Function | Description | Example |
| --- | --- | --- |
| `formatUrl(url: string)` | Lowercases and replaces whitespace with `-` (slug). | `formatUrl("My Cool Page") // "my-cool-page"` |
| `formatUrlEncoded(url: string)` | `formatUrl` + `encodeURIComponent`. | `formatUrlEncoded("Café & More") // "caf%C3%A9-%26-more"` |

## Development

```bash
npm install       # install dev dependencies
npm run build     # compile TypeScript to dist/
npm test          # run the test suite
npm run test:watch
npm run typecheck # type-check src/
npm run changelog # regenerate CHANGELOG.md
```

## License

[MIT](./LICENSE)