var wrench        = require('wrench');
var path      = require('path');
var db = require('../db');
var sequelize = db.sequelize;

var models = {};

// Dynamically requiring every file in current folder.
var files = wrench.readdirSyncRecursive(__dirname);

for(var x in files) {
    var file = files[x];
    // Preventing index.js file
    if(path.basename(__filename) !== file) {
        var key = path.basename(file, '.js');
        console.log(key);
        console.log(file);
        // var model = sequelize.import(path.join(__dirname, file));
        // models[key] = sequelize.import(path.join(__dirname, file));
       models[key] =  sequelize.import(path.join(__dirname, file));
    }
}
console.log(models);
module.exports = models;