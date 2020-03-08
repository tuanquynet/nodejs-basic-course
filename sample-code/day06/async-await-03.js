function doTask1() {
  return Promise.reject('task2 failed');
}

async function doTask() {
  try {
    const task1 = await doTask1();

    return task1;
  } catch (err) {
    console.log('error');
    console.error(err);
  }
}

doTask().then((res) => {
  console.log(res);
});