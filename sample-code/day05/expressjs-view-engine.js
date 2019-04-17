const express = require('express');

// `npm install hbs`
app.set('view engine', 'hbs');

// optionally set the views folder, default app.set('views', './views');
// render a view, with the view template ‘./views/index.hbs’
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Express Application',
    message: 'Hello World'
  });
});
