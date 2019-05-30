const express = require('express');
const app = express();

const port = 3000;

// from root, match the directory path
app.use(express.static(__dirname + '/../public/'));
// virtual prefix
app.use('/static', express.static('public'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
