# Whale Finder v1.0.1
# V.1.0.1 Screenshots
## Default Token Section
![defaultTokens](https://user-images.githubusercontent.com/48108872/184550464-46255d50-391a-4251-bddc-4c87deda6865.png)
## Gui for pc

![gui_pc](https://user-images.githubusercontent.com/48108872/184550475-9cc6ab02-0cb4-499e-ad6f-7d62932dfd5d.png)
## Gui for mobile devices

![gui_phone](https://user-images.githubusercontent.com/48108872/184550483-a512c7cb-ff5c-48bf-b5e3-56268c85d454.png)

# What Is New in Whale Finder v1.0.1?
You can load default tokens(bnb and usdt in this version) as chosing them by select element of html on main page.This functionality saves your time as preventing  the need for searching for finding usdt or bnb contracts on etherscan or another ethereum blockchain in order to find a whale involved one of these two tokens.Also a better gui for both pc and phone version comes and use mobile version section removes with Whale Finder v1.0.1.It uses same gui for both versions.If you want to chose another token the instructions from last version are still aplied to track other tokens' whales,look at Explanation Of Classical Method From v.1.0.0 but do not use usdt with old instructions just chose it from default tokens.Use method,that explained below, only to search another token's whale.

# Explanation Of Classical Method From v.1.0.0
Here is how it works let assume that we want to find the whales who transfers 100000 or more usdt on blockchain.In this scenario,we will start opening token page of usdt on etherscan : https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7
Than we have to copy token address which is selected with blue color. 


![instruction2](https://user-images.githubusercontent.com/48108872/181058671-5c351af3-fe2e-4bcc-8b07-2812f5c36dc9.png)

Than we have to past it onto Token Contract Address section.
![instruction3](https://user-images.githubusercontent.com/48108872/181047961-e663154a-d044-44db-9a51-298713180230.png)
![instruction4](https://user-images.githubusercontent.com/48108872/181047560-d7883211-f5b3-4719-9cb8-9f442b77cb32.png)
Next,we have to return etherscan change contract section which is showed in a red box at the image.Than we will past it onto Token ABI section.
![instruction5](https://user-images.githubusercontent.com/48108872/181049157-54229a42-97bc-4760-894b-52a6316c62d2.png)
After putting these informations we have to decide a value that decides if the transaction done by a whale or not.As you remember the users who send more than or equal to 100000usdt(it means also >=100000usd) were whale in our example.So we have to write 100000 on
usdt were whale for our example.So for transfer threshold section we have to write 100000000000. You may be confused why not 100000 instead 100000000000.The reason is in blockchain we write amount+decimal to show an amount for example think 1eth if you want to write it in correct format, you have to add 18 zeros after 1 so we write 1 ether as 1000000000000000000. In usdt there are 6 decimals,this is why we write 100000000000 which is 100000+6 decimals(6 digits) but how to find decimal of a token?
![instruction6](https://user-images.githubusercontent.com/48108872/181061894-c78e8f6b-4a31-48b3-8882-e6495492537d.png)
To be able to learn how many decimal our token has,we have to click Read Contract which shows in purple box in image than copy the informations write under decimal(shows in green color at image).
![instruction7](https://user-images.githubusercontent.com/48108872/181062433-ce3f6b1d-e48f-40e3-9bd0-6d8b0172b47c.png)
We wrote 100000000000 to specifiy 100000usdt as explained before on transfer treshold section.Now one step left,you have to click use mobile version if you use this app on a mobile device else directly click submit.Let's first look at the mobile version:
![instruction8](https://user-images.githubusercontent.com/48108872/181063585-5196f50d-c33e-4e70-aec4-4173228561c9.png)
![instruction9](https://user-images.githubusercontent.com/48108872/181063886-4a7a0f9f-2c5b-4d0c-b892-25d088ddbe78.png)
And here is the computer version:
![instruction7](https://user-images.githubusercontent.com/48108872/181064139-3e10e2ad-cfd0-49bb-b53f-f8da4a8b71a8.png)
![instruction10](https://user-images.githubusercontent.com/48108872/181064652-3915653d-0b05-45c4-bd13-673c9ad230c7.png)
For being able to view transactions please click on F12 on your computer than select console section.And here we go, now we view the whale transactions🙂

