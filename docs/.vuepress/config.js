import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import { gitPlugin } from '@vuepress/plugin-git'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Coffee',
  description: 'A place to store and share   knowledge.',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "logo.svg"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "logo.svg"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "logo.svg"}],
    ['link', { rel: "manifest", href: "/"}],
    ['link', { rel: "mask-icon", href: "logo.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "logo.svg"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "logo.svg"}],
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
      id: 'G-H8F3Z0RC9P',
    }),
    registerComponentsPlugin({
      // options
    }),
  ],
    
    
  
    theme: defaultTheme({
     // public file path
     logo: 'logo.svg',
     contributors: false,
     docsRepo: 'https://github.com/connorforsythco/docs.coffee',
     docsDir: 'docs',
     docsBranch: 'master',
     editLinkText: 'Edit this page',
    navbar: [
      {text: 'Feedback', link: 'https://connorforsyth.co',},
      {text: 'Contribute', link: '/join.md/',},
      {text: 'Slack', link: 'https://join.slack.com/t/docscoffee/shared_invite/zt-1fv02kk3k-uvj2hog7a9qEUDg91PtMOQ',}
  ],
  }),

})
