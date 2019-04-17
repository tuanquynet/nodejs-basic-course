app.get('/blog/:postId', function(req, res) {
  res.send(req.params);
});
app.get('/blog/tags/', function(req, res) {
  res.send('GET /blog/tags/');
});