const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());
// set cookie from server
app.get('/shopping-cart', (req, res) => {
  res.cookie('session', 1234);
  res.send('Cookie set');
});

// read cookie from client
app.get('/checkout', (req, res) => {
  // res.send(`cookie ${req.headers.cookie}`);
  res.send(`cookie ${JSON.stringify(req.cookies)}`);
});

app.listen(port, () => console.log(`App is listening on port ${port}!`));
