const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nordic')
.then(() => {
  // connect success
  // let’s do some query
})
.catch(() => {
  // connect error
});
 