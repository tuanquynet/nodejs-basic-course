// Route path: Simple string
app.get('/about', function(req, res) {
  res.send('GET request to about page');
});

// Route path: String patterns: ? + * ()
app.get('/node(js)?', function(req, res) {
  res.send('GET request to: node or nodejs page');
});

// Route path: Regular expression
app.get(/shop/i, function(req, res) {
  res.send('GET request to: shop or SHOP or Shop');
});
