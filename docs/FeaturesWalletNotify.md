# Wallet Notify

Adds the ability to perform shell executions when transactions is observed in the wallet.

## How to use the Wallet Notify feature

To enable the feature in the node builder register the feature itself similar to the bellow example.

```
                var builder = new FullNodeBuilder()
                            .UseNodeSettings(nodeSettings)
                            .UseBlockStore()
                            .UsePosConsensus()
                            .UseColdStakingWallet()
                            .UseApi()
                            .UseMempool()
                            .UseWalletNotify(); # This is how to enable wallet notify
```

## Setting the shell command

Provide the -walletnotify argument, either as argument parameter on startup, or by editing the blockcore.conf file.

In the command, the value "%s" will be replaced with the transaction ID.

Example:

```
-walletnotify=\"curl -X POST -d txid=%s http://localhost:5000/\"
```

## When is the notifier triggered?

When an transaction is observed in the mempool, the notifier is run once. It is run again when the same transaction is included in a block.

When a rescan of the wallet is performed, it will re-run the notifier, but only once pr. transaction since the transactions are already in blocks.
