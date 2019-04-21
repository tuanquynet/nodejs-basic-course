const fs = require('fs');

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

readFilePromise('./package.json')
  .then(data => {
    console.log('data');
    console.log(data);
  });