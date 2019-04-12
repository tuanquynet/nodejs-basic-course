const fs = require('fs');
const content = 'Node.js is simple!';

fs.writeFile('test.txt', content, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('success');
});

try {
  const data = fs.writeFileSync('test.txt', content);
  console.log('success');
} catch (err) {
  console.error(err);
}
