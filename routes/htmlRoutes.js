const router = require('express').Router();


// Route to render the home page using EJS
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});
// Error handling for undefined routes
router.use((req, res) => {
    res.status(404).render('error');
  });

module.exports = router;
