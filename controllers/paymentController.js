const paystack = require('paystack')(process.env.PAYSTACK_SECRET_KEY);

// Initialize Transaction
exports.initializeTransaction = async (req, res) => {
  const { email, amount } = req.body;
  try {
    const response = await paystack.transaction.initialize({
      email,
      amount: amount * 100, // Paystack expects amount in kobo
    });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Verify Transaction
exports.verifyTransaction = async (req, res) => {
  const { reference } = req.query;
  try {
    const response = await paystack.transaction.verify(reference);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
