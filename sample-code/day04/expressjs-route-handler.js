
app.get(
  '/example/c',
  function callback(req, res, next) {
  	console.log('Do something at this step');
		next(); // make sure next is called
	},
  anotherCallback,
	[() => {}, () => {}], // callbacks in array will be flatten
);