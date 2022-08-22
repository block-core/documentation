# What is Coldstaking

Coldstaking is a mechanism that eliminates the need to keep the coins in a hot wallet. With Coldstaking implemented, the miner still needs to be online with a running node and an open wallet, but the keys to spend the coins that are used for staking can be safely stored in cold storage.

During Coldstaking coins are held in two separate keys:  
- **Spending key**: keys that can spend the coins to any address just like a regular transaction.  
- **Staking key**: keys that can stricktly send coins to the same address during staking  

Coldstaking is like regular staking but with the extra security where the miner does not need to have the wallet with the spending keys open and unlocked.  
Users who are staking by running their own staking node but want the extra security can Cold Stake.  

### Coldstake Wallet
When Coldstaking a user will create an additional wallet for Coldstaking and send the funds from the main wallet to the Coldstaking wallet  

Enabling Coldstaking will add two new HD accounts to the wallet:  
**Cold Account** - Is the wallet account that holds the keys that can spend coins  
**Hot Account** - Is the wallet account that holds the keys that can stake coins  

The wallets can be hosted on the same node or on separate nodes  

*For Advanced Users:*
```
The blockcore wallet hosts the account index under a special path,    
for cold HD path under `m/44'/coin-type'/100000000`  
and for hot HD path under `m/44'/coin-type'/100000001`  
```

```
For P2SH and P2WSH the blockcore wallet will add an opreturn  
with the hot and cold pub keys to the setup transaction.  
This is so to avoid needing state for recovery,  
when syncing the wallet can discover coldstake script outputs.  
```

### Coldstake hosting options
A user can cold stake on thier own just like regular staking but with enhanced security because the spending key doesn't need to be present in the node when staking

There are two main options to use cold stake:  
1. **Coldstake at home** - Run both wallets on the same node, this is useful for a miner that is operating a staking node at home.  
2. **Coldstake in the cloud or with a pool** - The main wallet stays offline and only needs to come online to spend or receive coins, this is useful for users that don't want to deal with runnig a phisycal pc.  

### Coldstake script types  
Coldstake can have two script types `Coldstake` or `P2SH/P2WSH` (depending on the wallet type)  
The main difference is that using `P2SH/P2WSH` will create a single address to represent the coldstake utxo, this is easier to search for on explorers however it will add an additional opreturn on the setup trx.

### Coldstake pool
Coldstaking enables secure staking pools, a user can let someone else like a company or friend to stake without risking their coins

### Advanced reading   
For more indepth look in to the Coldstaking protocol  
[blockcore/blob/master/Documentation/Features/Coldstaking](https://github.com/block-core/blockcore/blob/master/Documentation/Features/ColdStaking.md)

### Issues and problems 

**Withdraw all the coins**  
Sometimes not all funds are avilable to withdraw, this is because if coins where used to find a block they will need to wait for maturity (a certain amount of confirmations before they can be moved) right now the UI does not support showing immature coins.   

To solve this just stop the mining processes and wait for some time, if using a pool contact the operator and ask them to expire your staking address (you may be lucky and be able to withdraw from a pool if your coins did not find a block before you withderaw)  
