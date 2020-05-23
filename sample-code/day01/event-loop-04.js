const fs = require('fs')
let count = 0

fs.readFile('./sample-code/data/no-data-file', () => {
  // Poll phase
  console.log('Poll phase');
  
  // micro task, handled at right after NodeJS finish the processing phase but after process.nextTick
  Promise.resolve('done')
    .then(() => {
      console.log(`#${++count} run via promise`)
    })
    .then(() => {
      console.log(`#${++count} run via promise`)
    })

  // micro task but less priority, handled at timers phase
  setTimeout(() => {
    console.log(`#${++count} run via setTimeout`)
  }, 0);

  // setImmediate will be performed prior to setTimeout, because we are Poll and then early next phase is setImmediate phase
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
  fs.readFile('./sample-code/data/no-data-file', () => {
    console.log(`#${++count} read file completely`);
  })
})
