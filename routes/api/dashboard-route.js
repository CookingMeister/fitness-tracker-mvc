const router = require('express').Router();
const { User, Water, Cardio, Sleep, Steps, Workout } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // Fetch data from your models
    const userData = (await User.findAll()) || [];
    const cardioData = (await Cardio.findAll()) || [];
    const workoutData = (await Workout.findAll()) || [];
    const waterData = (await Water.findAll()) || [];
    const sleepData = (await Sleep.findAll()) || [];
    const stepsData = (await Steps.findAll()) || [];

    // Pass the data to the EJS template
    res.render('dashboard', {
      categories: [
        { name: 'User', data: userData },
        { name: 'Cardio', data: cardioData },
        { name: 'Workout', data: workoutData },
        { name: 'Water', data: waterData },
        { name: 'Sleep', data: sleepData },
        { name: 'Steps', data: stepsData },
      ],
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
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
    res
      .status(500)
      .json({ message: 'Internal Server Error adding daily water intake!' });
  }
});

module.exports = router;
