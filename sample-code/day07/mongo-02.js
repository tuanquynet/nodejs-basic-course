const mongoose = require('mongoose');
const {User} = require('./models/user');

function createUser() {
  const user = {
    avatar: '',
    lastName: 'Tran',
    firstName: 'Hoang',
    dob: new Date(1990, 1, 2),
    gender: 'female',
    email: 'hoang@gmail.com',
    isEmailValidate: true,
    roles: [],
  };

  return User.create(user);
}

mongoose.connect('mongodb://localhost:27017/nordic-201905')
.then(() => {
  createUser().then(result => {
    console.log('result');
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
})
.catch(() => {
  // connect error
});
