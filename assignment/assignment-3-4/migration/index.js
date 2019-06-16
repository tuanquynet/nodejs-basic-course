const mongoose = require('mongoose');
const Types = mongoose.mongo.Types;

const {
  MONGO_URI = 'mongodb://localhost:27017/testdb',
} = process.env;

const Product = require('../models/product');
const Category = require('../models/category');
const User = require('../models/user');

let products = require('../data/products.json');
let categories = require('../data/categories.json');
let users = require('../data/users.json');

/**
 * Noted:
 * - It will clean up users, categories, products
 */
mongoose
  .connect(MONGO_URI)
  .then(() => {
		return Promise.all([
			Product.remove(),
			Category.remove(),
			User.remove(),
		])
	})
  .then(() => {
		users = users.body.map(record => ({...record, _id: new mongoose.mongo.ObjectId()}));

		categories = categories.body.map(record => ({...record}));

		return Promise.all([
			Category.insertMany(categories),
			User.insertMany(users),
		]);
	})
  .then(() => {
		products = products.body.map((product) => {
			product._id = product._id
				? mongoose.mongo.ObjectId(product._id)
				: new mongoose.mongo.ObjectId();
			return {
				...product,
			}
		});

		return Product.insertMany(products);
	})
	.then(() => {
		process.exit(0);
	})
	.catch(err => {
		console.log(err);
		process.exit(1);
	});
