import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import { gitPlugin } from '@vuepress/plugin-git'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Connor Forsyth',
  description: 'A place to share knowledge.',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "favicon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "favicon.png"}],
    ['link', { rel: "manifest", href: "/"}],
    ['link', { rel: "mask-icon", href: "favicon.png", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "favicon.png"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "favicon.png"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],

  plugins: [
    searchPlugin({
      // options
    }),
    gitPlugin({
        // options
      }),
    googleAnalyticsPlugin({
      // options
      id: 'G-58L8XFVVZ8',
    }),
  ],
    
    
  
    theme: defaultTheme({
     // public file path
     logo: 'webclip.png',
     contributors: false,
     docsRepo: 'https://github.com/connorwforsyth/docs.connorforsyth.co',
     docsDir: 'docs',
     docsBranch: 'master',
     editLinkText: 'Edit this page',
    navbar: [
      {text: 'Coffee', link: 'https://docs.coffee',},
      {text: 'Portfolio', link: 'https://connorforsytgh.co',},
  ],
  }),

})
