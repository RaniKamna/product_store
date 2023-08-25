const express = require('express');
const { createProduct, getAllProducts } = require('../controllers/productController');

const router = express.Router();

router.route("/new").post(createProduct);



router.route("/").get(getAllProducts);

module.exports = router;