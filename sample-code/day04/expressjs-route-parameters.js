// Route parameters must be made up of “word characters” ([A-Za-z0-9_])
app.get('/blog/:author/:postId', function(req, res) {
  res.send(req.params);
});

app.get('/booking/:from-:to', function(req, res) {
  res.send(req.params);
});
