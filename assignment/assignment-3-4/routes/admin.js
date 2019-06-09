const express = require('express');

const router = express.Router();
const AdminController = require('../controllers/admin.controllers');

//Total
router.get('', AdminController.getAdminPage);
router.get('/products', AdminController.getProductsPage);
router.get('/categories', AdminController.getCategoriesPage);
router.get('/users', AdminController.getUsersPage);

//Details
router.get('/products/:id', AdminController.getProductDetails);
router.get('/users/:id', AdminController.getUserDetails);

module.exports = router;
