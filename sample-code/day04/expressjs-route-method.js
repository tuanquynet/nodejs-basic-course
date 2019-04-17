// Example: GET method route
app.get('/', function(req, res) {
  res.send('GET request to the homepage');
});

// Example: POST method route
app.post('/', function(req, res) {
  res.send('POST request to the homepage');
});
