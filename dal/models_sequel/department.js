module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Department', {
        id: DataTypes.NUMBER,
        dept: DataTypes.STRING,
        emp_id: DataTypes.NUMBER
    });
};