const { resolve } = require('path')
const implicitFigures = require('markdown-it-implicit-figures')
const slugify = require('./slugify')
const preprocessMarkdown = resolve(__dirname, 'preprocessMarkdown')

module.exports = {
  title: "Blockcore Documentation",
  description: "Blockcore Official Documentation",
  head: [
    // Favicon
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#51b13e" }],
    ["meta", { name: "msapplication-TileColor", content: "#0f3b21" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    // Styles
    ["link", { rel: "stylesheet", href: "/styles/variables.css" }]
  ],
  chainWebpack(config) {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use(preprocessMarkdown)
      .loader(preprocessMarkdown)
      .end()
  },
  plugins: [
    ['vuepress-plugin-clean-urls', {
      normalSuffix: '/',
      indexSuffix: '/',
      notFoundPath: '/404.html',
    }],
    ['vuepress-plugin-code-copy', {
      color: '#8F979E',
      backgroundTransition: false,
      staticIcon: true
    }],
    ['vuepress-plugin-medium-zoom', {
    }]
  ],
  markdown: {
    extendMarkdown(md) {
      md.use(implicitFigures)
    },
    slugify
  },
  themeConfig: {
    logo: "/img/blockcore.svg",
    displayAllHeaders: false,
    repo: "block-core/documentation",
    docsDir: "docs",
    editLinks: true,
    sidebarDepth: 0,
    algolia: {
      indexName: 'blockcore',
      apiKey: '6a3a4c4380385cb5c9f9070247fdfca6',
      // See https://www.algolia.com/doc/api-reference/api-parameters/
      algoliaOptions: {
        hitsPerPage: 25
      },
      // See https://community.algolia.com/docsearch/behavior.html#autocompleteoptions
      autocompleteOptions: {
        openOnFocus: true
      }
    },
    nav: [
      {
        text: "Website",
        link: "https://www.blockcore.net/"
      },
      {
        text: "Chat",
        link: "https://discord.gg/xa5BxWr"
      },
      {
        text: "GitHub",
        link: "https://github.com/block-core/",
        rel: "noopener noreferrer github"
      }
    ],
    sidebar: [
      ["/", "Introduction"],
      {
        title: "Platform",
        collapsable: false,
        children: [
          ["/Overview", "Overview"],
          ["/UseCases", "Use Cases"],
          ["/ReferenceNodes", "Reference Nodes"],
          ["/Walkthrough", "Walkthrough"]
        ]
      },
      {
        title: "Node",
        collapsable: false,
        children: [
          {
            title: "Features",
            path: "/Features",
            collapsable: true,
            children: [
              ["/FeaturesAirdrop", "Airdrop"],
              ["/FeaturesBlockstore", "Blockstore"],
              ["/FeaturesBlockExplorer", "Block Explorer (local)"],
              ["/FeaturesColdStaking", "Cold Staking"],
              ["/FeaturesConsensus", "Consensus"],
              ["/FeaturesDiagnostics", "Diagnostics"],
              ["/FeaturesDns", "DNS"],
              ["/FeaturesMemoryPool", "Memory Pool"],
              ["/FeaturesMiner", "Miner"],
              ["/FeaturesNodeHost", "NodeHost"],
              ["/FeaturesNotifications", "Notifications"],
              ["/FeaturesPoA", "PoA"],
              ["/FeaturesRPC", "RPC"],
              ["/FeaturesStorage", "Storage"],
              ["/FeaturesWallet", "Wallet"],
              ["/FeaturesWalletWatchOnly", "Wallet (watch only)"],
              ["/FeaturesWalletNotify", "Wallet Notify"]
            ]
          },
          {
            title: "API",
            path: "/NodeApi",
            collapsable: true,
            children: [
              {
                title: "Authentication",
                path: "/NodeApiAuthentication"
              },
              {
                title: "Authorization",
                path: "/NodeApiAuthorization"
              }
            ]
          },
          {
            title: "P2P",
            path: "/PeerToPeer",
            collapsable: true,
            children: [
              {
                title: "Payloads",
                path: "/Payloads"
              }
            ]
          }
        ]
      },
      {
        title: "Support and Community",
        collapsable: false,
        children: [
          {
            title: "FAQ and common issues",
            path: "/FAQ",
            children: [
              ["/FAQ/FAQ-General", "General FAQ"],
              ["/FAQ/FAQ-Deployment", "Deployment FAQ"],
              ["/FAQ/FAQ-Synchronization", "Synchronization FAQ"],
              ["/FAQ/FAQ-Integrations", "Integrations FAQ"],
              ["/FAQ/FAQ-Wallet", "Wallet FAQ"]
            ]
          },
          ["/Support", "Support"],
          ["/Contribute", "Contribute"],
          ["/Community", "Community"]
        ]
      },
      {
        title: "Development",
        collapsable: false,
        children: [
          ["/Development", "Development"],
          ["/SecurityIssues", "Security Issues"],
          ["/SigningCommits", "Signing Commits"],
          ["/Architecture", "Architecture"],
          ["https://btc.indexer.blockcore.net/docs/index.html", "Blockcore Indexer API", { type: 'external' }]
        ]
      }
    ]
  }
}
