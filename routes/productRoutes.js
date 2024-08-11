const express = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
} = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/product", authMiddleware, createProduct);
router.get("/products", getProducts);
router.get("/product/:id", getProduct);

module.exports = router;
