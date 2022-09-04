import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import { gitPlugin } from '@vuepress/plugin-git'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Coffee Dictionary',
  description: 'Just playing around',
  plugins: [
    searchPlugin({
      // options
    }),
    gitPlugin({
        // options
      }),
  ],
    docsRepo: 'https://github.com/connorforsythco/connorforsythco`',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: true,
    footerHtml: true,
  
    theme: defaultTheme({
     // public file path
     logo: 'img/WEBCLIP.png',
    navbar: [
      {text: 'coffee', link: '/coffee/',}
  ]
  }),

})
