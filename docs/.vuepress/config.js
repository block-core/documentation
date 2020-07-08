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
          ["/UseCase", "Use Case (!)"],
          ["/Walkthrough", "Walkthrough (!)"],
          ["/BTCPayVsOthers", "BTCPay Server vs. Others (!)"],
          ["/TryItOut", "Try it out (!)"]
        ]
      },
      {
        title: "Node",
        collapsable: false,
        children: [
          {
            title: "Features",
            path: "/Features",
            collapsable: false,
            children: [
              ["/FeaturesBlockstore", "Blockstore"],
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
              ["/FeaturesWallet", "Wallet"],
              ["/FeaturesWalletWatchOnly", "Wallet (watch only)"],
              ["/FeaturesWalletNotify", "Wallet Notify"],
              ["/FeaturesBlockExplorer", "Block Explorer (local)"],
              ["/FeaturesAirdrop", "Airdrop"]
            ]
          },
          ["/Wallet", "Wallet (!)"],
          ["/Invoices", "Invoices (!)"]
        ]
      },
      {
        title: "Deployment",
        collapsable: false,
        children: [
          ["/Deployment", "Choosing a Deployment Method (!)"],
          ["/ThirdPartyHosting", "Third-party Hosting (!)"],
          {
            title: "Docker (!)",
            path: "/Docker/",
            collapsable: false,
            children: [
              // TODO: Add Configurator
              {
                title: "Web Deployment (!)",
                path: "/LunaNodeWebDeployment"
              },
              {
                title: "Azure Deployment (!)",
                path: "/AzureDeployment",
                children: [
                  ["/AzurePennyPinching", "Reducing Cost on Azure (!)"],
                  ["/ChangeDomain", "Changing domain (!)"]
                ]
              },
              {
                title: "Google Cloud Deployment (!)",
                path: "/GoogleCloudDeployment"
              },
              {
                title: "Hardware Deployment (!)",
                path: "/HardwareDeployment",
                children: [
                  {
                    title: "Advanced Deployment (!)",
                    collapsable: false,
                    children: [
                      ["/DynamicDNS", "Dynamic DNS (!)"],
                      ["/ReverseSSHtunnel", "Reverse SSH Tunnel (!)"]
                    ]
                  },
                  {
                    title: "Hardware As A Service (!)",
                    path: "/HardwareAsAService"
                  }
                ]
              },
              {
                title: "Raspberry Pi Deployment (!)",
                path: "/RaspberryPiDeployment",
                children: [
                  "/RPi3",
                  "/RPi4"
                ]
              },
              {
                title: "Docker Plugins (!)",
                children: [
                  // {
                  //   title: "Transmuter",
                  //   path: "/Transmuter/",
                  //   children: [                      
                  //     ["/Transmuter/DCA", "Dollar Cost Average Preset"],
                  //     ["/Transmuter/EmailReceiptsPreset", "Email Receipts Preset"]
                  //   ]
                  // },
                  ["/ElectrumX", "Electrum X (!)"],
                  ["/ElectrumPersonalServer", "Electrum Personal Server (!)"],
                  //"/Docker/pihole"
                ]
              }
            ]
          },
          {
            title: "Manual Deployment (!)",
            path: "/ManualDeployment",
            children: [
              // "/ManualDeploymentExtended"
            ]
          }
        ]
      },
      {
        title: "Getting Started",
        collapsable: false,
        children: [
          "/RegisterAccount",
          "/CreateStore",
          {
            title: "(3) Wallet Setup (!)",
            path: "/WalletSetup",
            collapsable: false,
            children: [
              {
                title: "Use existing hardware wallet (!)",
                path: "/Vault",
                children: [
                  ["/ColdCardWallet", "ColdCard Wallet (!)"]
                ]
              },
              {
                title: "Use existing software wallet (!)",
                children: [
                  {
                    title: "Electrum Wallet (!)",
                    path: "/ElectrumWallet",
                  },
                  ["/WasabiWallet", "Wasabi Wallet (!)"]
                ]
              },
              {
                title: "Create a new wallet (!)",
                path: "/CreateWallet",
                children: [
                  ["/HotWallet", "Hot Wallet (!)"]
                ]
              }
            ]
          },
          ["/WhatsNext", "(4) What's Next? (!)"]
        ]
      },
      {
        title: "Features",
        collapsable: false,
        children: [
          ["/Apps", "Apps (!)"],
          ["/Wallet", "Wallet (!)"],
          ["/Invoices", "Invoices (!)"],
          {
            title: "Pull Payments (!)",
            path: "/PullPayments",
            children: [
              ["/Refund", "Refunds (!)"]
            ]
          },
          ["/PaymentRequests", "Payment Requests (!)"],
          ["/LightningNetwork", "Lightning Network (!)"],
          ["/Accounting", "Accounting (!)"],
          {
            title: "Payjoin (!)",
            path: "/Payjoin",
            children: [
              ["https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki", "Payjoin specification (!)", { type: 'external' }]
            ]
          }
        ]
      },
      {
        title: "Integrations (!)",
        collapsable: false,
        children: [
          ["/WooCommerce", "WooCommerce (!)"],
          ["/Drupal", "Drupal (!)"],
          ["/Magento", "Magento (!)"],
          ["/PrestaShop", "PrestaShop (!)"],
          ["/CustomIntegration", "Custom Integration (!)"]
        ]
      },
      {
        title: "Support and Community (!)",
        collapsable: false,
        children: [
          {
            title: "FAQ and common issues (!)",
            path: "/FAQ",
            children: [
              ["/FAQ/FAQ-General", "General FAQ (!)"],
              ["/FAQ/FAQ-Deployment", "Deployment FAQ (!)"],
              ["/FAQ/FAQ-Synchronization", "Synchronization FAQ (!)"],
              ["/FAQ/FAQ-Integrations", "Integrations FAQ (!)"],
              ["/FAQ/FAQ-ServerSettings", "Server Settings FAQ (!)"],
              ["/FAQ/FAQ-Stores", "Stores FAQ (!)"],
              ["/FAQ/FAQ-Wallet", "Wallet FAQ (!)"],
              ["/FAQ/FAQ-Apps", "Apps FAQ (!)"],
              ["/FAQ/FAQ-LightningNetwork", "Lightning Network FAQ (!)"],
              ["/FAQ/FAQ-Altcoin", "Altcoins FAQ (!)"]
            ]
          },
          ["/Troubleshooting", "Troubleshooting an issue (!)"],
          ["/Support", "Support (!)"],
          ["/Contribute", "Contribute (!)"],
          ["/Translate", "Translate (!)"],
          ["/Community", "Community (!)"]
        ]
      },
      {
        title: "Development",
        collapsable: false,
        children: [
          ["/Architecture", "Architecture (!)"],
          ["/LocalDevelopment", "Developing Locally (!)"],
          ["/Altcoins", "How to add an Altcoin (!)"],
          ["/Theme", "Customizing Themes (!)"],
          ["https://indexer.city-chain.org/docs/index.html", "Blockcore Indexer API", { type: 'external' }],
          ["/GreenFieldExample", "Greenfield example with cURL (!)"]
        ]
      }
    ]
  }
}
