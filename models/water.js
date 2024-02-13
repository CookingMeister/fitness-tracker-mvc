const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Water extends Model {}

Water.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        // day: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         isAlpha: true,
        //     },
        // },
        amount: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true,
            },
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'water',
    }
);

module.exports = Water;