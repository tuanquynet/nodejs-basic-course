const express = require('express');
const app = express();

// from root, match the directory path
app.use(express.static('public'));
// virtual prefix
app.use('/static', express.static('public'));