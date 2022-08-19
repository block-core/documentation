# Coldstake At home

In this guide we will show how to run a cold staking setup where both wallets are on the same node  
This is for miners that want to Coldstaking at home and get the benefits of the enhanced security

### Getting started

Lets assume we have a node with a regular wallet named `main-wallet` that has the funds to be cold staked.

![image](https://user-images.githubusercontent.com/7487930/185596813-5f8912eb-6180-472a-a425-ea18d8216b8b.png)

### 1 - Create a new wallet and call it coldstake-wallet

![image](https://user-images.githubusercontent.com/7487930/185597058-bc7b0ffd-c57b-4841-8fdb-afd082cd6bf2.png)

### 2 - Go to the ColdStaking tab and enable both wallets for coldstaking.

![image](https://user-images.githubusercontent.com/7487930/185599861-dff8e014-c002-44fc-9a3e-14b18a4b1be6.png)

Do the same for both wallet

![image](https://user-images.githubusercontent.com/7487930/185600269-489fa5ec-aa5d-4397-8982-dab6150dc77e.png)

This will create the additional HD accounts that will be used for coldstaking  
Now when we go to the Cold Staking tab we will see this view.  

![image](https://user-images.githubusercontent.com/7487930/185600443-1e84b23b-a8cd-4b62-bf8d-13b2a30e9ee2.png)

Both wallets are now setup for coldstaking but we only have funds in the main-wallet    

### 3 - Next we send coins to a coldstaking transaction

Go to the main-wallet and select the `cold account`

![image](https://user-images.githubusercontent.com/7487930/185600723-8aa91bc8-864d-4089-9208-410c6dce66ba.png)

There are two options to choose from, **Coldstake** and **Delegate**, they are very similar but with one difference,   
Coldstake will look in the local wallets to find addresses to send and receive from.

![image](https://user-images.githubusercontent.com/7487930/185600998-41b7577c-f390-4fe0-b904-1ebd217f5783.png)

Use **Coldstake** - when both wallets are on the same node  
Use **Delegate** - when the staking wallet is on a different node (mostly used for staking pools or cloud staking)  

### 4 - Setup Cold Staking

Click on the **Coldstake** button to continue.  
Next we send coins from the main wallet to the `coldstaking-wallet` with a special coldstaking transaction   

Click on the coldstake-wallet to get a new address  
Select the amount you want to coldstake  
Select a fee  
Decide if you want the output type to be PayToScript or not.  

![image](https://user-images.githubusercontent.com/7487930/185601188-8cd88c2d-59d7-4be4-80af-45d5244213d4.png)

Click on setup coldstaking, you will see a new entry in the history  

And if you go to the Cold Staking tab you will now see hot balance in the `coldstake-wallet` and and cold balance in the `main-wallet`  

![image](https://user-images.githubusercontent.com/7487930/185601352-0321b074-4dd6-4935-bfc2-9a0768145840.png)

### 5 - Start staking

Go to the Staking tab select the `coldstake-wallet` and start staking  

![image](https://user-images.githubusercontent.com/7487930/185601655-ed9b0077-5ea0-4a81-8237-8049f90ccec3.png)

It should look like this

![image](https://user-images.githubusercontent.com/7487930/185603962-1bef8251-8eaa-4047-a34f-2f072c95e2c7.png)

### 6 - Withdraw from coldstaking

Got to the Cold Staking tab and select the `main-wallet` (you cannot withdraw form the `coldstaking-wallet`, that can be used only for staking)   
Select the `cold account`, and then click on withdraw button   
Click on the `main-wallet` to get a new address to withdraw to  
Select the amount to withdraw  
Click withdraw  

![image](https://user-images.githubusercontent.com/7487930/185604169-6448cfb9-4d38-440f-9ef9-4deab7d813db.png)

Now we should see this view in the Cold Staking tab  

![image](https://user-images.githubusercontent.com/7487930/185604503-b83e367b-8e64-45bf-af6e-eb19f8f1749a.png)
