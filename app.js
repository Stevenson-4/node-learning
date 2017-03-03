/**
 * https://expressjs.com/en/4x/api.html
 */
var express = require('express');

/**
 * https://github.com/expressjs/morgan
 */
var morgan = require('morgan');

var app = express();

var config = require('./package.json').config;
var c = function() {
    console.log.apply(this, arguments);
};
var d = function() {
    console.dir.apply(this, arguments);
}

// Attaching morgan as middleware to the app
app.use(morgan('tiny'));

app.get('/', function(req,res){
	return res.send('Stevenson');
});

app.post('/user', function(req,res){
	return res.send('Stevenson son nellli');
});

// Start the server
app.listen(config.port, function() {
    c('Server is listening on ' + config.port);
});