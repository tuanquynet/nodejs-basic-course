const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const ProductSchema = new Schema({
	name: {type: String, required: true},
	image: String,
	thumbnail: String,
	shortDescription: String,
	categoryId: String,
	salePrice: Number,
	originalPrice: SchemaTypes.Number,
	originalPrice: SchemaTypes.Number,
	images: [SchemaTypes.String],
	thumbnails: [SchemaTypes.String],
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
