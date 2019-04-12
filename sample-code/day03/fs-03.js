const fs = require('fs');

const content = 'Working with fs is easy!';

fs.appendFile('test.txt', content, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('success');
});
