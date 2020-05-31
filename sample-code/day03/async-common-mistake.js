app.get('/about', function(req, res) {
	const aboutData = { title: 'Hey', message: 'Hello there!' }; // synchronous
	res.render('index', aboutData);
});

app.get('/post/:id', function(req, res) {
	let postData;
	Posts.findOne({ id: req.params.id }, function(err, result) {
		// !!! asynchronous
		postData = result;
	});
	res.render('post', postData);
});
