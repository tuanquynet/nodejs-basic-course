fs.readFile('package.json', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data); //-> Buffer object
  console.log(data.toString('utf8'));
});