import {  defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { searchPlugin } from '@vuepress/plugin-search'
import { pwaPlugin } from '@vuepress/plugin-pwa'

export default {
  plugins: [
      googleAnalyticsPlugin({
        id: 'G-58L8XFVVZ8',
      }),
      searchPlugin({
        // options
      }),
    pwaPlugin({
      // options
    }),
  ],

  title: 'Connor Forsyth',
  description: 'A place to share knowledge.',
  head: [
      ['link', {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "favicon.png"
      }],
      ['link', {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "favicon.png"
      }],
      ['link', {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "favicon.png"
      }],
      ['link', {
        rel: "manifest",
        href: "/"
      }],
      ['link', {
        rel: "mask-icon",
        href: "favicon.png",
        color: "#3a0839"
      }],
      ['link', {
        rel: "shortcut icon",
        href: "favicon.png"
      }],
      ['meta', {
        name: "msapplication-TileColor",
        content: "#3a0839"
      }],
      ['meta', {
        name: "msapplication-config",
        content: "favicon.png"
      }],
      ['meta', {
        name: "theme-color",
        content: "#ffffff"
      }],
  ],

  theme: defaultTheme({
    // public file path
    logo: 'webclip.png',
    contributors: false,
    docsRepo: 'https://github.com/connorwforsyth/docs.connorforsyth.co',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinkText: 'Edit this page',
    navbar: [{
        text: 'Portfolio',
        link: 'https://connorforsyth.co',
      },
    ],
    sidebar: {
      '/knowledge/': [{
        title: 'Latin Dance',
        collapsable: false,
        children: [
          '/Knowledge/latin-dance/cuban-salsa/rueda-de-casino'
        ],
      },
      {
        title:'Design Thinkng',
        
      }]
    }
  }),

}