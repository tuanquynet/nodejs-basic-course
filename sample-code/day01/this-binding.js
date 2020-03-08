var person = {
	name: 'Harry Potter',
	doSomething() {
		console.log('this');
		console.log(this);

		const self = this;
		// setTimeout(function() {
		// 	console.log('inside setTimeout this');
		// 	console.log(this);
		// 	console.log(`This is ${self.name}`);
		// }, 1000);

		function showMe() {
			console.log(`show me`);
			console.log(`${this.name}`);
		}

		showMe();

		return undefined;
	},
};

person.doSomething();


// var person = {
// 	name: 'Harry Potter',
// 	doSomething() {
// 		setTimeout((function() {
// 			console.log(`This is ${this.name}`);
// 		}.bind(this)), 1000);

// 		return undefined;
// 	},
// };

// person.doSomething();
