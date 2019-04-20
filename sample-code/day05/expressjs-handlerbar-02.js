
const express = require('express');

const app = express();
const port = 3000;

// `npm install hbs`
app.set('view engine', 'hbs');
// optionally set the views folder, default app.set('views', './views');
app.set('views', __dirname + '/views');

// render a view, with the view template ‘./views/index.hbs’
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Express Application',
    message: 'Hello World',
  });
});

app.get('/products', (req, res) => {
  res.render('products', {
    products: [
      { name: 'Item 1', price: 59000 },
      { name: 'Item 2', price: 32700 },
    ]
  });
});

app.listen(port, () => console.log(`App is listening on port ${port}!`));
