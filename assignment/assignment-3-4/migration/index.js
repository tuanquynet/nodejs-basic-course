const mongoose = require('mongoose');

const {
  MONGO_URI = 'mongodb://localhost:27017/testdb',
} = process.env;

const Product = require('../models/product');
let products = require('../data/products.json.js.js');

mongoose
  .connect(MONGO_URI)
  .then(() => {
		products = products.body.map((product) => {
			delete product.id;
			return {
				...product,
				_id: new mongoose.mongo.ObjectId(),
			}
		});
		
		console.log(products);
		return Product.insertMany(products);
	})
	.then(() => {
		process.exit(0);
	})
	.catch(err => {
		console.log(err);
	});
