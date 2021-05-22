const { Model, DataTypes } = require("sequelize");
const sequelize = require('..config/connection');

class Design extends Model {}

Design.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        designs: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

module.exports = Design; 