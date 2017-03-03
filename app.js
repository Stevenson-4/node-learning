var express = require('express');
var config = require('./package.json').config;
var app = express();
var c = function() {
    console.log.apply(this, arguments);
};
var d = function() {
    console.dir.apply(this, arguments);
}

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