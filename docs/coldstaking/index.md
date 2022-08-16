# What is Cold Staking

Cold Staking is a mechanism that eliminates the need to keep the coins in a hot wallet. With cold staking implemented, the miner still needs to be online with a running node and an open wallet, but the coins that are used for staking can be safely stored in cold storage.

During cold staking coins are held in two keys separate keys
- Spending key: keys that can spend the coins to any address just like a regular transaction.
- Staking key: keys that can stricktly send coins to the same address during staking

### Solo Cold Staking
A user can cold stake on thier own like regular staking but with enhanced security because the spending key dont need to be present in the node when its staking

### Pool Cold Staking
Coldstaking enables secure staking pools, a user can let someone else like a company or friend to stake without risking their coins


For more indepth look in to the Cold Staking protocol  
[blockcore/blob/master/Documentation/Features/ColdStaking](https://github.com/block-core/blockcore/blob/master/Documentation/Features/ColdStaking.md)
