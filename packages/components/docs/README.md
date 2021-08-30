# `@astrojs/docs` - Astro Components Kit

```
npm install @astrojs/docs
```

This package is the component library that powers the Astro `docs` starter kit. This is only a collection of components. 

**If you are looking for an already-themed, batteries-included starter template for your next project, check out the `docs` starter kit via `npm init astro` instead.**

## What is in This Package?

This package contains several common UI components for documentation websites, including an i18n language selector and an Algolia-powered search bar. 

This package also includes a CSS Grid layout for your site, using a left sidebar for page navigation and a right sidebar for section navigation within each page. The design is responsive to work across desktop and mobile.

## How to Use This Package

Because `@astrojs/docs` is a lower-level UI library, you will need to write some code on your end to integrate it. The best way to do that is with a [Page Layout](https://docs.astro.build/core-concepts/layouts) component, like the example below:

```astro
---
// Example: src/layouts/MainLayout.astro
// Create your own layout component for your project, using 
// the provided components from the "@astrojs/docs" package.
// The example below implements the "https://docs.astro.build" layout.
// You can see it in action: "example/docs/src/layouts/MainLayout.astro"

import {PageLayout, Header, PageContent, LeftSidebar, RightSidebar} from '@astrojs/docs';
import * as CONFIG from '../config.ts';

const { content = {} } = Astro.props;
const dir = content.dir || CONFIG.SITE.dir;
const lang = content.lang || CONFIG.SITE.lang;
const currentPage = Astro.request.url.pathname;
const currentFile = `src/pages${currentPage.replace(/\/$/, "")}.md`;
const editUrlWithFile = CONFIG.EDIT_URL && (CONFIG.EDIT_URL + currentFile);
---
<PageLayout lang={lang} dir={dir}>
  <Header slot="header" currentPage={currentPage} lang={lang} languages={CONFIG.KNOWN_LANGUAGES} search={CONFIG.ALGOLIA} />
  <LeftSidebar slot="left" currentPage={currentPage} navigation={CONFIG.SIDEBAR[lang]} />
  <PageContent slot="main" content={content}>
    <slot />
  </PageContent>
  <RightSidebar slot="right" content={content} editUrl={editUrlWithFile} inviteUrl={CONFIG.COMMUNITY_URL} />
</PageLayout>
```

You can customize any section of the page layout by replacing these components with components of your own. Replacing `<LeftSidebar slot="left" ... />` with `<MySidebar slot="left" />`, for example, will place your `<MySidebar />` component in the left sidebar section of the page layout. Many components can share the same slot, if you'd like to add new UI without removing existing.

You can control the document `<head>` using the `slot="head"` slot. By default, no elements are added to the page head for you. We recommend placing all `<head>` elements into one (or more) `src/components/Head.astro` component(s) in your project.

See the `<PageLayout />` documentation below for a list of all supported slots. 
## Components

### All Layout Components

```
import { 
  PageLayout,
  Header,
  LeftSidebar,
  RightSidebar,
  PageContent,
} from '@astrojs/docs';
```


### All Static UI Components

```
import { 
  AstroLogo,
  AvatarList,
  SkipToContent,
} from '@astrojs/docs';
```
### All Dynamic UI Components

```
import { 
  LanguageSelect,
  Search,
  SidebarToggle,
  ThemeToggle,
  TableOfContents,
} from '@astrojs/docs';
```