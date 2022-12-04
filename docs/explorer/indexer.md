# Deploy An Indexer

Quick guide on how to deploy a Blockcore indexer

This guide assumes docker is installed, an indexer can be deployed on windows wsl or linux.  

First clone the  [Chaininfo](https://github.com/block-core/chaininfo) repo  
(Or alternatively just download the files you will need)  

## Deploy a reverse proxy

A reverse proxy will enables ssl in to your indexer.  

First configure your domain (with your domain provider) to add an A recored pointing to the ip of the server.
By convention we tend to use `[coin].indexer.domain.com` for our domains.  
Make sure port 443 is open on your router or server firewall).   

Go to the folder `\chaininfo\docker\SERVER`  

Run the command
`docker-compose up -d`

This will start the nginx server

To view the logs run the command
`docker-compose logs -f --tail=100`

## Deploy the indexer

Choose the coin (or coins) you want to run, repeate this step for each coin.   

Navigate to the folder `\chaininfo\docker\[coin]`
Open the file `docker-compose.yml` and change the following environment variables  

```
VIRTUAL_HOST: [coin].indexer.domain.com
LETSENCRYPT_HOST: [coin].indexer.domain.com
```

Now run the command 
`docker-compose up -d`

To view the logs run the command
`docker-compose logs -f --tail=100`

To get inbound connections to your fullnode look at the ports in the `chain` container and open those ports.  

You are done, Letsencrypt will generate a certificate for your indexer.   

Important! if the indexer node crashes before the database indexes could be built then the best way is to start again.  

### Notes on runnig a Bitcoin indexer

Use the Bitcoin core image (for exmample the one maintained by `kylemanna/bitcoind`)
In the chain image use this as the image 
```
chain:
    container_name: btc-chain
    image: kylemanna/bitcoind
```

The mongodb will require about 1T of data if you also index transactions, often this means using a different SSD mount.  
At this point I was not able configure docker to use a mounted SSD drive for mongodb, so to solve this I run mongo outside of docker, to do that point the indexer connection string for the mongo database to the host machine

In the indexer images add this to the node command
```
 command: ["--chain=BTC", "--Indexer:ConnectionString=mongodb://host.docker.internal"]
```

If you want to run the Bitcoin core fullnode also outside of docker then point RPC outside of docker
```
 command: ["--chain=BTC", "--Indexer:ConnectionString=mongodb://host.docker.internal", "--Indexer:RpcDomain=host.docker.internal"]
```


