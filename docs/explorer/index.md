# Deploy a block explorer

Explorers enable a wider view of the blockchain data and provide 3rd parties the ability to query the public information of the blockchain.  

To enable a more decentralized approach we focuse on making the indexers be able to run on home computers instead of clouds and we encourage the blockcore community to run indexers and we recomend users to run their own indexers or use an indexer from a member they trust.  
We also use community run DNS servers to resolve indexer locations and allow the indexers to be used by other 3rd parties.    

A list of indexers can be found here [Blockcore DNS](https://github.com/block-core/chaininfo/blob/master/services/BLOCKCORE-DNS.json) 

To view a world map of the currnent indexer locations [go here](https://status.blockcore.net/)      
Our end goal is to find an incentive model to run indexers.  

Follow this steps to deploy a multi chain explorer or an explorer for a single chain.

### Deploy the indexer
Deploy an indexer for each chain you want to index
[indexer](/explorer/indexer/) 

### Deploy the explorer website
This will create a UI to view the blockchain data
[explorer](/explorer/website/) 

### Deploy a DNS (optional)
A DNS allowes services to make your indexer discoverable 
[DNS](/explorer/website/) 