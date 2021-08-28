---
layout: ~/layouts/MainLayout.astro
title: Built-In Components
---

Astro includes several builtin components for you to use in your projects. All builtin components are available via `import {} from 'astro/components';`.

## `<Markdown />`

```astro
---
import { Markdown } from 'astro/components';
---
<Markdown>
  # Markdown syntax is now supported! **Yay!**
</Markdown>
```

See our [Markdown Guide](/guides/markdown-content) for more info.

<!-- TODO: We should move some of the specific component info here. -->

## `<Code />`

```astro
---
import { Code } from 'astro/components';
---
<!-- Syntax highlight some JavaScript code. -->
<Code code={`const foo = 'bar';`} lang="js" />
<!-- Optional: customize your theme. -->
<Code code={`const foo = 'bar';`} lang="js" theme="dark-plus" />
```

This component provides syntax highlighting for code blocks at build time (no client-side JavaScript included). The component is powered internally by shiki and it supports all popular [themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md) and [languages](https://github.com/shikijs/shiki/blob/main/docs/languages.md).

You can also use the `<Prism />` component for syntax highlighting powered by the [Prism](https://prismjs.com/) syntax highlighting library. However, this component is deprecated and will be removed in our v1.0 release.

## `<Debug />`

```astro
---
import { Debug } from 'astro/debug';
const serverObject = {
  a: 0,
  b: "string",
  c: {
    nested: "object"
  }
}
---
<Debug {serverObject} />
```

This component provides a way to inspect values on the clientside, without any JavaScript.
