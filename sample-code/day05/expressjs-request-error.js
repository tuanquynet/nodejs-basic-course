// Place these middleware handlers at the bottom // 404
app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  return res.status(404).send(`<h1>404 Error<h1><h3>Route ${req.url} Not found.</h3>`);
});

// 500 - Any server error
app.use(function(err, req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  return res.status(500).send(`<h1>Server error<h1><p>${err}<p>`);
});