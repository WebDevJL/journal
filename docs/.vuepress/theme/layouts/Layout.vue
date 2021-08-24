<template>
  <Layout>
    <template #page-bottom>
      <custom-footer />
    </template>
  </Layout>
</template>

<script>
import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import CustomFooter from "./CustomFooter.vue";
export default {
  components: {
    Layout,
    CustomFooter,
  },
};
</script>

<style lang="css">
:root {
  --c-palette-0: #272625;
  --c-palette-1: #490a3d;
  --c-palette-2: #bd1550;
  --c-palette-3: #e97f02;
  --c-palette-4: #f8ca00;
  --c-palette-5: #fffff3;
  --c-brand: var(--c-palette-1);
  --c-brand-light: #eb3575;
  --c-bg: var(--c-palette-5);
  --c-bg-dark: var(--c-palette-0);
  --c-bg-light: #f3f4f5;
  --c-bg-lighter: #eeeeee;
  --c-bg-navbar: var(--c-bg);
  --c-bg-sidebar: var(--c-bg);
  --c-bg-arrow: #cccccc;
  --c-text: var(--c-palette-0);
  --c-text-accent: var(--c-brand);
  --c-text-hover: var(--c-palette-4);
  --c-text-focus: var(--c-palette-1);
  --c-text: #272625;
  --c-text-light: #31302f;
  --c-text-lighter: #413f3d;
  --c-text-lightest: #53514e;
  --c-text-quote: #999999;
  --c-border: #eaecef;
  --c-border-dark: #dfe2e5;
  --c-tip: #490a3d;
  --c-tip-bg: var(--c-bg-light);
  --c-tip-title: var(--c-text);
  --c-tip-text: var(--c-text);
  --c-tip-text-accent: var(--c-text-accent);
  --c-warning: #e7c000;
  --c-warning-bg: #fffae3;
  --c-warning-title: #ad9000;
  --c-warning-text: #746000;
  --c-warning-text-accent: var(--c-text);
  --c-danger: #cc0000;
  --c-danger-bg: #ffe0e0;
  --c-danger-title: #990000;
  --c-danger-text: #660000;
  --c-danger-text-accent: var(--c-text);
  --c-details-bg: #eeeeee;
  --c-badge-tip: var(--c-tip);
  --c-badge-warning: var(--c-warning);
  --c-badge-danger: var(--c-danger);
  --t-color: 0.3s ease;
  --t-transform: 0.3s ease;
  --code-bg-color: #282c34;
  --code-hl-bg-color: rgba(0, 0, 0, 0.66);
  --code-ln-color: #9e9e9e;
  --code-ln-wrapper-width: 3.5rem;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  --font-family-code: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  --navbar-height: 3.6rem;
  --navbar-padding-v: 0.7rem;
  --navbar-padding-h: 1.5rem;
  --sidebar-width: 20rem;
  --sidebar-width-mobile: calc(var(--sidebar-width) * 0.82);
  --content-width: 46.25em;
  --homepage-width: 60em;
  /* font-size */
  --text-size: 1.1rem;
  --h1: calc(var(--text-size) * 1.8);
  --h2: calc(var(--text-size) * 1.5);
  --h3: calc(var(--text-size) * 1.3);
  --h4: calc(var(--text-size) * 1.15);
  --h5: calc(var(--text-size) * 1.05);
  /*hover and focus*/
  --scale-start: 1;
  --scale-end: 1.05;
  --scale-time: 150ms;
  --interact-pd: 0em;
  --interact-bd-rad: 0.25em;
}

html.dark {
  --c-brand: var(--c-palette-3);
  --c-brand-light: #eb3575;
  --c-bg: var(--c-palette-0);
  --c-bg-dark: var(--c-palette-4);
  --c-bg-light: var(--c-palette-1);
  --c-bg-lighter: #262c34;
  --c-text: #c8d3da;
  --c-text-hover: var(--c-palette-0);
  --c-text-focus: var(--c-palette-5);
  --c-text-light: #e1eef6;
  --c-text-lighter: #e1eef6;
  --c-text-lightest: #e1eef6;
  --c-border: #3e4c5a;
  --c-border-dark: #34404c;
  --c-tip: #eb3575;
  --c-warning: #f8ca00;
  --c-warning-bg: #7e755b;
  --c-warning-title: #f8ca00;
  --c-warning-text: #362e00;
  --c-danger: #940000;
  --c-danger-bg: #806161;
  --c-danger-title: #610000;
  --c-danger-text: #3a0000;
  --c-details-bg: #323843;
  --code-hl-bg-color: #363b46;
}

/* Typo*/
h1 {
  font-size: var(--h1);
  text-align: center;
}
h2 {
  font-size: var(--h2);
}
h3 {
  font-size: var(--h3);
}
h4 {
  font-size: var(--h4);
}
h5 {
  font-size: var(--h5);
}
hr {
  margin: 2em auto;
  width: 10em;
}
a,
button {
  transform: scale(var(--scale-start));
  transition: transform var(--scale-time);
  display: inline-block;
}
a:hover,
a:focus {
  border-radius: 0 var(--interact-bd-rad) 0 var(--interact-bd-rad);
}
.dropdown-wrapper .nav-dropdown .dropdown-item a:hover,
a:hover .site-name,
a:hover {
  color: var(--c-text-hover);
  background-color: var(--c-bg-dark);
  transform: scale(var(--scale-end));
}
.dropdown-wrapper .nav-dropdown .dropdown-item a:focus,
a:focus .site-name,
a:focus {
  border: 2px dashed var(--c-text-focus);
  transform: scale(var(--scale-end));
}

/* Layout */
.article img {
  width: 100%;
}
.image-cropped-wrapper {
  height: 5em;
  overflow: hidden;
}
@media (min-width: 36em) {
  .image-cropped-wrapper {
    height: 12em;
  }
}
</style>
