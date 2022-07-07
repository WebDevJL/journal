import { defineClientConfig } from '@vuepress/client';
import PostsIndex from './components/PostsIndex.vue';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('PostsIndex', PostsIndex);
  },
  setup() {},
  rootComponents: [],
});
