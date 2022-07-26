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
<template>
  <ParentPage>
    <!-- See https://vuejs.org/guide/components/slots.html#named-slots -->
    <template #top>
      <div class="theme-default-content">
        <h1>{{ pageH1 }}</h1>
      </div>
    </template>
  </ParentPage>
</template>
