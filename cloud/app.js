var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('hello Jenkins8.');
});

app.listen();

module.exports = app;

