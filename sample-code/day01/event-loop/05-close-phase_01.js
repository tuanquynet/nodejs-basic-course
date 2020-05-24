const fs = require('fs')
const { createServer, closeServer } = require('../../helpers/socket/socket-server')
const { createClient, closeClient } = require('../../helpers/socket/socket-client')

global.count = 0

fs.readFile('./sample-code/data/no-data-file', () => {
  // Poll phase
  console.log('Poll phase');

  // macro task but less priority, handled at timers phase
  setTimeout(() => {
    console.log(`#${++count} run via setTimeout`)
  }, 0);

  // create socket server
  createServer()

  // create client connecting to socket server and close right away
  createClient({port: 3001})

  // create client connecting to socket server but with wrong port
  // we can not expect error event trigger right away, because it is async I/O operation and take time.
  //    it can do some attempts behind the scene before trigger error
  // createClient({port: 3002})


  // setImmediate will be performed prior to setTimeout, because we are Poll and then early next phase is setImmediate phase
  setImmediate(() => {
    console.log(`#${++global.count} run via setImmediate`)

    setImmediate(() => {
      console.log(`#${++global.count} run via setImmediate again`)
    });

    // close TCP connection, it should happen prior to setTimeout( , 0) and 'setImmediate again' because it is sync operation
    // closeServer()

    // close TCP connection, it should happen prior to setTimeout( , 0) and 'setImmediate again' because it is sync operation
    closeClient()
  });

})
