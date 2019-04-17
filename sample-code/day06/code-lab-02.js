function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    false.readFile(path, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}
