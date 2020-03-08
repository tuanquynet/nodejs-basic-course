const express = require('express');

const app = express();
const port = 3000;

const anotherCallback = (req, res, next) => {
	// HANG app
	res.json({status: 'done'})
};

app.get(
  '/example/c',
  function callback(req, res, next) {
  	console.log('Do something at this step');
		// next(); // make sure next is called
	},
  anotherCallback,
	// [() => {}, () => {}], // callbacks in array will be flatten
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));