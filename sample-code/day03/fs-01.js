const fs = require('fs');
// async
fs.readFile('./package.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// sync
try {
  const data = fs.readFileSync('./package.json', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
