<template>
  <div>
    <div class="article" v-for="article in articles">
      <a v-bind:href="article.path"
        ><h2>{{ article.title }}</h2>
        <img
          :src="article.frontmatter.heroImage"
          :alt="article.frontmatter.heroAlt"
          :title="article.frontmatter.heroAlt"
        />
        <p>{{ article.frontmatter.description }}</p>
      </a>
      <div class="keywords">
        <span
          class="keyword"
          v-for="key in article.frontmatter.meta.keywords"
          >{{ key }}</span
        >
      </div>
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
        .filter((x) => !x.frontmatter.isIndexPage)
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
  margin-bottom: 20px;
  border-left: solid 5px #3eaf7c;
  padding: 20px;
}
.keywords {
  margin-top: 10px;
}
.keyword {
  padding: 5px;
  border-radius: 7px;
  font-size: small;
  background: #3eaf7c;
  margin-right: 5px;
  color: white;
  font-weight: 500;
}
</style>
