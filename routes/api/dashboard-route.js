const router = require('express').Router();
const { User, Water, Cardio, Sleep, Steps, Workout } = require('../../models');

router.get('/', (req, res) => {
    res.render('dashboard');
});

module.exports = router;