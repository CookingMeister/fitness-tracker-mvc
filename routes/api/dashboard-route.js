const router = require('express').Router();
const { transformAuthInfo } = require('passport');
const { User, Water, Cardio, Sleep, Steps, Workout } = require('../../models');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    // Fetch data from your models
    const userData = (await User.findAll()) || [];
    const cardioData = (await Cardio.findAll()) || [];
    const workoutData = (await Workout.findAll()) || [];
    const waterData = (await Water.findAll()) || [];
    const sleepData = (await Sleep.findAll()) || [];
    const stepsData = (await Steps.findAll()) || [];

    if (req.session.loggedIn) {
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
    } else {
      // Pass the data to the EJS template
      res.render('dashboard', {
        categories: [
          { name: 'Cardio', data: cardioData },
          { name: 'Workout', data: workoutData },
          { name: 'Water', data: waterData },
          { name: 'Sleep', data: sleepData },
          { name: 'Steps', data: stepsData },
        ],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

//! water requests
// router.get('/water/:id', async (req, res) => {
//     try {
//         const userId = req.session.userId;
//         const dateInput = req.params.id;

//         console.log(dateInput);
//         console.log(userId);
//         const water = await Water.findAll({
//             where: {
//                 created_at: {
//                     [Op.between]: [dateInput, "2024-02-16"],
//                 }
//             }
//         });

//         // console.log('Water data:', water);

//         // if (!water) {
//         //     return res.status(404).send('Water not found');
//         // }

//         // res.status(200).json(water);
        
//     } catch (error) {
//         console.error('Error processing water data:', error);
//         res.status(500).send('Error processing water data');
//     }
// });

router.post('/water', async (req, res) => {
    console.log(req.body);
    const userId = req.session.userId;

    try {
        const addWater = await Water.create({
            amount: req.body.wtrInput,
            userId: userId,
        });
        res.status(201);
    } catch (error) {
        console.error('Error adding daily water intake:', error);
        res.status(500).json({ message: 'Internal Server Error adding daily water intake!' });
    };
});

// router.put('/water/:id', (req, res) => {

// });
 
// router.delete('/water/:id', (req, res) => {

// });

//! sleep requests

// router.get('/sleep/:id', (req, res) => {

// });

router.post('/sleep', async (req, res) => {
    console.log(req.body);
    const userId = req.session.userId;
    try {
        const addSleep = await Sleep.create({
            hours: req.body.slpInput,
            userId: userId,
        })
        res.status(201);
    } catch (error) {
        console.error('Error adding daily sleep:', error);
        res.status(500).json({ message: 'Internal Server Error adding daily sleep!' });
    };
});

// router.put('/sleep/:id', (req, res) => {

// });

// router.delete('/sleep/:id', (req, res) => {

// });

//! cardio requests

// router.get('/cardio/:id', (req, res) => {

// });

router.post('/cardio', async (req, res) => {
    console.log(req.body);
    const userId = req.session.userId;
    try {
        const addCardio = await Cardio.create({
            exercise_name: req.body.exercise,
            distance: req.body.distance,
            time: req.body.time,
            userId: userId,
        })
        res.status(201);
    } catch (error) {
        console.error('Error adding Cardio:', error);
        res.status(500).json({ message: 'Internal Server Error adding Cardio!' });
    };
});

// router.put('/cardio/:id', (req, res) => {

// });

// router.delete('/cardio/:id', (req, res) => {

// });

//! steps requests

// router.get('/steps/:id', (req, res) => {

// });

router.post('/steps', async (req, res) => {
    console.log(req.body);
    const userId = req.session.userId;
    try {
        const addSteps = await Steps.create({
            amount: req.body.steps,
            userId: userId,
        })
        res.status(201);
    } catch (error) {
        console.error('Error adding steps:', error);
        res.status(500).json({ message: 'Internal Server Error adding steps!' });
    };
});

// router.put('/steps/:id', (req, res) => {

// });

// router.delete('/steps/:id', (req, res) => {

// });

//! workout requests

// router.get('/workout/:id', (req, res) => {

// });

router.post('/workout', async (req, res) => {
    console.log(req.body);
    const userId = req.session.userId;
    try {
        const addWorkout = await Workout.create({
            exercise_name: req.body.exercise,
            reps: req.body.reps,
            sets: req.body.sets,
            userId: userId,
        })
        res.status(201);
    } catch (error) {
        console.error('Error adding Workout:', error);
        res.status(500).json({ message: 'Internal Server Error adding Workout!' });
    };
});

// router.put('/workout/:id', (req, res) => {

// });

// router.delete('/workout/:id', (req, res) => {

// });

module.exports = router;
