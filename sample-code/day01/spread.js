const people = {
  name: '',
  eat() {
    console.log('eat 1');
  }
};

const student = {
  id: '',
  eat() {
    console.log('eat 2');
  }
}

// normal way to define new object from other objects
// const combined = {
//   name: people.name,
//   eat: people.eat,
// }

const combined = {
  ...people,
  ...student,
  eat() {
    console.log('eat 3')
  }
}

combined.eat();

const list1 = ['a', 'b'];
const list2 = [...list1, 'c', 'd'];

console.log(list2);