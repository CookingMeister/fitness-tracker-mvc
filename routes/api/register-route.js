const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Render the register page
router.get('/', (req, res) => {
    res.render('register');
  });

// Register a new user and login to session
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    existingUser  // If user already exists, return error
      ? res.status(400).json({ error: 'Username already in use' })
       // Hash the password with bcrypt
      : await bcrypt.hash(password, saltRounds).then(async (hashedPassword) => {
          const newUser = await User.create({ // Create new user
            username,
            password: hashedPassword,
          });
          req.login(newUser, (err) => { // Login the user
            if (err) {
              console.error(err);
              return res.status(500).json({ error: 'Internal Server Error' });
            }
            req.session.loggedIn = true; // Set session loggedIn to true
            console.log('New User created and logged in');
            return res.json(newUser);
          });
        });
  } catch (error) { // Error handling
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

  module.exports = router;