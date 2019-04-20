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
    message: '<strong>Hello World</strong>',
  });
});

app.listen(port, () => console.log(`App is listening on port ${port}!`));
