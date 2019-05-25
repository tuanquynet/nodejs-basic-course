```javascript
// find all document
db.products.find({});

// find all documents with exact field match
db.products.find({ categoryId: 'women' });

// using query operators
db.products.find(
	{ categoryId: { $in: ['men', 'women'] } }, 
	{ name: true, shortDescription: true, categoryId: true }
);
db.products.find({ salePrice: { $gte: 500, $lte: 600 } });

// using logical operator
// $or
db.products.find({ $or: [{ categoryId: 'men' }, { salePrice: 610 }] }, { categoryId: true, salePrice: true });
// $and assumed
db.products.find({ categoryId: 'accessories', salePrice: { $gt: 600 } });
```