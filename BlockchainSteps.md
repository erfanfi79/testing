# Blockchain Steps
## 1. Install Hardhat
```bash
npm install --save-dev hardhat
```

## 2. Initialize Hardhat
```bash
npx hardhat init
```

## 3. Install Dependencies
```bash
npm install @nomicfoundation/hardhat-toolbox
```

## 4. Compile and configure
```bash
npx hardhat compile
npx hardhat node # in another terminal
npx hardhat run scripts/deploy.js 
```

# ApiTest steps
## 1. Install ethers
```bash
npm install ethers
```

## 2. Create Blockchain router
In this file we will create a router that will be used to interact with the blockchain controller

## 3. Create Blockchain controller
Implementing Base controller and adding blockchain functionality to it 

## 4. Completing blockchain functionality
Adding get info and returning on api call
Api: localhost:5025/api/blockchain/


