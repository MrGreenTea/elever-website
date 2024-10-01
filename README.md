# Elever Website

## Technologies

- Astro
- svelte
- tailwind

## Things to know

### Pages folder structure

Why is the folder structure for the two locales (de & en) like this?

```
pages
└── index.astro
└── de
  └── index.astro
└── en
  └── index.astro
```

Both `en/index.astro` and `de/index.astro` import the "main" `index.astro` file and provide it with the localized content from `contents/[locale]/home.ts`.
We could do it with some dynamic routing (`[locale]` folder) and import with the `Astro.currentLocale` variable. But dynamic imports can quickly cause issues and don't allow good static analysis.
We also would have to duplicate the locals anyways in a `getStaticPaths` function for example.

### The contents folder

The folder can not be named `content` because that is reserved by `astro` for [Content Collections](https://docs.astro.build/en/guides/content-collections/)
