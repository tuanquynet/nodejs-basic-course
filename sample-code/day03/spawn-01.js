const { exec } = require('child_process');

exec('ls -l', (error, stdout, stderr) => {
  console.log(stdout);
});