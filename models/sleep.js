const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Sleep extends Model {} 

Sleep.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        hours: {
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
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'sleep',
    }
);

module.exports = Sleep;