# Architecture

Blockcore is an eco-system of many parts and this section describes the whole eco-system from a top-down perspective.

![](./diagram/overview.svg)

The underlaying foundation is our blockchain node software, which can be used to run an UTXO-based blockchain that is similar to Bitcoin, but with added 
support to run Proof-of-Stake. Our software also supports Proof-of-Work blockchains.

Each node has the full data of the blockchain, which normally does not contain a lot of additional data other than limited OP_RETURN data. Nodes should not be exposed to public consumption.

The indexer is responsible for building an queryable database of the history of the blockchain, for specific addresses, transactions and blocks.

Ontop of the indexer, we have built different user interface surfaces such as the explorer, which allows insight into the blockchain, including rich lists, network nodes, known public addresses, and more.

Our extension is an non-custodial wallet that runs in the web browser and is distributed on add-ons stores for easy discovery, installation and automatic updates. The extension relies on the indexer to access blockchain data.

Blockcore Hub is a full-node wallet, which is the software you can give to your advanced users that will be performing Proof-of-Stake operations. Blockcore Hub is a full-node, meaning that it downloads the entire blockchain. This is the optimal wallet to use for improve privacy.

Blockcore Tipbot is our tipping-bot software that allows users to easily give and receive tips in the form of coins and tokens. The tipbot is a custodial service, meaning that the keys does not belong to the individual users, so only use it for smaller amounts. Users can withdraw from their tipbot balance into Blockcore Hub or Blockcore Extension wallets.

Blockcore Vault is our server software that allows distribute data storage and sharing. It implements open standards for decentralized identity (DID). The Blockcore Vault software can store a users verifiable credentials, which can be anything from private direct messages, to NFTs, receipts from purchases, favorite music, videos and everything else. It supports both public (unencrypted) information and encrypted (private) information to be hosted.

We have cross-system documentation for all of our software, in combination with tooling for generating new blockchains and more. We also run a community provided and supported server infrastructure of blockchain nodes, tipbots, indexers, explorers and more.