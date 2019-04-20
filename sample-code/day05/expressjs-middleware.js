var express = require('express');
var app = express();

// application-wise, generic, any routes / methods middleware
app.use(function(req, res, next) {
  console.log('Request:', req.method, req.url);
  next();
});

// application-wise, route specific middleware
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, () => console.log('Listening on localhost:3000'));
