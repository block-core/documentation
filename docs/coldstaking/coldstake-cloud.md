# Coldstake - Cloud Or pool

In this guide we will show how to run when the wallets are not on the same node  
This is useful for Coldstaking when the user runs a node in the cloud or wants to use coldstake pool  

### Getting started

Lets assume we have a node with a regular wallet named `main-wallet` that has the funds to be cold staked.

![image](https://user-images.githubusercontent.com/7487930/185596813-5f8912eb-6180-472a-a425-ea18d8216b8b.png)


### 1 - Create a new wallet and call it coldstake-cloud-wallet

***Skip this section if you want to use a staking pool***  

![image](https://user-images.githubusercontent.com/7487930/185604776-b1c08229-554d-4c7b-8067-2e34f834a9be.png)

### 2 - Go to the Coldstake tab and enable both wallets on each node for coldstaking.

***For pool staking do this step only for the the main-wallet*** 

![image](https://user-images.githubusercontent.com/7487930/185599861-dff8e014-c002-44fc-9a3e-14b18a4b1be6.png)

Do the same for both wallet

![image](https://user-images.githubusercontent.com/7487930/185600269-489fa5ec-aa5d-4397-8982-dab6150dc77e.png)

This will create additional HD accounts that will be used for coldstaking  
Now when we go to the Coldstaking tab we will see this view.  

`coldstake-cloud-wallet`
![image](https://user-images.githubusercontent.com/7487930/185605205-b89fc3ab-c0eb-48c6-874f-9023f5871203.png)

`main-wallet`
![image](https://user-images.githubusercontent.com/7487930/185605446-caee749a-4bfd-4100-b045-613da46e5384.png)

Both wallets are now setup for coldstaking nad we only have funds in the main-wallet  

### 3 - Get a hot address to stake on

***Skip this section if you want to use a staking pool, the pool will provide you with the hot address***

Get an address form the coldstake-cloud-wallet

On the cloud node fo to the Coldstaking tab and click on the `coldstake-cloud-wallet`

Then select the Hot account

![image](https://user-images.githubusercontent.com/7487930/185606353-fd39c78a-0de9-4127-bca7-c226da4c3d6f.png)

And click on Receive and then on the unused addresses

![image](https://user-images.githubusercontent.com/7487930/185606421-3304a236-9151-4782-8f29-d53bb13f968b.png)

![image](https://user-images.githubusercontent.com/7487930/185606767-79571a70-42eb-481d-98c8-8b14483d23e9.png)

Copy the address from the text box or generate one if needed

![image](https://user-images.githubusercontent.com/7487930/185606838-03649a26-28ae-4540-a7b2-9c8610a9f35a.png)

This will be your stakng address  

### 4 - Next we send coins to a coldstaking transaction

Go to the Coldstaking tab on the `main-wallet` node and select the `cold account`

![image](https://user-images.githubusercontent.com/7487930/185607022-3f85f3f3-5f13-46b5-a7f1-e39f0f8e53f6.png)

There are two options to choose from, **Coldstake** and **Delegate**, they are very similar but with one difference,   
Coldstake will look in the local wallets to find addresses to send and receive from.

![image](https://user-images.githubusercontent.com/7487930/185607226-6655ab94-9ba4-4122-b222-daee034d7977.png)

Use **Coldstake** - when both wallets are on the same node  
Use **Delegate** - when the staking wallet is on a different node (mostly used for staking pools or cloud staking)  

### 5 - Setup Coldstaking

Click on the **Delegate** button to continue.  
Next we send coins from the main wallet to the `coldstaking-wallet` with a special coldstaking transaction   

Get an address form the coldstake-cloud-wallet

Put the address we fetched earlier from the `coldstake-cloud-wallet` node   
Select the amount you want to coldstake  
Select a fee  
Decide if you want the output type to be PayToScript or not.  

![image](https://user-images.githubusercontent.com/7487930/185607441-e1010e52-7439-4754-b665-399814762eab.png)

### 6 - Start staking

Go to the Staking tab select the `coldstake-wallet` and start staking  

![image](https://user-images.githubusercontent.com/7487930/185601655-ed9b0077-5ea0-4a81-8237-8049f90ccec3.png)

It should look like this

![image](https://user-images.githubusercontent.com/7487930/185603962-1bef8251-8eaa-4047-a34f-2f072c95e2c7.png)

### 7 - Withdraw from coldstaking

Got to the Coldstaking tab and select the `main-wallet` (you cannot withdraw form the `coldstaking-wallet`, that can be used only for staking)   
Select the `cold account`, and then click on withdraw button   
Click on the `main-wallet` to get a new address to withdraw to  
Select the amount to withdraw  
Click withdraw  

![image](https://user-images.githubusercontent.com/7487930/185604169-6448cfb9-4d38-440f-9ef9-4deab7d813db.png)

Now we should see this view in the Coldstaking tab  

![image](https://user-images.githubusercontent.com/7487930/185604503-b83e367b-8e64-45bf-af6e-eb19f8f1749a.png)
