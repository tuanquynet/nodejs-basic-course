const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const ProductSchema = new Schema({
	name: {type: String, required: true},
	image: String,
	thumbnail: String,
	shortDescription: String,
	// salePrice: Number,
	originalPrice: SchemaTypes.Number,
	images: [SchemaTypes.String],
	thumbnails: [SchemaTypes.String],
	// categoryId: SchemaTypes.ObjectId,
	categoryId: {
		// type: SchemaTypes.ObjectId,
		// TODO: should be the same type of category._id
		type: SchemaTypes.String,
		ref: 'Category',
		// }
	},
}, {
	toJSON: { virtuals: true },
	toObject: { virtuals: true }
});

ProductSchema.virtual('category', {
  ref: 'Category',
  localField: 'categoryId',
  foreignField: '_id',
  justOne: true,
  // match: { isActive: true }
});

ProductSchema.virtual('saleOff')
	.get(function() {
		return this.originalPrice ? (this.originalPrice - this.salePrice) / this.originalPrice : 0;
	});

const Product = mongoose.model('Product', ProductSchema, 'products');

module.exports = Product;
