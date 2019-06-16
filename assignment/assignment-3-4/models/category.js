const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const CategorySchema = new Schema({
	_id: {type: String, required: true},
	name: {type: String, required: true},
	description: String,
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
