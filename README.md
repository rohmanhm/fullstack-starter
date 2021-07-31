# Adol

Online marketplace for a local food business.

## Roadmap

- [MVP](https://github.com/rohmanhm/adol/projects/1)

## How to run

1. Install the dependencies.

```bash
yarn install
```

2. Run the app

```bash
yarn dev
```

### Build

```bash
yarn build
```

### Build with Bundle Analyzer

```bash
yarn build-analyze
```

### Notes

- nexus.tsconfig.json

This file is used as a workaround for https://github.com/graphql-nexus/schema/issues/391
It allows the nexus schema generation to work (done via `npm run generate:nexus`).
