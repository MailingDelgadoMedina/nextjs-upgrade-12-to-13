# Upgrading Next 12 to 13

## Step 1: 
Create a folder named `app` in the root of your project.

## Step 2:
Add the following to the `next.config.js`:


/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  ```
  experimental:{
    appDir:true,
  }
```
}
 
 ## Step 3:

 Stop the server by `Ctrl + C` and run `npm run dev` 

 and automatically the on the tailwind.config.js file it will be added the following:

 
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    ```
    './app/**/*.{js,ts,jsx,tsx}',
    ```
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


- If is not added automatically, add the following to the tailwind.config.js add it manually:

 ` './app/**/*.{js,ts,jsx,tsx}',

## Step 4:
Create a file named `page.tsx` in the `app` folder.

## Step 5:
Delete from the `pages` folder the `index.tsx` file.
And automatically will create a new file named `layout.tsx` in the `app` folder.

## Step 6:
From `_app.tsx` located on the `pages` folder  copy the following line:

```
import '../styles/globals.css'
```

Then paste it on the top of the `layout.tsx` file.

## Step 7:
To make a component be shared through all the pages, import the component to the `layout.tsx` file. For example: a navbar.

(Heads up when fetching data from an api make sure to create a file in the root of the project and name it `typings.d.ts` and define the type of the data that you are fetching from the api. For example: `export type Post = { id: number; title: string; body: string; };`)




----------------------------------------------

## Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.2)](https://tailwindcss.com/blog/tailwindcss-v3-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
