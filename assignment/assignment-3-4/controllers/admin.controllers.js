var products = require('../data/products.json');
var categories = require('../data/categories.json');
var users = require('../data/users.json');

exports.getAdminPage = (req, res) => {
  res.render('admin', {
    productsTotal: products.body.length,
    categoriesTotal: categories.body.length,
    usersTotal: users.body.length,
    ordersTotal: 0
  });
}

//Total
exports.getProductsPage = (req, res) => {
  res.render('products', {
    products: products.body
  });
}

exports.getCategoriesPage = (req, res) => {
  res.render('categories', {
    categories: categories.body
  });
}

exports.getUsersPage = (req, res) => {
  res.render('users', {
    users: users.body
  });
}

//Details
exports.getProductDetails = (req, res) => {
  const product = products.body.find(user => user._id === req.params.id);
  res.render('productDetails', {
    product: product
  });
}

exports.getUserDetails = (req, res) => {
  const user = users.body.find(user => user._id === req.params.id);
  res.render('usersDetails', {
    user: user
  });
}
