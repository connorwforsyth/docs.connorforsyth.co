import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import { gitPlugin } from '@vuepress/plugin-git'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Connor Forsyth',
  description: 'A place to store and share my knowledge.',
  plugins: [
    searchPlugin({
      // options
    }),
    gitPlugin({
        // options
        contributors: false,
        docsRepo: 'https://github.com/connorforsythco/Vuepress2/',
        docsDir: 'docs',
      }),
  ],
    
    
  
    theme: defaultTheme({
     // public file path
     logo: 'img/WEBCLIP.png',
    navbar: [
      {text: 'coffee', link: '/coffee/',},
      {text: 'Experience Design', link: '/Experience Design Resources.md/',}
  ]
  }),

})
