const fs = require('fs');
fs.stat('test.txt', (err, stats) => {
  if (err) {
    console.error(err);
return; }
  const info = {
    isFile: stats.isFile(),
    isDirectory: stats.isDirectory(),
    isSymbolicLink: stats.isSymbolicLink(),
    size: stats.size,
    mode: stats.mode.toString(8),
};
  console.table(info);
});