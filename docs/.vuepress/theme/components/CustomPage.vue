<template>
  <ParentPage>
    <!-- See https://vuejs.org/guide/components/slots.html#named-slots -->
    <template #top>
      <h1>{{ pageH1 }}</h1>
    </template>
  </ParentPage>
</template>

<script setup lang="ts">
import ParentPage from '@vuepress/theme-default/lib/client/components/Page.vue';
import { usePageFrontmatter } from '@vuepress/client';
import { computed } from 'vue';
import type { DefaultThemeNormalPageFrontmatter } from '@vuepress/theme-default/lib/shared';

const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();

const pageH1 = computed(() => {
  return frontmatter.value.title;
});
</script>
