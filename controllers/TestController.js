var router = require('express').Router();
var db = require('../dal/db');
var Tables = require('../dal/tables');
var Util = require('../helpers/Util');
var Models = require('../dal/models');

router.get('/', function (req, res) {
    console.log('hiiii');
    db
    .select(Tables.emp, ['id', 'name'])
    .then(function(recs){
        console.log(recs);
        return res.json(recs);
    })
    .catch(function(err){
        return res.json(err);
    });
});

router.post('/emp', function (req, res) {
    var obj = {
        id: 1004,
        name: "Testdfds  dsf ",
        age: 12,
        exp: 12,
        salary: 5000,
        // karma: 1
    };
    var fields = [
        'id',
        'name',
        'age',
        'exp',
        'salary',
        'karma'
    ];
    var values = Util.extractValuesUsingModel(fields, obj, Models.Emp);
    var query = "insert into " + Tables.emp + " (" + fields.join(',') + ") values (" + values.join(',') + ")";
    console.log(query);
    db
    .query(query)
    .then(function(recs){
        return db.select(Tables.emp);
    })
    .then(function(recs) {
        return res.json(recs.filter(function(rec) {
            return rec.id === obj.id;
        }));
    })
    .catch(function(err){
        return res.json(err);
    });
});

module.exports = router;