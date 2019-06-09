const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define schema with supported data type
const userSchema = new Schema({
  avatar: String,
  lastName: String,
  firstName: String,
  dob: Date,
  gender: String,
  email: String,
  isEmailValidate: Boolean,
  roles: [String],
});

const User = mongoose.model('User', userSchema);

console.log(User);

module.exports = {
	User,
};