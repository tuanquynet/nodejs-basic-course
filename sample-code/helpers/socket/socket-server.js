const net = require('net');
const fs = require('fs');
let server;

function createServer({port = 3001} = {}) {
  server = net.createServer((socket) => {
    // try to trigger TCP end to check if it is executed at close phase
    socket.end('goodbye\n');
  }).on('error', (err) => {
    // Handle errors here.
    throw err;
  });

  server.on('close', () => {
    console.log(`#${++global.count} close server`)

    // micro task, handled at right after NodeJS finish the processing phase
    process.nextTick(() => {
      console.log(`#${++global.count} next tick right after close server`);
    })
  })

  server.listen(port, () => {
    console.log('opened server on', server.address());
  });
}

function closeServer(params) {
  server.close();
}

module.exports = {
  createServer,
  closeServer,
}