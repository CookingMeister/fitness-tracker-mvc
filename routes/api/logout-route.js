const router = require('express').Router();
const { logoutUser } = require('../../controllers/userController');

// Logout route
router.post('/', logoutUser);

module.exports = router;