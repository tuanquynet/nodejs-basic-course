const fs = require('fs')
let count = 0

// Timer phase, we can try with 2ms or 3ms to see different result
setTimeout(() => {
  console.log('Timer phase');

  // micro task, handled at right after NodeJS finish the processing phase but after process.nextTick
  Promise.resolve('done')
    .then(() => {
      console.log(`#${++count} run via promise`)
    })
    .then(() => {
      console.log(`#${++count} run via promise`)
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
}, 2);

// read files in async will happen at Poll phase
fs.readFile('./sample-code/data/no-data', () => {
  console.log(`#${++count} read no-data 1 completely`);
})

// read files in async will happen at Poll phase
fs.readFile('./sample-code/data/no-data', () => {
  console.log(`#${++count} read no-data 2 completely`);
})

// read files in async will happen at Poll phase
fs.readFile('./sample-code/data/large-file', () => {
  console.log(`#${++count} read larger file completely`);
})