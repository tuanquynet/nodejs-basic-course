const User = require('../models/user');
const Product = require('../models/product');
const Category = require('../models/category');

module.exports = {
 loadUsers: () => {
	  User.find({})
	   .limit(5)
	   .exec()
	   .then((results) => {
	    console.log('Results');
	    console.log(results.map(item => item.toJSON()));
	   });
 },
 loadProducts: () => {
		return Product.find({})
			.populate('category', 'name')
			.populate('categoryId', 'name')
			.limit(5)
			// .exec()
			.then((results) => {
				console.log('Results');
				console.log(JSON.stringify(results));
			});
 },
 loadCategories: () => {
		return Category.find({})
			.limit(5)
			.then((results) => {
				console.log('Results');
				console.log(JSON.stringify(results));

				return results;
			});
 }
};
