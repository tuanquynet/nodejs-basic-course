const mongoose = require('mongoose');
const {loadUsers, loadProducts, loadCategories} = require('./test-case');

const {
  MONGO_URI = 'mongodb://localhost:27017/nodejs-basic',
} = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
		console.log('connection to db successfully!');
		// loadUsers();
		return loadCategories();
	})
  .then((categories) => {
		console.log(categories.map(item => item.toJSON()));
		// loadUsers();
		return loadProducts();
	})
	.catch(err => console.log(err));
