# What is Cold Staking

Cold Staking is a mechanism that eliminates the need to keep the coins in a hot wallet. With cold staking implemented, the miner still needs to be online with a running node and an open wallet, but the coins that are used for staking can be safely stored in cold storage.

During cold staking coins are held in two keys separate keys
- Spending key: keys that can spend the coins to any address just like a regular transaction.
- Staking key: keys that can stricktly send coins to the same address during staking

Cold Staking is like regular staking but with the extra security where the miner does not need to have the wallet open and unlocked.  
Users who are staking by running their own staking node but want the extra security can Cold Stake.  

### ColdStake Wallet
When cold staking a user will create an additional coldstaking wallet and send the funds from the main wallet to the cold staking wallet  

Enabling Coldstaking will add two new HD accounts to the wallet:  
**Cold Account** - Is the wallet account that holds the keys that can spend coins  
**Hot Account** - Is the wallet account that holds the keys that can stake coins  

The wallets can be hosted on the same node or on separate nodes  

### ColdStake options
A user can cold stake on thier own just like regular staking but with enhanced security because the spending key doesn't need to be present in the node when staking

There are two main options to use cold stake:  
1. **ColdStake at home** - Run both wallets on the same node, this is useful for a miner that is operating a staking node at home.  
2. **Coldstake in the cloud or with a pool** - The main wallet stays offline and only needs to come online to spend or receive coins, this is useful for users that don't want to deal with runnig a phisycal pc.  

### ColdStake pool
Coldstaking enables secure staking pools, a user can let someone else like a company or friend to stake without risking their coins

For more indepth look in to the Cold Staking protocol  
[blockcore/blob/master/Documentation/Features/ColdStaking](https://github.com/block-core/blockcore/blob/master/Documentation/Features/ColdStaking.md)
