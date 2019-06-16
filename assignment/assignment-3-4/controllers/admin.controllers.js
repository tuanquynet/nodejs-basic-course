// const products = require('../data/products.json');
const categories = require('../data/categories.json');
const users = require('../data/users.json');
const ProductModel = require('../models/product');
const UserModel = require('../models/user');
const CategoryModel = require('../models/category');

const countProduct = async () => {
  return ProductModel.count().exec();
};

const countUser = async () => {
  return UserModel.count().exec();
};

const countCategory = async () => {
  return CategoryModel.count().exec();
};

exports.getAdminPage = (req, res) => {
  Promise
    .all([
      countProduct(),
      countUser(),
      countCategory(),
    ])
    .then(([productsTotal, categoriesTotal, usersTotal]) => {
      res.render('admin', {
        productsTotal: products.body.length,
        categoriesTotal: categories.body.length,
        usersTotal: users.body.length,
        ordersTotal: 0
      });
    });
}

//Total
exports.getProductsPage = (req, res) => {
  ProductModel
    .find({})
    .limit(50)
    .exec()
    .then((products) => {
      res.render('products', {
        products,
      });
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
