/*
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
*  See LICENSE in the source repository root for complete license information.
*/

var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');

// Initialize variables.
var port = 30662; // process.env.PORT || 30662;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Set the front-end folder to serve public assets.
app.use(express.static('/'))

// Set up our one route to the index.html file.
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/basic', function (req, res) {
    res.sendFile(path.join(__dirname + '/demo-basic.html'));
});
app.get('/templating', function (req, res) {
    res.sendFile(path.join(__dirname + '/demo-templating.html'));
});
app.get('/action', function (req, res) {
    res.sendFile(path.join(__dirname + '/demo-actionbuttons.html'));
});
app.get('/action2', function (req, res) {
    res.sendFile(path.join(__dirname + '/demo-actionbuttons-2.html'));
});
app.get('/wizard', function (req, res) {
    res.sendFile(path.join(__dirname + '/demo-wizard.html'));
});
// Start the server.
app.listen(port);
console.log('Listening on port ' + port + '...');
