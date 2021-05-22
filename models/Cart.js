const { Model, DataTypes } = require("sequelize");
const sequelize = require('..config/connection');

class Cart extends Model {}

Cart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        item: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Iventory',
                key: 'id'
            }
        }, 
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        design: {
            allowNull: false,
            references: {
                model: 'Design',
                key: 'id'
            }
        }
    }
);


module.exports = Cart; 