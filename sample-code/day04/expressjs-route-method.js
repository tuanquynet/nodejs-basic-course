const express = require('express');

const app = express();
const port = 3000;


// Example: GET method route
app.get('/', function(req, res) {
  res.send('GET request to the homepage');
});

// Example: GET method route
app.post('/', function(req, res) {
  res.send('POST request to the homepage');
});

// Example: POST method route
app.get('/products', function(req, res) {
  res.json({products: [{name: 'bag'}]});
});

// Example: POST method route
app.post('/products', function(req, res) {
  res.json({product: {name: 'bag'}});
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
