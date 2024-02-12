const router = require('express').Router();
// const dashboardRoutes = require('./dashboard-route');
// const userRoutes = require('./user-profile-route');
const registerRoutes = require('./register-route');
const loginRoutes = require('./login-route');

router.use('/register', registerRoutes);
// router.use('/dashboard', dashboardRoutes);
// router.use('/user', userRoutes);
router.use('/login', loginRoutes);

module.exports = router;