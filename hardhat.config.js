require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    myQuickNode: {
      url: process.env.SEPOLIA_API_URL,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
  },
  solidity: "0.8.28",
};