/**
 * Created by randy on 3/21/16.
 */
'use strict';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    db = mongoose(),
    app = express();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');