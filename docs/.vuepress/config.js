import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import { gitPlugin } from '@vuepress/plugin-git'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Compendium',
  description: 'A place to store and share my knowledge.',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/img/favicon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/img/favicon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/img/favicon.png"}],
    ['link', { rel: "manifest", href: "/img/favicon.png"}],
    ['link', { rel: "mask-icon", href: "/img/favicon.png", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/img/favicon.png"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "/img/favicon.png"}],
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
     logo: 'img/WEBCLIP.png',
     contributors: false,
     docsRepo: 'https://github.com/connorforsythco/Vuepress2',
     docsDir: 'docs',
     docsBranch: 'master',
     editLinkText: 'Edit this page',
    navbar: [
      {text: 'coffee', link: '/coffee/',},
      {text: 'Experience Design', link: '/Experience Design Resources.md/',}
  ],
  sidebar: {
    '/knowledge/': [
      {
        text: 'Knowledge',
        children: ['/knowledge/README.md', '/knowledge/coffee.md'],
      },
      {
        text: 'Knowledge',
        children: ['/knowledge/README.md', '/knowledge/coffee.md'],
      },
    ],
    '/reference/': 
      {
        text: 'Reference',
        children: ['/reference/cli.md', '/reference/config.md'],
      },
  },
  }),

})
