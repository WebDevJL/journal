<template>
  <div>
    <div class="article" v-for="article in articles">
      <a v-bind:href="article.path"
        ><h2>{{ article.title }}</h2>
        <div v-if="article.frontmatter.heroImage" class="image-cropped-wrapper">
          <img
            :src="article.frontmatter.heroImage"
            :alt="article.frontmatter.heroAlt"
            :title="article.frontmatter.heroAlt"
          />
        </div>
        <p>{{ article.frontmatter.description }}</p>
      </a>
      <div v-if="article.frontmatter.meta !== undefined" class="keywords">
        <span
          class="keyword"
          v-for="key in article.frontmatter.meta.keywords"
          >{{ key }}</span
        >
      </div>
      <hr />
    </div>
  </div>
</template>
<script>
import pages from "@temp/pages.js";
import { getIndexStartWith } from "../helpers/MarkdownFilesIndexBuilder.js";

export default {
  props: {
    startPath: {
      type: String,
      required: true,
    },
  },
  computed: {
    articles() {
      // console.log("all pages", pages);
      const filteredPages = getIndexStartWith(this.startPath, pages)
        .filter((x) => !x.frontmatter.isIndexPage || x.frontmatter.isDraft)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
        );
      // console.log("Filtered:", filteredPages);
      return filteredPages;
    },
  },
};
</script>
<style scoped>
.article {
  padding: 0 0 2em;
}
.keywords {
  margin-top: 10px;
}
.keyword {
  padding: 5px;
  border-radius: 7px;
  font-size: small;
  background: var(--c-brand);
  margin-right: 5px;
  color: white;
  font-weight: 500;
}
</style>
