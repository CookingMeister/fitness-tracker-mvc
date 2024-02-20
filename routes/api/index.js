// requires all external route files
const router = require('express').Router();
const dashboardRoutes = require('./dashboard-route');
const registerRoutes = require('./register-route');
const loginRoutes = require('./login-route');
const logoutRoutes = require('./logout-route');

// assigns routes
router.use('/register', registerRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);

module.exports = router;