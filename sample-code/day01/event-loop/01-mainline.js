const fs = require('fs');

// demonstrate main file execution
(function mainline() {

  let count = 0
  // micro task, handled at right after NodeJS finish the processing phase but after process.nextTick
  Promise.resolve('done')
    .then(() => {
      console.log(`#${++count} promise resolve`)
    })
    .then(() => {
      console.log(`#${++count} promise resolve`)
    })
  
  Promise.reject('fail')
    .catch(() => {
      console.log(`#${++count} promise reject`)
    })
  
  // macro task but less priority, handled at timers phase
  setTimeout(() => {
    console.log(`#${++count} run via setTimeout`)
  }, 0);
  
  setImmediate(() => {
    console.log(`#${++count} run via setImmediate`)
  });
  
  // macro task, performed immediately
  console.log(`#${++count} hello`)
  
  // micro task, handled at right after NodeJS finish the processing phase
  process.nextTick(() => {
    console.log(`#${++count} next tick`);
  })
  
  // read files in async will happen at Poll phase
  fs.readFile('./package.json', () => {
    console.log(`#${++count} read file completely`);
  })  
})()