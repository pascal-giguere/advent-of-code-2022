# Advent of Code 2022

TypeScript solutions for the Advent of Code 2022 puzzles.

https://adventofcode.com/2022/

Solutions favor readability and maintainability over performance.

## How to run

The main way to interact with puzzle solutions is through Jest tests.

**Prerequisites:**

1. Install Node 18 or later
2. Enable Node's Corepack feature: `corepack enable`
3. Install dependencies: `yarn install`

**Run tests for all puzzles:**

```bash
yarn test
```

**Run tests for a specific puzzle:**

```bash
yarn test -t q1
```

## Tech stack

- Language: TypeScript 4.9
- Environment: Node 18
- Package manager: Yarn 3 (with PnP)
- Testing framework: Jest
- Linting and formatting: ESLint and Prettier
