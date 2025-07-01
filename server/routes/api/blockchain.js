const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const blockchainController = require('../../controllers/blockchain');

/**
 * Get all personnel records
 * @param req Express request object
 * @param res Express response object
 */
const erfanfaravaniApiTest = async (req, res) => {
  try {
    let { address } = req.params;
    if (!address) {
      address = process.env.LOCAL_PUBLIC_KEY;
    }
    // Basic account Interactions
    const transactionCount = await blockchainController.getTransactionCount(
      address
    );
    const balanceOfAccount = await blockchainController.getBalance(address);

    // Smart Contract Intractions
    const contractInfo = await blockchainController.getEFContractInfo();

    res.json({
      address,
      transactionCount,
      balanceOfAccount,
      contractInfo,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Error fetching transaction count:', err);
    res.status(400).json({ error: err.message });
  } finally {
  }
};
router.get('/', erfanfaravaniApiTest);
module.exports = router;
