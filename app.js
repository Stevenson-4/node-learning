var express = require('express');
var config = require('./package.json').config;
var app = express();
var c = function() {
    console.log.apply(this, arguments);
};
var d = function() {
    console.dir.apply(this, arguments);
}

app.use('/', function(req,res){
	return res.send('Stevenson');
})

// Start the server
app.listen(config.port, function() {
    c('Server is listening on ' + config.port);
});