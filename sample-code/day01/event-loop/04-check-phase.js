const fs = require('fs')
let count = 0

setImmediate(() => {
  console.log('Immediate phase');
  
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

  // we are at `immediate phase` but setImmediate statement will not executed right away at this phase 
  // it will be processed in next loop
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
