app.get('/products', (req, res) => {
  res.render('products', [
    { name: 'Item 1', price: 59000 },
    { name: 'Item 2', price: 32700 },
  ]);
});