# Coldstake - Setup A Pool

In this guide we will show how to setup a coldstake pool  


**Charging fees**  
Right now there is no automated mechanisem to charge fees from users for using the pool, each pool operator will have to find a way to charge for providing the service of staking for the user.
Either by paying in advance for a year of staking or any other way of subsidsing the pool  

**Security concerns**  
Staking pools tend to centralize the mining processes by delegating authirity to create blocks to a smaller number of users  
For this reason it is encouraged that a network will have many staking pools to choose form with competitive fees  

### 1 - Run a node in coldstake pool mode  

To setup a pool we have to run a fullnode on the network we want to provide coldstake pool services     
 
This is done by running a fullnode with the additional parameter `-enforceStakingFlag=1`  
When the `enforceStakingFlag` flag is set an additional menu will appear on the nodes dashboard  

[pool menu dashboard]

The `enforceStakingFlag` will only allow only certain addresses to stake  
To allow an address to stake the pool operator needs to set that in the dashboard  

Here is an example of the entire command   
```
dotnet run --chain=CITY --enforceStakingFlag=1
```  

### 2 - Find your pool coldstake address

The pool can assign a new address for each user or have a single address that all users can just use to setup coldstaking  
For ease of use we recomend using just one address to represent the pool, then such an address can be displayed on a static website and users won't need the extra step of asking the pool operator for a new address   

All the addresses that the pool uses are hot addresses  

[image of how to find the hot coldstaking address]  

**Security note**
```
A possible attack on a staking pool node is to send many small dust trx to it,  
this is even worse if the hot address is public and known     
however the node will normally ignore dust transactions when staking  
```

### 3 - Enabling addresses to coldstake  

Each address that is used for staking needs to be explicitly enabled  

Got to the dashboard to observe the addresses that can coldstake  

[show an image of dashboard and how to setup expiry on an address]

### 4 - Starting the staking job  

 [image of the staking page]


