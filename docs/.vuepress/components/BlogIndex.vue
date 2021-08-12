<template>
  <div>
    <div class="article" v-for="article in articles">
      <a v-bind:href="article.path">{{ article.title }}</a>
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
export default {
  computed: {
    articles() {
      return this.$site.pages
        .filter((x) => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
        );
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
