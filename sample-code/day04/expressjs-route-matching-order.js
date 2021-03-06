const express = require('express');

const app = express();
const port = 3000;

// Move '/blog/tags' before '/blog/:postId'
app.get('/blog/tags/', function(req, res) {
  res.send('GET /blog/tags');
});

app.get('/blog/:postId', function(req, res) {
  res.send(req.params);
});

// app.get('/blog/tags/', function(req, res) {
//   res.send('GET /blog/tags/');
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
