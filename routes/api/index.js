const router = require('express').Router();
const dashboardRoutes = require('./dashboard-route');
const userRoutes = require('./user-profile-route');
const registerRoutes = require('./register-route');
const loginRoutes = require('./login-route');
const logoutRoutes = require('./logout-route');

router.use('/register', registerRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/user', userRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);

module.exports = router;