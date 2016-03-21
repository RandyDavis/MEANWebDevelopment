/**
 * Created by randy on 3/21/16.
 */
'use strict';

var express = require('express');
var app = express();

var hasName = function (req, res, next) {
    if (req.param('name')) {
        next();
    } else {
        res.send('What is your name?');
    }
};

var sayHello = function (req, res, next) {
    res.send('Hello ' + req.param('name'));
};

app.get('/', hasName, sayHello);
app.listen(3000);
console.log('Server running at http://localhost:3000/');

module.exports = app;