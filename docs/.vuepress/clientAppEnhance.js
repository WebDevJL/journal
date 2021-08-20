import { defineClientAppEnhance } from "@vuepress/client";
import PostsIndex from "./components/PostsIndex.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("PostsIndex", PostsIndex);
});
