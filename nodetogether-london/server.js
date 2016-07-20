// server.js

var port = process.env.PORT || '8000';
var host = process.env.HOST || '0.0.0.0';
var Express = require('express');
var app = Express();
console.log('Yay it worked!');

var rules = require('./app/index.js');
app.use(rules);

app.listen(port, host);
