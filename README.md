# Docus BS Layer

We clone the [Docus Starter](https://github.com/nuxt-themes/docus-docs-starter) and add additional layer stuff that can help us to begin new docs project much faster!

## Init Project

*If you want to extend a private remote source, you need to add the environment variable GIGET_AUTH=<token> to provide a token.*

*Please change the `your-docs-project-name` to your real name*

```bash
git clone git@github.com:Web3Hacker-World/docus-bs-layer.git
take your-docs-project-name
git init
touch nuxt.config.ts package.json
```

## add nuxt.config.ts in your new docs project
```js [nuxt.config.ts]
export default defineNuxtConfig({
  extends: '../docus-bs-layer'
})
```

```json [package.json]
{
  "name": "your-docs-project-name",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "nuxi dev",
    "build": "nuxi build",
    "generate": "nuxi generate",
    "preview": "nuxi preview",
    "lint": "eslint ."
  },
  "devDependencies": {
    "@nuxt-themes/docus": "^1.11.1",
    "@nuxt/eslint-config": "^0.1.1",
    "eslint": "^8.40.0",
    "nuxt": "3.4.3"
  }
}
```

```bash
pnpm install --shamefully-hoist
pnpm dev
```

## Build

```bash
pnpm build
```

## Static Generation

Use the `generate` command to build your application.

The HTML files will be generated in the .output/public directory and ready to be deployed to any static compatible hosting.

```bash
pnpm generate
```

## Preview build

You might want to preview the result of your build locally, to do so, run the following command:

```bash
pnpm preview
```

---

For a detailed explanation of how things work, check out [Docus](https://docus.dev).

## Presets

- [x] [nuxt-gtag](https://github.com/johannschopplich/nuxt-gtag#runtime-config), setup `NUXT_PUBLIC_GTAG_ID` in your `.env`
- [x] unocss
- [x] reactivityTransform enabled
- [x] multiple language in content dir