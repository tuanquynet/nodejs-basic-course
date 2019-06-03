
const bodyParser = require('body-parser'); // parsing post body middleware app.use(bodyParser.json());
const express = require('express');

const app = express();
const port = 3000;

app.use(bodyParser.json({}));

// {username: 'trongthanh', password: 'password'}
app.post('/login', (req, res) => {
  if (req.body) {
    console.log('username:', req.body.username);
    console.log('password:', req.body.password); // simulate login success
    if (req.body.password === 'password') {
      return res.json({ status: 'success' });
    }
  }
  return res.json({ status: 'failed' });
});


app.listen(port, () => console.log(`App is listening on port ${port}!`));
