const net = require('net');
let client;

function createClient({port = 3001} = {}) {
  client = net.createConnection({ port }, () => {
    // 'connect' listener.
    console.log(`#${++global.count || ''} connected to server!`);
  });
  
  client.on('data', (data) => {
    console.log(data.toString());
    client.end();
  });
  
  client.on('close', () => {
    console.log(`#${++global.count} close client`);

    // micro task, handled at right after NodeJS finish the processing phase
    process.nextTick(() => {
      console.log(`#${++global.count} next tick right after close client`);
    })
  })

  client.on('end', () => {
    console.log('==== socket end ====');
    // console.log(`#${++global.count || ''} disconnected from server`);

    // micro task, handled at right after NodeJS finish the processing phase
    process.nextTick(() => {
      console.log(`#${++count} next tick in socket end`);
    })

    // setImmediate will be performed prior to setTimeout, because we are Poll and then early next phase is setImmediate phase
    setImmediate(() => {
      console.log(`#${++global.count} run via setImmediate in socket end`)
      console.log('///==== socket end ====');
    });
  });  
  
  client.on('error', () => {
    console.log('==== socket client error ====');
    console.log(`#${++global.count || ''} error when connecting to server`);

    // micro task, handled at right after NodeJS finish the processing phase
    process.nextTick(() => {
      console.log(`#${++count} next tick`);
    })

    // setImmediate will be performed prior to setTimeout, because we are Poll and then early next phase is setImmediate phase
    setImmediate(() => {
      console.log(`#${++global.count} run via setImmediate`)
    });
  });  
}

function closeClient() {
  client.destroy()
}

module.exports = {
  createClient,
  closeClient,
}