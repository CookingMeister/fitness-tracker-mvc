const User = require('./user');
const Cardio = require('./cardio');
const Sleep = require('./sleep');
const Steps = require('./steps');
const Water = require('./water');
const Workout = require('./workout');

// connects all tables to user w/ foreign key
User.hasMany(Cardio, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

User.hasMany(Sleep, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

User.hasMany(Steps, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

User.hasMany(Water, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

User.hasMany(Workout, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

Cardio.belongsTo(User, {
    foreignKey: 'userId',
});

Sleep.belongsTo(User, {
    foreignKey: 'userId',
});

Steps.belongsTo(User, {
    foreignKey: 'userId',
});

Water.belongsTo(User, {
    foreignKey: 'userId',
});

Workout.belongsTo(User, {
    foreignKey: 'userId',
});

module.exports = {
    Cardio,
    Sleep,
    Steps,
    User,
    Water,
    Workout,
};