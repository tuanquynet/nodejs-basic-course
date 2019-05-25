// function expression
let sum = function(a, b) {
	return a + b;
};

 // arrow function with block body
 let sum = (a, b) => {
	console.log('');
	return a + b;
 };

 // arrow function with return expression
const sum = (a, b) => {
	var result = a + b;
	return result;
};

const sum = (a, b) => (a+b);

var result = sum(1, Math.max(1,2));
