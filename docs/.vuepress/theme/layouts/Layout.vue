<template>
  <Layout>
    <template #page-bottom>
      <footer />
    </template>
  </Layout>
</template>

<script>
import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Layout,
    Footer,
  },
};
</script>

<style lang="css"></style>
