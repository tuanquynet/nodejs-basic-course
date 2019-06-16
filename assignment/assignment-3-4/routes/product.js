const express = require('express');
const router = express.Router();
const ProductModel = require('../models/product');

/* GET product listing. */
router.get('/products', function(req, res, next) {
	ProductModel
		.find({})
		.limit(50)
		.exec()
		.then((result) => {
			res.json(result);
			// next();
		})
		.catch(err => {
			console.log(err);
		});
});

/* GET product listing. */
router.get('/products/:productId', function(req, res, next) {
		const {productId} = req.params || {};

	ProductModel
		.findOne({_id: productId})
		.exec()
		.then((result) => {
			res.json(result);
		})
		.catch(err => {
			console.log(err);
		});
});

module.exports = router;
