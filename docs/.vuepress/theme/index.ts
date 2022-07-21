//https://v2.vuepress.vuejs.org/reference/default-theme/extending.html

import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import type { DefaultThemeOptions }  from '@vuepress/theme-default'
import { path }  from '@vuepress/utils'

export const vuePressThemeJeremieL = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-jeremiel',
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/CustomLayout.vue'),
    },
    alias: {
      '@theme/Page.vue': path.resolve(__dirname, './components/CustomPage.vue'), 
    }
  };
};
