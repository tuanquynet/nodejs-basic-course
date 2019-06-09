const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nordic-201905')
.then(() => {
  // connect success
  // let’s do some query
  console.log('mongoose');
  console.log(mongoose);
})
.catch(() => {
  // connect error
});
 