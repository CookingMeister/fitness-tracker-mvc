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
        modelName: 'workout',
    }
);

module.exports = Workout;