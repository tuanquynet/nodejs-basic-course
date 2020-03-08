async function doTask() {
  return 'done';
}

const result = doTask();

console.log('result is a promise');
console.log(result);

// We can use then to retrieve the result
result.then((res) => {
  console.log(res);
});