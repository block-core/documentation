# General BTCPay FAQ

This page contains general questions and answers about BTCPay. What it is, how it works, how to install it.

# [General FAQ](FAQ-General.md)

* [What is BTCPay Server?](FAQ-General.md#what-is-btcpay-server)
* [Why should I choose BTCPay over other processors?](FAQ-General.md#why-should-i-choose-btcpay-over-other-processors)
* [Why is everyone so excited about BTCPay?](FAQ-General.md#why-is-everyone-so-excited-about-btcpay)
* [Who can use BTCPay?](FAQ-General.md#who-can-use-btcpay)
* [How much does it cost to run BTCPay Server?](FAQ-General.md#how-much-does-it-cost-to-run-btcpay-server)
* [How to install BTCPay?](FAQ-General.md#how-to-install-btcpay-server)
* [What are the minimal requirements?](FAQ-General.md#what-are-the-minimal-requirements-to-run-btcpay)
* [What e-commerce integrations are available?](FAQ-General.md#what-e-commerce-integrations-are-available)
* [Do I need to have an online store to accept cryptocurrencies?](FAQ-General.md#do-i-need-to-have-an-online-store-to-accept-cryptocurrencies)
* [Which cryptocurrencies are supported in BTCPay?](FAQ-General.md#which-cryptocurrencies-are-supported-in-btcpay)
* [Why can't I just give my public address to a buyer?](FAQ-General.md#why-can-t-i-just-give-my-bitcoin-address-to-a-buyer)
* [Does BTCPay need my private key?](FAQ-General.md#does-btcpay-need-myprivate-key)
* [Does BTCPay Server support crypto to fiat conversion?](FAQ-General.md#does-btcpay-server-support-crypto-to-fiat-conversion)
* [What if I have a problem with a paid invoice?](FAQ-General.md#what-if-i-have-a-problem-with-a-paid-invoice)
* [Where can I get help and support?](FAQ-General.md#where-can-i-get-help-and-support)
* [How can I contribute to BTCPay?](FAQ-General.md#how-can-i-contribute-to-btcpay)
* [How can I use the BTCPay Server API?](FAQ-General.md#how-can-i-use-the-btcpay-server-api)

## What is BTCPay Server?

BTCPay Server is a free and open-source cryptocurrency payment processor which allows you to receive payments in Bitcoin (on-chain and via the Lightning Network) and altcoins directly, with no fees, transaction cost or a middleman.

BTCPay is a non-custodial invoicing system which eliminates the involvement of a third-party. Payments with BTCPay go directly to your wallet, which increases the privacy and security. Your private keys are never uploaded to the server. There is no address re-use since each invoice generates a new address deriving from your xpubkey.

## Why should I choose BTCPay over other processors?

The most significant advantage of BTCPay over other processors is that it is entirely free and open-source, non-custodial software, created by the community. While most of the other processors hold your Bitcoins, BTCPay allows you to receive payments P2P, directly to your software or hardware wallet.

BTCPay is a self-hosted software. This means that you are your own payment processor. There are no subscriptions, no transaction fees. There's no third-party involvement which significantly increases the censorship-resistance, privacy, and security for you and your customers. Furthermore, BTCPay enables you to become a processor yourself, so that you can offer different packages and help spread the adoption locally or globally.

With BTCPay, you are your own bank.

## Why is everyone so excited about BTCPay?

The community is excited about BTCPay and often recommends it to merchants or content creators because it offers a direct way for store-owners and charities to receive Bitcoin payments, which significantly improves the privacy of the customers/donors.

BTCPay doesn't compromise on censorship-resistance, which is one of the main features of Bitcoin. Besides that, being free and open-source it gives an excellent opportunity for developers to build things and integrations on top of BTCPay.

## Who can use BTCPay?

BTCPay server is a feature-rich software with plenty of use-cases that can solve problems for different types of users. Merchants, content creators, lightning network users, exchanges, hosting providers and many others can find it useful. See the [Use Case page](../UseCase.md) for detailed breakdown of BTCPay use-cases.

## How much does it cost to run BTCPay Server?

BTCPay is completely free software. The software itself costs nothing. It can be downloaded and used by anyone, free of charge. You can run it **internally** as a self-hosted solution, on a home server, on a low-cost single-board computer like [Raspberry Pi](../RaspberryPiDeployment.md) or different kind of [in-home hardware](../HardwareDeployment.md)

Hosting BTCPay **externally**, usually means using a Virtual Private Server, enterprise-grade infrastructure, or a [third-party BTCPay hosting](../ThirdPartyHosting.md).

The price of hosting BTCPay Server obviously depends on the hosting provider.

The low-priced VPS servers tested by the community start at around [9$/month](../LunaNodeWebDeployment.md), but you're free to explore other hosting providers that suit your budget, as long as they meet the [minimum requirements](FAQ-General.md#what-are-the-minimal-requirements-to-run-btcpay).

### Why do I need a VPS? Can't I just run BTCPay on my home computer?

Just like you can host a website locally, you can do it with BTCPay. Please be aware that your PC would have to meet the minimal requirements and also run 24/7 if you don't want interruptions of service.

You might also not want to expose your home IP address for an activity related to payment and money.

For all these reasons, while local hosting is suitable for testing, it's not a viable solution for production.

### Can the cost of running BTCPay on Microsoft Azure be reduced?

Please check out [How to penny-pinch your Azure deployment](../AzurePennyPinching.md).

## What are the minimal requirements to run BTCPay?

If you would like to run Bitcoin and Lightning Network nodes, the minimal requirements are:

- 2GB Ram
- 80 GB of storage (with [pruning](https://github.com/btcpayserver/btcpayserver-docker/blob/master/README.md#generated-docker-compose) enabled)
- Docker

## How to install BTCPay Server?

If you don't have the technical knowledge, we recommend that you use our new web-wizard to deploy BTCPay Server.

- [How to install BTCPay via Web-Wizard LunaNode - guide](https://medium.com/@BtcpayServer/launch-btcpay-server-via-web-interface-and-deploy-full-bitcoin-node-lnd-in-less-than-a-minute-dc8bc6f06a3)
- [How to install BTCPay via Web-Wizard LunaNode - video](https://www.youtube.com/watch?v=NjslXYvp8bk)

There are several other deployment methods you can check out:

- [How to install BTCPay on Azure - guide](../AzureDeployment.md)
- [How to install BTCPay on Azure - video](https://www.youtube.com/watch?v=Bxs95BdEMHY)
- [How to install BTCPay on LunaNode VPS - article](https://medium.com/@BtcpayServer/hosting-btcpayserver-on-lunanode-bf9ef5fff75b)
- [How to install BTCPay on LunaNode VPS - video](https://youtube.com/watch?v=PZXwacAai9E)
- [See all deployments](../Deployment.md)
- [BTCPay YouTube channel](https://www.youtube.com/channel/UCpG9WL6TJuoNfFVkaDMp9ug/videos)
- [Assorted playlist of all BTCPay YouTube videos](https://www.youtube.com/playlist?list=PL7b9Wt9shK2r-WXS6ysG4tafVQRu80biZ)

### How to use WooCommerce store with BTCPay?

- [BTCPay and WooCommerce](https://www.youtube.com/watch?v=tTH3nLoyTcw)
- [BTCPay WordPress plugin installation](https://www.youtube.com/watch?v=6QcTWHRKZag)
- [Connecting your store to a third-party BTCPay host](https://www.youtube.com/watch?v=IT2K8It3S3o)
- [Connect your wallet to BTCPay](https://www.youtube.com/watch?v=xX6LyQej0NQ)
- [Test your store checkout when you finish with the setup](https://www.youtube.com/watch?v=Fi3pYpzGmmo)

### How to use BTCPay with Drupal?

- [BTCPay and Drupal installation and configuration](https://github.com/btcpayserver/commerce_btcpay#installation-and-configuration)
- [Drupal Commerce BTCPay module installation walkthrough](https://youtube.com/watch?v=XBZwyC2v48s)

### How to use BTCPay with Prestashop?

- [BTCPay and Prestashop - getting started guide](https://github.com/btcpayserver/prestashop-plugin#description)
- [Using the BTCPay plugin for Prestashop](https://github.com/adapp-tech/prestashop-plugin/blob/master/GUIDE.md#using-the-btcpay-plugin-for-prestashop)

## What e-commerce integrations are available?

Currently, BTCPay has integrations with the following e-commerce platforms:

- WordPress / WooCommerce
- Magneto
- Drupal
- Prestashop
- Custom integration

If you're a developer, you can develop your own integration, by following the [custom integration instructions](../CustomIntegration.md).

## Do I need to have an online store to accept cryptocurrencies?

You can use BTCPay even if you don't have an e-commerce store. You can launch your BTCpay and be the payment processor for your friends or local market. Another use-case is to accept donations through the POS (Point of Sale) app or payment buttons which can be copy-pasted as HTML snippets into any website.

If you do not have a store, but want to create one, read [How to Create an Online Store & Accept Bitcoin – Step By Step Guide](https://bitcoinshirt.co/how-to-create-store-accept-bitcoin/) which teaches you how to build a store from scratch and install BTCPay.

## Which cryptocurrencies are supported in BTCPay?

BTCPay Server natively supports Bitcoin (BTC). Opt-in integration is available for several altcoins:

- BGold (BTG) (also known as Bitcoin Gold)
- BPlus (XBC) (also known as Bitcoin Plus)
- Bitcore (BTX)
- Dash (DASH)
- Dogecoin (DOGE)
- Feathercoin (FTC)
- Groestlcoin (GRS)
- Litecoin (LTC)
- Monacoin (MONA)
- Monero (XMR) [(notes on deployment)](https://github.com/btcpayserver/btcpayserver-docker/issues/204#issuecomment-552755422)
- Polis (POLIS)
- Viacoin (VIA)

 Altcoins are maintained and supported by respective communities.

## Why can't I just give my Bitcoin address to a buyer?

Re-using the address for receiving payments is a privacy issue. Providing a different address manually to each customer is not an optimal solution. Imagine having to send an e-mail to everyone that wants to pay you with cryptocurrency.

BTCPay solves the address re-use and automates the checkout process. The software is a complete, automated invoicing system. It integrates into your checkout process, and customers can pay you in Bitcoin or altcoins in a few clicks.

After the payment, the software notifies your store that the order has been paid/completed. Depending on the e-commerce software you're using, it can also change the order status. All you have to worry about is getting items shipped, leave the invoicing and payment processing to BTCPay.

## Does BTCPay need my private key?

Absolutely not. The fact that BTCPay Server never needs access to your master private key for on-chain transactions is a huge security advantage. Even if your server gets hacked, your funds from the on-chain transactions are always safe. Securing your on-chain funds comes down to [securing your wallet](https://btcinformation.org/en/secure-your-wallet).

If you have a lightning node, BTCPay technically has access to the keys (macarons) of your LN.

### Address re-use - How BTCPay creates a different address?

BTCPay generates a different address for each invoice. The address is derived from your [xpubkey](https://bitcointalk.org/index.php?topic=2828777.0). Your private keys are never uploaded or required by BTCPay. The software only needs your extended public key. You can create your private key in your software or hardware wallet and import the public key (xpub) into BTCPay so that it can derive addresses from it. Meanwhile, you should stick to the best practices for protecting your private key.

## Does BTCPay Server support crypto to fiat conversion?

At this time, it is not possible to instantly convert your payments into fiat through BTCPay. This feature is planned for the future, but there is no ETA.

## What if I have a problem with a paid invoice?

BTCPay Server is an open-source self-hosted software stack, not a company. The community and contributors behind BTCPay Server have no control over who uses the software or how they use it.
If you paid an invoice to a merchant and have a problem with your order, you must contact the merchant directly to see what happened. 

Each merchant running the software controls their own store and the connected wallets that receive funds. The BTCPay Server community does not hold or have access to any funds of a store using the BTCPay Server software, only the merchant does.

## Where can I get help and support?

BTCPay is an open-source project. It is not a company; there is no e-mail, live-chat or phone support. The software relies on a network of contributors and users to provide support.

If you encountered an issue or have a feature request, please [open an issue on GitHub](https://github.com/btcpayserver/btcpayserver/issues). For more general questions, join our [community on Mattermost](https://chat.btcpayserver.org/). Certain community members offer [premium (paid) support](../Support.md).

## How can I contribute to BTCPay?

There are many ways in which you can contribute to an open-source project like BTCPay.

The easiest way is to use the software, provide feedback and report any bugs or issues you or your customers encounter. If you're a developer, you can help us develop and improve the software by contributing on the GitHub. Translating BTCPay into your native language, helping us with documentation writing are ways in which you can help us out, even if you're not a developer or tech-savvy. We appreciate every contributor to the project.

## How can I use the BTCPay Server API?

The original BTCPay Server API is compatible for the most part with [BitPay's API](https://bitpay.com/api/) to allow merchants to smoothly transition to using BTCPay if they prefer a free, open source, payment processing alternative. 

In 2020, BTCPay Server started releasing a new Greenfield API. This new API will co-exist with the original API and allow full usage of all BTCPay Server features, without requiring the UI. You can find the current [Greenfield API documentation](https://docs.btcpayserver.org/API/Greenfield/v1/) and a [usage example here](https://docs.btcpayserver.org/GreenFieldExample/).

A BTCPay Server functionality that is not found in the Greenfield API documentation means it isn't fully implemented yet in the new API and users should use the original API instead. The discussion on the development of the new Greenfield API can be found [here](https://github.com/btcpayserver/btcpayserver/issues/1320). 
