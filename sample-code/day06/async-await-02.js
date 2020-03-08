function doTask1() {
  return Promise.resolve({name: 'sleep'});
}

async function doTask() {
// function doTask() {
  const task1 = await doTask1();

  console.log('task1');
  console.log(task1);
  
  return task1;
}

const result = doTask();

result.then((res) => {
  console.log(res);
});