const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Steps extends Model {} 

Steps.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
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
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'steps',
    }
);

module.exports = Steps;