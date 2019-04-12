var person = {
	name: 'Harry Potter',
	doSomething() {
		setTimeout((function() {
			console.log(`This is ${this.name}`);
		}.bind(this)), 1000);

		return undefined;
	},
};

person.doSomething();
