const router = require('express').Router();
const loginUser = require('../../controllers/userController');

// Render login page
router.get('/', (req, res) => {
  res.render('login');
});

// Login route
router.post('/', loginUser);

module.exports = router;
