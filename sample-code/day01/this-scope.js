var person = {
  name: 'Harry Potter',
  sayHi(toPerson) {
    console.log(`Hi! My name is ${this.name}`);
    console.log(`${toPerson}, how are you?`);
    //console.log(`This is ${this}`);
}, };

person.sayHi('Khanh');

//-> Hi! My name is Harry Potter
var sayHi = person.sayHi;
sayHi();

//-> Hi! My name is undefined
var anotherPerson = {
 name: 'Hermione',
};

anotherPerson.hi = person.sayHi;

anotherPerson.hi();
