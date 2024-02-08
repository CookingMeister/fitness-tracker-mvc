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
        day: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
            },
        },
        exercise_name: {
            type: DataTypes.STRING,
            validate: {
                isAlpha: true,
            },
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
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cardio',
    }
);

module.exports = Cardio;