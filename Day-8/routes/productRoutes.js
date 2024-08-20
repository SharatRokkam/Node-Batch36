const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

// template engine, hbs

//body parser
router.use(express.json());

router.post("/", productController.createProduct);

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProduct);

router.put("/:id", productController.replaceProduct);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
