const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Cardio extends Model {}

Cardio.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        exercise_name: {
            type: DataTypes.STRING,
        },
        distance: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: true,
            },
        },
        time: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: true,
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
        modelName: 'cardio',
    }
);

module.exports = Cardio;