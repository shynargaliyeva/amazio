var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

// Put API routes here
app.use('/api', require('./routes/api'));

// "catch-all" routes is necessary for a 
//SPA's client-side routing to properly work
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 300 during
// development to avoid collision with React's dev server
var port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});