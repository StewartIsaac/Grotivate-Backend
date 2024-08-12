const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProduct,
} = require("../controllers/productController");
// const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/product", createProduct);
router.get("/all-products", getAllProducts);
router.get("/product/:id", getProduct);

module.exports = router;
