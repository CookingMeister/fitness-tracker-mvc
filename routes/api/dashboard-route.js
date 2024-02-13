const router = require('express').Router();
const { User, Water, Cardio, Sleep, Steps, Workout } = require('../../models');

router.get('/', (req, res) => {
    res.render('dashboard');
});

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const addWater = await Water.create({
            amount: req.body.wtrInput,
        });
        res.status(201).json(addWater);
    } catch (error) {
        console.error('Error adding daily water intake:', error);
        res.status(500).json({ message: 'Internal Server Error adding daily water intake!' });
    };
});

module.exports = router;