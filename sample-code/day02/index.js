const module1 = require('./module1');
console.log(module1);

// // use default
// const module1Default = require('./module1').default;
// console.log(module1Default);

const module2 = require('./module2');
console.log(module2);

// load json file
const users = require('./data/users.json');
console.log('user');
console.log(users);