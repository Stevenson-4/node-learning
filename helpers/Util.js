var dbUtil = require('../dal/dbUtil');

module.exports = {
    extractValues: function(fields, source) {
        var values = [];
        for(var i in fields) {
            var value = source[fields[i]];
            if(typeof value === 'string') {
                value = "'" + value + "'";
            }
            values.push(value || null);
        }
        return values;
    },

    extractValuesUsingModel: function(fields, source, model) {
        var values = [];
        for(var i in fields) {
            var field = fields[i];
            var value = source[field];
            if(model[field] === String) {
                value = "'" + value + "'";
            }
            var defaultVal = dbUtil.getDbDefaultValue(model[field]);
            console.log(defaultVal);
            values.push(value || defaultVal);
        }
        return values;
    }
};