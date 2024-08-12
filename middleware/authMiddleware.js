const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

const checkSubscription = (req, res, next) => {
  if (!req.user.isSubscribed) {
    return res
      .status(403)
      .json({ message: "Subscription required for this feature" });
  }
  next();
};

module.exports = { verifyToken, checkSubscription };
