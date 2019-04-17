const promise = new Promise((resolve, reject) => {
  doSomethingAsync(resolve, reject);
  // resolve(result)
  // reject(err)
});

// prettier-ignore
promise
  .then((result) => console.log('DONE', result))
  .catch((err) => console.log('Error', err));