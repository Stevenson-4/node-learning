module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Emp', {
        id: DataTypes.NUMBER,
        name: DataTypes.STRING,
        age: DataTypes.NUMBER,
        exp: DataTypes.NUMBER,
        salary: DataTypes.NUMBER,
        karma: DataTypes.NUMBER
    });
};