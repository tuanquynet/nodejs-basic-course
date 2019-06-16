const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define schema with supported data type
const UserSchema = new Schema({
  avatar: String,
	firstName: {
		type: String,
		required: true,
	},
	lastName: String,
  dob: Date,
  gender: String,
  email: String,
  isEmailValidate: Boolean,
  roles: [String],
});

UserSchema.virtual('fullName')
  .get(function() {
		return this.firstName + ' ' + this.lastName;
	})
	.set(function(v) {
		this.firstName = v.substr(0, v.indexOf(' '));
		this.lastName = v.substr(v.indexOf(' ') + 1);
	});

UserSchema.pre('save', function () {
	console.log('pre save');
});

UserSchema.index({email: 1});

const User = mongoose.model('User', UserSchema);
User.ensureIndexes((err) => {
	console.log('ENSURE INDEX');
	if (err) {
		console.log(err);
	}
});

console.log(User);

module.exports = User;
