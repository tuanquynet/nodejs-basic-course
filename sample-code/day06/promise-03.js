new Promise((resolve, reject) => {
  console.log('Initial');
  resolve();
})
  .then(() => {
    throw new Error('Something failed');
    console.log('Do this');
  })
  .catch(() => {
    console.log('Do that');
  })
  .then(() => {
    console.log('Do this, no matter what happened before');
  });