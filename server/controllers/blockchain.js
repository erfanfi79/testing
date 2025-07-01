const ethers = require('ethers');
const efcontract = require('../../artifacts/contracts/EFContract.sol/EFContract.json')
const LOCAL_ETH_API_URL =
  process.env.LOCAL_ETH_API_URL || 'http://localhost:8545';
const provider = new ethers.JsonRpcProvider(LOCAL_ETH_API_URL);
const contractAddress = process.env.CONTRACT_ADDRESS;


const getContract = async () => {
  const abi = efcontract.abi;
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return contract;
};
/**
 * Get balance of an Ethereum address
 * @param {string} address - Ethereum address to check
 * @returns {Promise<{balanceWei: string, balanceEther: string}>} - Balance in wei and ether
 */
const getBalance = async (address) => {
  if (!ethers.isAddress(address)) {
    throw new Error('Invalid Ethereum address');
  }

  const balance = await provider.getBalance(address);
  const balanceEther = ethers.formatEther(balance);

  return {
    balanceWei: balance.toString(),
    balanceEther
  };
};

/**
 * Get transaction count (nonce) for an address
 * @param {string} address - Ethereum address to check
 * @returns {Promise<number>} - Transaction count
 */
const getTransactionCount = async (address) => {
  if (!ethers.isAddress(address)) {
    throw new Error('Invalid Ethereum address');
  }

  return await provider.getTransactionCount(address);
};

const getEFContractBalance = async (address) => {
  const contract = await getContract();
  const balance = await contract.getBalance(address);
  return balance;
};
const getEFContractInfo = async () => {
  const contract = await getContract();
  const symbol = await contract.symbol();
  const decimals = await contract.decimals();
  const balance = await contract.balanceOf(process.env.LOCAL_PUBLIC_KEY);
  
  return {
    symbol,
    decimals: decimals.toString(),
    balance: balance.toString(),
    address: contractAddress
  };
};

module.exports = {
  getBalance,
  getTransactionCount,
  getEFContractBalance,
  getEFContractInfo
};
