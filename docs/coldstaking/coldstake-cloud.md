# Coldstake - Cloud Or pool

In this guide we will show how to run when the wallets are not on the same node  
This is useful for Coldstaking when the user runs a node in the cloud or wants to use coldstake pool  

### Getting started

Lets assume we have a node with a regular wallet named `main-wallet` that has the funds to be cold staked.

![image](https://user-images.githubusercontent.com/7487930/185090420-17afc3d9-7e80-4ac7-9a08-07efee9cf6cc.png)


### 1 - Create a new wallet and call it coldstake-cloud-wallet

***Skip this section if you want to use a staking pool***  

![image](https://user-images.githubusercontent.com/7487930/185176448-2adb7c6e-ae89-4693-9a37-51c0ef27b919.png)

### 2 - Go to the ColdStaking tab and enable both wallets on each node for coldstaking.

***For pool staking do this step only for the the main-wallet*** 

![image](https://user-images.githubusercontent.com/7487930/185092077-85e302cf-463b-47de-986d-53e5f4023076.png)

Do the same for both wallet on each node

![image](https://user-images.githubusercontent.com/7487930/185092192-7907e6ec-ab47-45de-8bd3-e5a56f4db729.png)

This will create additional HD accounts that will be used for coldstaking  
Now when we go to the Cold Staking tab we will see this view.  

`coldstake-cloud-wallet`
![image](https://user-images.githubusercontent.com/7487930/185177168-a450ba0b-5a0d-4c74-9a27-8d92f2adc31a.png)

`main-wallet`
![image](https://user-images.githubusercontent.com/7487930/185177366-46d7012a-2f96-4b35-ac29-1a5eef16e242.png)

Both wallets are now setup for coldstaking nad we only have funds in the main-wallet  

### 3 - Get a hot address to stake on

***Skip this section if you want to use a staking pool, the pool will provide you with the hot address***

Get an address form the coldstake-cloud-wallet

On the cloud node fo to the Cold Staking tab and click on the `coldstake-cloud-wallet`

Then select the Hot account

![image](https://user-images.githubusercontent.com/7487930/185178881-04804e4f-32fd-4357-a8fd-a66bf327fd99.png)

And click on Receive and then on the unused addresses

![image](https://user-images.githubusercontent.com/7487930/185179035-c7811923-0bf6-4bf6-a549-64b37226a06d.png)

![image](https://user-images.githubusercontent.com/7487930/185179347-fd760648-369e-4f25-95e5-943c8f839373.png)

Copy the address from the text box or generate one if needed

![image](https://user-images.githubusercontent.com/7487930/185179532-945eb456-fde0-43c0-8348-4c60e1bb5688.png)

This will be your stakng address  

### 4 - Next we send coins to a coldstaking transaction

Go to the Cold Staking tab on the `main-wallet` node and select the `cold account`

![image](https://user-images.githubusercontent.com/7487930/185093400-8a122678-4a24-468c-b200-6e998001886a.png)

There are two options to choose from, **Coldstake** and **Delegate**, they are very similar but with one difference,   
Coldstake will look in the local wallets to find addresses to send and receive from.

![image](https://user-images.githubusercontent.com/7487930/185094035-bd0bdead-52fe-414a-aaff-b1d1a780f956.png)

Use **Coldstake** - when both wallets are on the same node  
Use **Delegate** - when the staking wallet is on a different node (mostly used for staking pools or cloud staking)  

### 5 - Setup Cold Staking

Click on the **Delegate** button to continue.  
Next we send coins from the main wallet to the `coldstaking-wallet` with a special coldstaking transaction   

Get an address form the coldstake-cloud-wallet

Put the address we fetched earlier from the `coldstake-cloud-wallet` node   
Select the amount you want to coldstake  
Select a fee  
Decide if you want the output type to be PayToScript or not.  

![image](https://user-images.githubusercontent.com/7487930/185180960-aead6c12-850c-4a3c-a9ad-d14b9b085133.png)

### 6 - Start staking

Go to the Staking tab on the`coldstake-cloud-wallet` node and select the wallet and start staking  

![image](https://user-images.githubusercontent.com/7487930/185099500-02031303-5e16-4293-a192-215c99400d06.png)

It should look like this

![image](https://user-images.githubusercontent.com/7487930/185099664-37d0b761-0a02-4be2-83c5-237dbbfb5561.png)

### 7 - Withdraw from coldstaking

Got to the Cold Staking tab and select the `main-wallet`     
Select the `cold account`, and then click on withdraw button   
Click on the `main-wallet` to get a new address to withdraw to  
Select the amount to withdraw  
Click withdraw  

![image](https://user-images.githubusercontent.com/7487930/185102351-0bbc8d4a-2192-4d1f-a48e-d77c9ccbc192.png)

Now we should see this view in the Cold Staking tab  

![image](https://user-images.githubusercontent.com/7487930/185101079-3cc75368-1348-4984-a0fc-686e506436ea.png)
