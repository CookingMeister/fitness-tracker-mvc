const router = require('express').Router();
const registerUser = require('../../controllers/authController');

// Render the register page
router.get('/', (req, res) => {
    res.render('register');
  });

// Register a new user and login to session
router.post('/', registerUser);



  module.exports = router;