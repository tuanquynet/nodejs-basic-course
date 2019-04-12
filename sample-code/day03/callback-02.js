// asynchronous callback
setTimeout(() => {
  console.log('Harry');
}, 0);
process.nextTick(() => {
  console.log('Ron');
});
console.log('Hermione');