var character = {
  name: 'Harry Potter',
  age: 38,
  gender: 'male',
  isMuggle: false,
  parents: null, // property supposed to be an Object
  dob: [1980, 6, 31], // month is zero based
  spouse: {
    name: 'Ginny Weasly',
    gender: 'female',
  },
  /* ... */
  children: [
    {
      name: 'James Potter',
      gender: 'male',
    },
    {
      name: 'Albus Potter',
      gender: 'male',
    },
    {
      name: 'Lily Potter',
      gender: 'female',
    },
  ],
  // getter
  get birthday() {
    return new Date(this.dob[0], this.dob[1], this.dob[2]);
  },
  // setter
  set birthday(value) {
    // convert data...
  },
  // ES5 method
  sayHi: function() {
    return `Hi! My name is ${this.name}`;
  },
  // new ES6 syntax for method
  callProtector() {
    return 'Expecto Patronum';
  },
};