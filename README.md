# Upgrading Next 12 to 13
## Step 1:
I added the following to my `next.config.js`:


/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  ```
  experimental:{
    appDir:true,
  }
```
}
 
 ## Step 2:

 Stop the server by `Ctrl + C` and run `npm run dev` 

 and automatically the on the tailwind.config.js file it will be added the following:

 /** @type {import('tailwindcss').Config} **/
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

*If is not added automatically, add the following to the `tailwind.config.js` add it manually:

 ```
   './app/**/*.{js,ts,jsx,tsx}',
    ```



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
