const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Workout extends Model {}

Workout.init(
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
        reps: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true,
            },
        },
        sets: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true,
            },
        },
        weight: {
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
        modelName: 'workout',
    }
);

module.exports = Workout;