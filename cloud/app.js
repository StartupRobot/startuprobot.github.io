var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('hello Jenkins2.');
});

app.listen();

