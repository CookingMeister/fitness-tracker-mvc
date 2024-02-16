const router = require('express').Router();
const { transformAuthInfo } = require('passport');
const { User, Water, Cardio, Sleep, Steps, Workout } = require('../../models');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    // Fetch data from models
    const userData = (await User.findAll()) || [];
    const cardioData = (await Cardio.findAll()) || [];
    const workoutData = (await Workout.findAll()) || [];
    const waterData = (await Water.findAll()) || [];
    const sleepData = (await Sleep.findAll()) || [];
    const stepsData = (await Steps.findAll()) || [];

    if (req.session.loggedIn) {  // If user logged in, include user data
      res.render('dashboard2', {
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
router.get('/water/:id', async (req, res) => {
    try {
        const userId = req.session.passport.user;
        //! date needs to be updated with value from frontend
        // const dateInput = req.params.id;
        // console.log(dateInput);
        // console.log(userId);

        const water = await Water.findAll({
            where: {
                userId: userId,
                created_at: {
                    [Op.between]: ["2024-02-16", "2024-02-17"],
                }
            }
        });

        console.log('Water data:', water);

        const waterSum = await Water.sum('amount', {
            where: {
                userId: userId,
                created_at: {
                    [Op.between]: ["2024-02-16", "2024-02-17"],
                }
            }
        });

        console.log(waterSum);

        if (!water) {
            return res.status(404).send('Water not found');
        }

        res.status(200).json(water);
        
    } catch (error) {
        console.error('Error processing water data:', error);
        res.status(500).send('Error processing water data');
    }
});

router.post('/water', async (req, res) => {
    console.log(req.body);
    const userId = req.session.passport.user;

    console.log(req.session);
    console.log(userId);

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

router.get('/sleep/:id', async (req, res) => {
    try {
        const userId = req.session.passport.user;
        //! date needs to be updated with value from frontend
        // const dateInput = req.params.id;
        // console.log(dateInput);
        console.log(userId);

        const sleep = await Sleep.findAll({
            where: {
                userId: userId,
                created_at: {
                    [Op.between]: ["2024-02-16", "2024-02-17"],
                }
            }
        });

        console.log('Sleep data:', sleep);

        const sleepSum = await Sleep.sum('hours', {
            where: {
                userId: userId,
                created_at: {
                    [Op.between]: ["2024-02-16", "2024-02-17"],
                }
            }
        });

        console.log(sleepSum);

        if (!sleep) {
            return res.status(404).send('Sleep not found');
        }

        res.status(200).json(sleep);
        
    } catch (error) {
        console.error('Error processing Sleep data:', error);
        res.status(500).send('Error processing Sleep data');
    }
});

router.post('/sleep', async (req, res) => {
    console.log(req.body);
    const userId = req.session.passport.user;
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

router.get('/cardio/:id', async (req, res) => {
    try {
        const userId = req.session.passport.user;
        //! date needs to be updated with value from frontend
        // const dateInput = req.params.id;
        // console.log(dateInput);
        console.log(userId);

        const cardio = await Cardio.findAll({
            where: {
                userId: userId,
                created_at: {
                    [Op.between]: ["2024-02-16", "2024-02-17"],
                }
            }
        });

        console.log('Cardio data:', cardio);

        if (!cardio) {
            return res.status(404).send('Cardio not found');
        }

        res.status(200).json(cardio);
        
    } catch (error) {
        console.error('Error processing Cardio data:', error);
        res.status(500).send('Error processing Cardio data');
    }
});

router.post('/cardio', async (req, res) => {
    console.log(req.body);
    const userId = req.session.passport.user;
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

router.get('/steps/:id', async (req, res) => {
    try {
        const userId = req.session.passport.user;
        //! date needs to be updated with value from frontend
        // const dateInput = req.params.id;
        // console.log(dateInput);
        console.log(userId);

        const steps = await Steps.findAll({
            where: {
                userId: userId,
                created_at: {
                    [Op.between]: ["2024-02-16", "2024-02-17"],
                }
            }
        });

        console.log('Steps data:', steps);

        const stepsSum = await Steps.sum('amount', {
            where: {
                userId: userId,
                created_at: {
                    [Op.between]: ["2024-02-16", "2024-02-17"],
                }
            }
        });

        console.log(stepsSum);

        if (!steps) {
            return res.status(404).send('Steps not found');
        }

        res.status(200).json(steps);
        
    } catch (error) {
        console.error('Error processing Steps data:', error);
        res.status(500).send('Error processing Steps data');
    }
});

router.post('/steps', async (req, res) => {
    console.log(req.body);
    const userId = req.session.passport.user;
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

router.get('/workout/:id', async (req, res) => {
    try {
        const userId = req.session.passport.user;
        //! date needs to be updated with value from frontend
        // const dateInput = req.params.id;
        // console.log(dateInput);
        console.log(userId);

        const workout = await Workout.findAll({
            where: {
                userId: userId,
                created_at: {
                    [Op.between]: ["2024-02-16", "2024-02-17"],
                }
            }
        });

        console.log('Workout data:', workout);

        if (!workout) {
            return res.status(404).send('Workout not found');
        }

        res.status(200).json(workout);
        
    } catch (error) {
        console.error('Error processing Workout data:', error);
        res.status(500).send('Error processing Workout data');
    }
});

router.post('/workout', async (req, res) => {
    console.log(req.body);
    const userId = req.session.passport.user;
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
